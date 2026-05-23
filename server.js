const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const { URL } = require("node:url");

const port = Number(process.env.PORT || 3000);
const basePath = process.env.BASE_PATH || "/music";
const rootDir = __dirname;
const dataDir = process.env.DATA_DIR || path.join(rootDir, "data");
const profileFile = path.join(dataDir, "profiles.json");
let profileWriteQueue = Promise.resolve();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function sanitizeName(name) {
  const value = String(name || "").trim().slice(0, 80);
  return value || "Lernprofil";
}

function idPrefix(name) {
  const normalized = sanitizeName(name)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 20);
  return normalized || "musik";
}

function createId(name) {
  return `${idPrefix(name)}-${crypto.randomBytes(3).toString("hex")}`;
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function readProfiles() {
  try {
    const raw = await fs.readFile(profileFile, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

async function writeProfiles(profiles) {
  await fs.mkdir(dataDir, { recursive: true });
  const tempFile = `${profileFile}.${process.pid}.tmp`;
  await fs.writeFile(tempFile, `${JSON.stringify(profiles, null, 2)}\n`);
  await fs.rename(tempFile, profileFile);
}

async function updateProfiles(mutator) {
  const nextWrite = profileWriteQueue.then(async () => {
    const profiles = await readProfiles();
    const result = await mutator(profiles);
    await writeProfiles(profiles);
    return result;
  });
  profileWriteQueue = nextWrite.catch(() => {});
  return nextWrite;
}

function normalizeDone(done) {
  if (!Array.isArray(done)) return [];
  return [...new Set(done.map(Number).filter((id) => Number.isInteger(id) && id >= 1 && id <= 11))].sort((a, b) => a - b);
}

function cleanProfile(profile) {
  return {
    id: profile.id,
    name: profile.name,
    done: normalizeDone(profile.done),
    examDate: typeof profile.examDate === "string" ? profile.examDate.slice(0, 10) : "",
    createdAt: profile.createdAt,
    updatedAt: profile.updatedAt
  };
}

async function handleApi(request, response, pathname) {
  if (request.method === "POST" && pathname === `${basePath}/api/profiles`) {
    const body = await readBody(request);
    const profile = await updateProfiles(async (profiles) => {
      let id = createId(body.name);
      while (profiles[id]) id = createId(body.name);
      const now = new Date().toISOString();
      const created = cleanProfile({
        id,
        name: sanitizeName(body.name),
        done: body.done,
        examDate: body.examDate,
        createdAt: now,
        updatedAt: now
      });
      profiles[id] = created;
      return created;
    });
    sendJson(response, 201, profile);
    return true;
  }

  const match = pathname.match(new RegExp(`^${basePath}/api/profiles/([^/]+)$`));
  if (!match) return false;

  const id = decodeURIComponent(match[1]);
  const profiles = await readProfiles();
  const existing = profiles[id];
  if (!existing) {
    sendJson(response, 404, { error: "Lern-ID nicht gefunden." });
    return true;
  }

  if (request.method === "GET") {
    sendJson(response, 200, cleanProfile(existing));
    return true;
  }

  if (request.method === "PUT") {
    const body = await readBody(request);
    const updated = await updateProfiles(async (profiles) => {
      const latest = profiles[id] || existing;
      const next = cleanProfile({
        ...latest,
        name: sanitizeName(body.name || latest.name),
        done: body.done,
        examDate: body.examDate,
        updatedAt: new Date().toISOString()
      });
      profiles[id] = next;
      return next;
    });
    sendJson(response, 200, updated);
    return true;
  }

  sendJson(response, 405, { error: "Methode nicht erlaubt." });
  return true;
}

async function serveStatic(response, pathname) {
  let filePath = pathname === basePath || pathname === `${basePath}/` ? "index.html" : pathname.slice(basePath.length + 1);
  filePath = filePath || "index.html";
  const absolutePath = path.resolve(rootDir, filePath);
  if (!absolutePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await fs.readFile(absolutePath);
    const ext = path.extname(absolutePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600"
    });
    response.end(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      const content = await fs.readFile(path.join(rootDir, "index.html"));
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache"
      });
      response.end(content);
      return;
    }
    throw error;
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/") {
      response.writeHead(302, { Location: `${basePath}/` });
      response.end();
      return;
    }
    if (!url.pathname.startsWith(basePath)) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    if (url.pathname.startsWith(`${basePath}/api/`) && await handleApi(request, response, url.pathname)) return;
    await serveStatic(response, url.pathname);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Interner Serverfehler." });
  }
});

server.listen(port, () => {
  console.log(`Music Lerncoach listening on http://localhost:${port}${basePath}/`);
});

# Musik Lerncoach

Mobile-first Lernapp für die 2. Musikprüfung: Lernziele, Übungen, Hörtraining, Klaviatur, Prüfungstermin-Tracker und Profil-ID zum Wiederladen des Fortschritts.

## Lokal starten

```bash
npm start
```

Dann öffnen:

```text
http://localhost:3000/music/
```

## Profil-Funktion

Ein Lernender gibt einen Namen ein und erhält eine Lern-ID, zum Beispiel `lara-a1b2c3`. Mit dieser ID kann der Fortschritt später auf einem anderen Gerät geladen werden. Die Profile werden serverseitig in `data/profiles.json` gespeichert.

## Deployment unter `/music`

Die App ist für den Pfad `/music` vorbereitet. Die API liegt unter `/music/api/...`.

Beispiel für einen Reverse Proxy:

```nginx
location /music/ {
  proxy_pass http://127.0.0.1:3000/music/;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

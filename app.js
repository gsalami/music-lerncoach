const goals = [
  {
    id: 1,
    group: "Repetition",
    day: 1,
    title: "Töne im Violin- und Bassschlüssel",
    simple: "Noten liegen auf Linien oder in Zwischenräumen. Der Schlüssel sagt dir, welche Namen diese Plätze haben.",
    help: "Zähle immer von unten nach oben. Erst frage: Violin oder Bass? Dann frage: Linie oder Zwischenraum? Dann nimm den passenden Merkspruch.",
    memory: "Violin Linien: E-G-H-D-F. Violin Zwischenräume: F-A-C-E. Bass Linien: G-H-D-F-A. Bass Zwischenräume: A-C-E-G.",
    steps: ["Schlüssel erkennen.", "Linie oder Zwischenraum bestimmen.", "Von unten zählen.", "Merkspruch anwenden.", "Oktave dazuschreiben, wenn verlangt."],
    visual: "staff",
    questions: [
      { type: "choice", q: "Violinschlüssel: Linie 3 ist welcher Ton?", hint: "Linien im Violinschlüssel: E-G-H-D-F", a: "H", choices: ["H", "A", "D", "G"], explain: "Die Linien von unten sind E, G, H, D, F. Linie 3 ist H." },
      { type: "choice", q: "Bassschlüssel: Zwischenraum 2 ist welcher Ton?", hint: "Zwischenräume im Bass: A-C-E-G", a: "C", choices: ["A", "C", "E", "G"], explain: "Die Zwischenräume von unten sind A, C, E, G. ZR 2 ist C." },
      { type: "choice", q: "Wo liegt das mittlere C im Violinschlüssel?", hint: "C4 ist das mittlere C.", a: "2. Hilfslinie unten", choices: ["Linie 1", "ZR 2", "2. Hilfslinie unten", "Linie 5"], explain: "Im Violinschlüssel liegt C4 auf der zweiten Hilfslinie unter dem System." }
    ]
  },
  {
    id: 2,
    group: "Repetition",
    day: 1,
    title: "Rhythmuswerte und Pausenwerte",
    simple: "Rhythmuswerte sagen, wie lange eine Note oder Pause dauert. Im 4/4-Takt ist die Viertel die normale Zählzeit.",
    help: "Denke wie bei Geld: Eine ganze Note ist 4. Eine halbe ist die Hälfte davon: 2. Eine Viertel ist 1. Eine Achtel ist 0.5.",
    memory: "Ganze 4, Halbe 2, Viertel 1, Achtel 0.5, Sechzehntel 0.25. Punkt = plus die Hälfte.",
    steps: ["Grundwerte auswendig können.", "Punktregel anwenden.", "Passende Pause kennen.", "Triolen als Dreierteilung erkennen."],
    visual: "rhythm",
    questions: [
      { type: "choice", q: "Wie lange dauert eine punktierte Viertelnote?", hint: "Punkt = plus die Hälfte des eigenen Werts.", a: "1.5 Zählzeiten", choices: ["0.75 Zählzeiten", "1.5 Zählzeiten", "2 Zählzeiten", "3 Zählzeiten"], explain: "Eine Viertel dauert 1. Der Punkt gibt die Hälfte dazu: 0.5. Zusammen 1.5." },
      { type: "choice", q: "Wie lange dauert eine Achtelnote?", hint: "Eine Viertel wird in zwei Achtel geteilt.", a: "0.5 Zählzeiten", choices: ["0.25 Zählzeiten", "0.5 Zählzeiten", "1 Zählzeit", "2 Zählzeiten"], explain: "Zwei Achtel ergeben eine Viertel. Darum dauert eine Achtel 0.5." },
      { type: "choice", q: "Was ist eine Achteltriole?", hint: "Triole bedeutet: in drei gleiche Teile teilen.", a: "3 Achtel in 1 Zählzeit", choices: ["2 Achtel in 1 Zählzeit", "3 Achtel in 1 Zählzeit", "4 Achtel in 1 Zählzeit", "1 Achtel mit Punkt"], explain: "Eine Achteltriole teilt eine Zählzeit in drei gleich lange Achtel." }
    ]
  },
  {
    id: 3,
    group: "Dur-Tonleitern",
    day: 1,
    title: "Ganzton und Halbton unterscheiden",
    simple: "Ein Halbton ist der kleinste Schritt zur direkt nächsten Taste. Ein Ganzton besteht aus zwei Halbtonschritten.",
    help: "Auf der Klaviatur sind E-F und H-C besonders: Dort liegt keine schwarze Taste dazwischen. Deshalb sind sie Halbtöne.",
    memory: "E-F und H-C sind natürliche Halbtöne. Ganzton = zwei Halbtöne.",
    steps: ["Tasten nebeneinander suchen.", "Wenn direkt daneben: Halbton.", "Wenn eine Taste dazwischen liegt: Ganzton.", "E-F und H-C immer besonders merken."],
    visual: "keyboard",
    questions: [
      { type: "choice", q: "E nach F ist ...", hint: "Zwischen E und F gibt es keine schwarze Taste.", a: "Halbton", choices: ["Ganzton", "Halbton"], explain: "E-F ist ein natürlicher Halbton." },
      { type: "choice", q: "C nach D ist ...", hint: "Zwischen C und D liegt Cis.", a: "Ganzton", choices: ["Ganzton", "Halbton"], explain: "C-Cis-D sind zwei Halbtonschritte, also ein Ganzton." },
      { type: "choice", q: "H nach C ist ...", hint: "Auch hier gibt es keine schwarze Taste dazwischen.", a: "Halbton", choices: ["Ganzton", "Halbton"], explain: "H-C ist der zweite natürliche Halbton." }
    ]
  },
  {
    id: 4,
    group: "Dur-Tonleitern",
    day: 2,
    title: "Durtonleiter schreiben",
    simple: "Jede Durtonleiter hat dasselbe Abstandsmuster. Wenn ein Abstand nicht passt, setzt du ein Kreuz oder Be.",
    help: "Schreibe zuerst die Buchstaben der Tonleiter. Dann prüfst du Schritt für Schritt das Muster: G-G-H-G-G-G-H.",
    memory: "Dur-Muster: G-G-H-G-G-G-H. Halbtöne liegen zwischen Stufe 3-4 und 7-8.",
    steps: ["Grundton notieren.", "Buchstaben der Reihe nach schreiben.", "Abstände prüfen.", "Mit Kreuz oder Be korrigieren.", "Ende wieder beim Grundton."],
    visual: "scale",
    questions: [
      { type: "choice", q: "Wie lautet das Dur-Muster?", hint: "Sieben Schritte bis zur Oktave.", a: "G-G-H-G-G-G-H", choices: ["G-H-G-G-H-G-G", "G-G-H-G-G-G-H", "H-G-G-H-G-G-G", "G-G-G-H-G-G-H"], explain: "Jede Durtonleiter hat genau dieses Muster: G-G-H-G-G-G-H." },
      { type: "choice", q: "Welche Töne hat D-Dur?", hint: "D-Dur hat 2 Kreuze.", a: "D E Fis G A H Cis D", choices: ["D E F G A H C D", "D E Fis G A H Cis D", "D Es F G A B C D", "D E Fis Gis A H C D"], explain: "D-Dur braucht Fis und Cis, damit das Dur-Muster stimmt." },
      { type: "choice", q: "Welche Töne hat F-Dur?", hint: "F-Dur hat ein Be.", a: "F G A B C D E F", choices: ["F G A H C D E F", "F G A B C D E F", "F Gis A B C D E F", "F G As B C D E F"], explain: "F-Dur braucht B statt H, damit zwischen Stufe 3 und 4 ein Halbton entsteht." }
    ]
  },
  {
    id: 5,
    group: "Quintenzirkel",
    day: 2,
    title: "Merksprüche für Kreuz- und Be-Tonarten",
    simple: "Die Tonarten kommen in einer festen Reihenfolge. Diese Reihenfolge lernst du mit Sprüchen.",
    help: "Die Position im Spruch sagt die Anzahl Vorzeichen: G ist 1 Kreuz, D ist 2 Kreuze, A ist 3 Kreuze.",
    memory: "Kreuztonarten: G-D-A-E-H-Fis. Be-Tonarten: F-B-Es-As-Des-Ges.",
    steps: ["Kreuzspruch aufsagen.", "Be-Spruch aufsagen.", "Position zählen.", "Anzahl Vorzeichen nennen."],
    visual: "circle",
    questions: [
      { type: "choice", q: "Welche Tonart hat 3 Kreuze?", hint: "G-D-A-E-H-Fis", a: "A-Dur", choices: ["G-Dur", "A-Dur", "E-Dur", "D-Dur"], explain: "G=1, D=2, A=3. Also A-Dur." },
      { type: "choice", q: "Welche Tonart hat 4 Bes?", hint: "F-B-Es-As-Des-Ges", a: "As-Dur", choices: ["B-Dur", "Es-Dur", "As-Dur", "Des-Dur"], explain: "F=1, B=2, Es=3, As=4." },
      { type: "choice", q: "Welche Reihe sind die Kreuztonarten?", hint: "Geh Du Alter Esel Hol Futter.", a: "G-D-A-E-H-Fis", choices: ["F-B-Es-As-Des-Ges", "G-D-A-E-H-Fis", "Fis-Cis-Gis-Dis-Ais", "C-G-D-A-E-H"], explain: "Die Kreuztonarten lauten G, D, A, E, H, Fis." }
    ]
  },
  {
    id: 6,
    group: "Quintenzirkel",
    day: 2,
    title: "Reihenfolge der Kreuze und Bes",
    simple: "Nicht nur die Tonarten haben eine Reihenfolge, sondern auch die einzelnen Vorzeichen.",
    help: "Wenn eine Tonart 3 Kreuze hat, nimmst du die ersten 3 Kreuze aus der Kreuz-Reihenfolge: Fis, Cis, Gis.",
    memory: "Kreuze: Fis-Cis-Gis-Dis-Ais-Eis-His. Bes: B-Es-As-Des-Ges-Ces-Fes.",
    steps: ["Entscheiden: Kreuze oder Bes?", "Reihenfolge aufsagen.", "So viele nehmen, wie die Tonart braucht.", "In genau dieser Reihenfolge schreiben."],
    visual: "accidentals",
    questions: [
      { type: "choice", q: "Welche sind die ersten 3 Kreuze?", hint: "Fis-Cis-Gis-Dis...", a: "Fis, Cis, Gis", choices: ["Fis, Gis, Cis", "Fis, Cis, Gis", "Cis, Fis, Gis", "B, Es, As"], explain: "Die Kreuz-Reihenfolge beginnt Fis, Cis, Gis." },
      { type: "choice", q: "Welche sind die ersten 4 Bes?", hint: "B-Es-As-Des...", a: "B, Es, As, Des", choices: ["B, Es, As, Des", "B, As, Es, Des", "Es, As, Des, Ges", "Fis, Cis, Gis, Dis"], explain: "Die Be-Reihenfolge beginnt B, Es, As, Des." },
      { type: "choice", q: "A-Dur hat 3 Kreuze. Welche?", hint: "Nimm die ersten 3 Kreuze.", a: "Fis, Cis, Gis", choices: ["Fis, Cis, Gis", "B, Es, As", "Fis, Cis, Dis", "Gis, Dis, Ais"], explain: "A-Dur ist die dritte Kreuztonart, also Fis, Cis, Gis." }
    ]
  },
  {
    id: 7,
    group: "Anwendung",
    day: 3,
    title: "Vorzeichen an den richtigen Ort schreiben",
    simple: "Vorzeichen sind die Kreuze oder Bes am Anfang eines Notensystems. Kreuze erhöhen einen Ton, Bes erniedrigen ihn. Sie gelten dann für das ganze Stück.",
    help: "Denke in drei Fragen: Welche Tonart? Dann weisst du, wie viele Vorzeichen. Welche Reihenfolge? Dann weisst du, welche Vorzeichen. Welcher Schlüssel? Dann weisst du, auf welche Linie oder in welchen Zwischenraum du sie zeichnest. Bei Kreuzen nimmst du Fis-Cis-Gis..., bei Bes nimmst du B-Es-As...",
    memory: "Nicht raten: Tonart -> Anzahl -> Reihenfolge -> Ort im Schlüssel.",
    steps: ["Tonart lesen: z.B. A-Dur.", "Anzahl finden: A-Dur hat 3 Kreuze.", "Reihenfolge nehmen: Fis, Cis, Gis.", "Jedes Zeichen auf den passenden Ton-Platz setzen: Fis auf F, Cis auf C, Gis auf G.", "Im Bassschlüssel sitzen dieselben Töne an anderen Höhen als im Violinschlüssel."],
    visual: "accidentalPlaces",
    questions: [
      { type: "choice", q: "Was ist ein Vorzeichen am Anfang des Systems?", hint: "Es verändert einen Ton für das ganze Stück.", a: "Ein Kreuz oder Be, das einen Ton immer verändert", choices: ["Eine Note mit Rhythmus", "Ein Kreuz oder Be, das einen Ton immer verändert", "Der Name der Tonart", "Eine Pause"], explain: "Ein Vorzeichen ist kein eigener Ton. Es sagt zum Beispiel: Alle F werden zu Fis." },
      { type: "choice", q: "A-Dur hat 3 Kreuze. Was zeichnest du ein?", hint: "Nimm die ersten 3 aus der Kreuz-Reihenfolge.", a: "Fis, Cis, Gis", choices: ["Fis, Cis, Gis", "G, D, A", "B, Es, As", "Fis, Gis, Cis"], explain: "A-Dur ist die dritte Kreuztonart. Darum nimmst du die ersten drei Kreuze: Fis, Cis, Gis." },
      { type: "choice", q: "Es-Dur hat 3 Bes. Was zeichnest du ein?", hint: "Nimm die ersten 3 aus der Be-Reihenfolge.", a: "B, Es, As", choices: ["B, Es, As", "Fis, Cis, Gis", "Es, As, Des", "B, As, Es"], explain: "Es-Dur ist die dritte Be-Tonart. Darum nimmst du die ersten drei Bes: B, Es, As." },
      { type: "choice", q: "Warum sind die Orte im Violin- und Bassschlüssel anders?", hint: "Der gleiche Ton liegt in jedem Schlüssel an einem anderen Platz.", a: "Weil F, C oder G im Bassschlüssel an anderen Linien/Zwischenräumen liegen", choices: ["Weil die Reihenfolge anders ist", "Weil F, C oder G im Bassschlüssel an anderen Linien/Zwischenräumen liegen", "Weil Bes immer tiefer sind", "Weil Kreuze nur im Violinschlüssel vorkommen"], explain: "Die Reihenfolge bleibt gleich. Aber die Töne F, C, G usw. liegen je nach Schlüssel an anderen Stellen im Notensystem." }
    ]
  },
  {
    id: 8,
    group: "Anwendung",
    day: 2,
    title: "Vorzeichen zu jeder Tonart setzen",
    simple: "Eine Tonart verrät dir, wie viele Kreuze oder Bes du brauchst. Dann nimmst du die Vorzeichen in der richtigen Reihenfolge.",
    help: "A-Dur: A steht an dritter Stelle der Kreuztonarten. Also 3 Kreuze. Dann nimmst du Fis, Cis, Gis.",
    memory: "Tonart suchen, Anzahl zählen, Vorzeichen-Reihe abschneiden.",
    steps: ["Ist es Kreuz- oder Be-Tonart?", "Position in der Tonarten-Reihe finden.", "Gleich viele Vorzeichen nehmen.", "Im Schlüssel einzeichnen."],
    visual: "accidentals",
    questions: [
      { type: "choice", q: "Des-Dur hat wie viele Bes?", hint: "F-B-Es-As-Des-Ges", a: "5", choices: ["3", "4", "5", "6"], explain: "F=1, B=2, Es=3, As=4, Des=5." },
      { type: "choice", q: "Welche Vorzeichen hat Des-Dur?", hint: "Erste 5 Bes.", a: "B, Es, As, Des, Ges", choices: ["B, Es, As, Des, Ges", "Fis, Cis, Gis, Dis, Ais", "B, Es, As", "Des, Ges, Ces"], explain: "Des-Dur ist die fünfte Be-Tonart, also die ersten fünf Bes." }
    ]
  },
  {
    id: 9,
    group: "Anwendung",
    day: 3,
    title: "Tonart aus Vorzeichen bestimmen",
    simple: "Bei Kreuzen schaust du auf das letzte Kreuz. Bei Bes schaust du auf das vorletzte Be.",
    help: "Kreuz-Trick: letztes Kreuz + einen Halbton höher. Be-Trick: vorletztes Be ist direkt der Name der Tonart.",
    memory: "Kreuze: letztes Kreuz + Halbton. Bes: vorletztes Be. Ausnahme: 1 Be = F-Dur.",
    steps: ["Vorzeichen zählen.", "Kreuze oder Bes erkennen.", "Passenden Trick anwenden.", "Grundton einzeichnen."],
    visual: "circle",
    questions: [
      { type: "choice", q: "3 Kreuze: Fis, Cis, Gis. Welche Tonart?", hint: "Letztes Kreuz Gis, Halbton höher.", a: "A-Dur", choices: ["G-Dur", "A-Dur", "E-Dur", "H-Dur"], explain: "Gis einen Halbton höher ist A. Also A-Dur." },
      { type: "choice", q: "3 Bes: B, Es, As. Welche Tonart?", hint: "Vorletztes Be.", a: "Es-Dur", choices: ["F-Dur", "B-Dur", "Es-Dur", "As-Dur"], explain: "Das vorletzte Be ist Es. Also Es-Dur." },
      { type: "choice", q: "1 Be bedeutet welche Tonart?", hint: "Das ist die Ausnahme.", a: "F-Dur", choices: ["B-Dur", "F-Dur", "C-Dur", "Es-Dur"], explain: "Bei nur einem Be gibt es kein vorletztes Be. Die Ausnahme ist F-Dur." }
    ]
  },
  {
    id: 10,
    group: "Anwendung",
    day: 3,
    title: "Quintenzirkel auswendig zeichnen",
    simple: "Der Quintenzirkel ist eine Uhr für Tonarten: oben C, rechts Kreuze, links Bes.",
    help: "Zeichne zuerst nur C oben. Dann rechts G-D-A-E-H-Fis. Dann links F-B-Es-As-Des-Ges.",
    memory: "Oben C. Rechts: G-D-A-E-H-Fis. Links: F-B-Es-As-Des-Ges.",
    steps: ["Kreis zeichnen.", "C oben setzen.", "Rechts Kreuztonarten eintragen.", "Links Be-Tonarten eintragen.", "Anzahl Vorzeichen dazuschreiben."],
    visual: "circle",
    questions: [
      { type: "choice", q: "Was steht im Quintenzirkel oben bei 12 Uhr?", hint: "Keine Vorzeichen.", a: "C-Dur", choices: ["C-Dur", "G-Dur", "F-Dur", "A-Dur"], explain: "C-Dur hat keine Vorzeichen und steht oben." },
      { type: "choice", q: "Welche Seite sind die Kreuztonarten?", hint: "G-D-A-E-H-Fis.", a: "rechts im Uhrzeigersinn", choices: ["links gegen Uhrzeigersinn", "rechts im Uhrzeigersinn", "unten allein", "nur oben"], explain: "Im Uhrzeigersinn gehst du zu den Kreuztonarten." },
      { type: "choice", q: "Was liegt unten bei 6 Uhr?", hint: "Kreuz- und Be-Seite treffen sich.", a: "Fis/Ges-Dur", choices: ["C-Dur", "A-Dur", "Fis/Ges-Dur", "B-Dur"], explain: "Unten treffen sich Fis-Dur und Ges-Dur." }
    ]
  },
  {
    id: 11,
    group: "Anwendung",
    day: 3,
    title: "Tonleitern auf die Klaviatur übertragen",
    simple: "Wenn du die Töne der Tonleiter kennst, kannst du sie auf der Klaviatur markieren. Kreuze und Bes sind oft schwarze Tasten.",
    help: "Beispiel A-Dur: A-H-Cis-D-E-Fis-Gis-A. Die schwarzen Tasten sind Cis, Fis und Gis.",
    memory: "Erst Tonleiter schreiben, dann Tasten markieren, dann Duktus-Bögen zeichnen.",
    steps: ["Tonleiter notieren.", "Grundton auf der Klaviatur suchen.", "Alle Töne markieren.", "Schwarze Tasten besonders beachten.", "Fingergruppen 1-2-3 | 1-2-3-4-5 einzeichnen."],
    visual: "keyboardA",
    questions: [
      { type: "choice", q: "Welche Töne hat A-Dur?", hint: "A-Dur hat 3 Kreuze.", a: "A H Cis D E Fis Gis A", choices: ["A H C D E F G A", "A H Cis D E Fis Gis A", "A B Cis D E Fis Gis A", "A H Cis Dis E Fis G A"], explain: "A-Dur hat Fis, Cis und Gis." },
      { type: "choice", q: "Welche schwarzen Tasten braucht A-Dur?", hint: "Die 3 Kreuze.", a: "Cis, Fis, Gis", choices: ["Cis, Fis, Gis", "B, Es, As", "Fis, Cis, Dis", "Nur Fis"], explain: "A-Dur hat die Kreuze Fis, Cis, Gis. Auf der Klaviatur sind das schwarze Tasten." },
      { type: "choice", q: "Standard-Duktus rechte Hand für A-Dur?", hint: "Wie C-Dur: zwei Gruppen.", a: "1-2-3 | 1-2-3-4-5", choices: ["1-2-3 | 1-2-3-4-5", "1-2 | 1-2-3-4-5", "2-1-2-3-1-2-3-4", "1-2-3-4 | 1-2-3-4"], explain: "A-Dur nutzt den Standard-Fingersatz: 1-2-3, Daumen untersetzen, 1-2-3-4-5." }
    ]
  }
];

const dayPlans = {
  1: "Fundament: Noten lesen, Rhythmuswerte und Ganzton/Halbton. Heute geht es um sichere Basics.",
  2: "Tonleitern: Dur-Muster, Kreuz-/Be-Tonarten und Vorzeichen-Reihenfolgen. Das ist der wichtigste Tag.",
  3: "Anwendung: Tonarten erkennen, Quintenzirkel, Klaviatur/Duktus und Prüfungsmix."
};

const priorityMeta = {
  4: { level: "Sehr hoch", reason: "Basis für Tonleitern, Vorzeichen und Klaviatur" },
  6: { level: "Sehr hoch", reason: "Ohne Reihenfolge klappen Tonarten und Vorzeichen nicht" },
  9: { level: "Sehr hoch", reason: "Kommt häufig als Prüfungs-Anwendung vor" },
  1: { level: "Hoch", reason: "Grundlage fürs Lesen und Einzeichnen" },
  2: { level: "Hoch", reason: "Eigener Prüfungsteil mit vielen sicheren Punkten" },
  5: { level: "Hoch", reason: "Schneller Weg zu Anzahl Kreuze/Bes" },
  10: { level: "Hoch", reason: "Auswendig zeichnen braucht Wiederholung" },
  8: { level: "Mittel", reason: "Baut direkt auf Lernziel 5 und 6 auf" },
  11: { level: "Mittel", reason: "Anwendung auf der Klaviatur" },
  3: { level: "Mittel", reason: "Hilft beim Dur-Muster" },
  7: { level: "Mittel", reason: "Positionen zeichnen, wenn die Reihenfolge sitzt" }
};

const priorityOrder = [4, 6, 9, 1, 2, 5, 10, 8, 11, 3, 7];

let currentGoalId = 1;
let currentDay = 1;
let mixedMode = false;
let currentQuestion = null;
let challengeNote = null;
let audioContext = null;
let saveTimer = null;
const done = new Set(JSON.parse(localStorage.getItem("musicCoachDone") || "[]"));
const storedExamDate = localStorage.getItem("musicCoachExamDate") || "";
let activeProfile = JSON.parse(localStorage.getItem("musicCoachProfile") || "null");

const tabs = document.querySelector("#goalTabs");
const dayFocus = document.querySelector("#dayFocus");
const profileNameInput = document.querySelector("#profileNameInput");
const profileIdInput = document.querySelector("#profileIdInput");
const profileStatus = document.querySelector("#profileStatus");
const examDateInput = document.querySelector("#examDateInput");
const trackStatus = document.querySelector("#trackStatus");
const priorityList = document.querySelector("#priorityList");
const goalGroup = document.querySelector("#goalGroup");
const goalTitle = document.querySelector("#goalTitle");
const visualZone = document.querySelector("#visualZone");
const simpleExplanation = document.querySelector("#simpleExplanation");
const helpText = document.querySelector("#helpText");
const memoryText = document.querySelector("#memoryText");
const microSteps = document.querySelector("#microSteps");
const questionBox = document.querySelector("#questionBox");
const answerArea = document.querySelector("#answerArea");
const feedbackBox = document.querySelector("#feedbackBox");
const markButton = document.querySelector("#markButton");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
const pianoTrainer = document.querySelector("#pianoTrainer");
const earStatus = document.querySelector("#earStatus");
const playChallengeButton = document.querySelector("#playChallengeButton");

const pianoNotes = [
  { note: "C4", label: "C", freq: 261.63, type: "white" },
  { note: "Cis4", label: "Cis", freq: 277.18, type: "black", left: 4.6 },
  { note: "D4", label: "D", freq: 293.66, type: "white" },
  { note: "Dis4", label: "Dis", freq: 311.13, type: "black", left: 11.7 },
  { note: "E4", label: "E", freq: 329.63, type: "white" },
  { note: "F4", label: "F", freq: 349.23, type: "white" },
  { note: "Fis4", label: "Fis", freq: 369.99, type: "black", left: 26 },
  { note: "G4", label: "G", freq: 392.0, type: "white" },
  { note: "Gis4", label: "Gis", freq: 415.3, type: "black", left: 33.2 },
  { note: "A4", label: "A", freq: 440.0, type: "white" },
  { note: "Ais4", label: "Ais/B", freq: 466.16, type: "black", left: 40.3 },
  { note: "H4", label: "H", freq: 493.88, type: "white" },
  { note: "C5", label: "C", freq: 523.25, type: "white" },
  { note: "Cis5", label: "Cis", freq: 554.37, type: "black", left: 54.6 },
  { note: "D5", label: "D", freq: 587.33, type: "white" },
  { note: "Dis5", label: "Dis", freq: 622.25, type: "black", left: 61.7 },
  { note: "E5", label: "E", freq: 659.25, type: "white" },
  { note: "F5", label: "F", freq: 698.46, type: "white" },
  { note: "Fis5", label: "Fis", freq: 739.99, type: "black", left: 76 },
  { note: "G5", label: "G", freq: 783.99, type: "white" },
  { note: "Gis5", label: "Gis", freq: 830.61, type: "black", left: 83.2 },
  { note: "A5", label: "A", freq: 880.0, type: "white" },
  { note: "Ais5", label: "Ais/B", freq: 932.33, type: "black", left: 90.3 },
  { note: "H5", label: "H", freq: 987.77, type: "white" }
];

const scaleNotes = {
  C: ["C4", "D4", "E4", "F4", "G4", "A4", "H4", "C5"],
  G: ["G4", "A4", "H4", "C5", "D5", "E5", "Fis5", "G5"],
  A: ["A4", "H4", "Cis5", "D5", "E5", "Fis5", "Gis5", "A5"],
  F: ["F4", "G4", "A4", "Ais4", "C5", "D5", "E5", "F5"]
};

examDateInput.value = storedExamDate;
if (activeProfile?.id) {
  profileIdInput.value = activeProfile.id;
}

function normalizeAnswer(value) {
  return value
    .toLowerCase()
    .replaceAll("♯", "is")
    .replaceAll("#", "is")
    .replaceAll("♭", "es")
    .replaceAll("-", " ")
    .replaceAll(",", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getGoal() {
  return goals.find((goal) => goal.id === currentGoalId);
}

function setProfileStatus(message, state = "") {
  profileStatus.className = `profile-status ${state}`.trim();
  profileStatus.textContent = message;
}

function applyProfile(profile) {
  activeProfile = profile;
  done.clear();
  (profile.done || []).forEach((id) => done.add(Number(id)));
  examDateInput.value = profile.examDate || "";
  profileNameInput.value = profile.name || "";
  profileIdInput.value = profile.id || "";
  localStorage.setItem("musicCoachProfile", JSON.stringify({ id: profile.id, name: profile.name }));
  localStorage.setItem("musicCoachDone", JSON.stringify([...done]));
  localStorage.setItem("musicCoachExamDate", examDateInput.value);
  setProfileStatus(`Verbunden: ${profile.name} · Lern-ID: ${profile.id}`, "is-connected");
  renderLesson();
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`/music/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "Server konnte die Anfrage nicht verarbeiten.");
  }
  return payload;
}

async function createProfile() {
  const name = profileNameInput.value.trim();
  if (!name) {
    setProfileStatus("Bitte zuerst einen Namen eingeben.", "is-error");
    return;
  }
  try {
    const profile = await apiRequest("/profiles", {
      method: "POST",
      body: JSON.stringify({ name, done: [...done], examDate: examDateInput.value })
    });
    applyProfile(profile);
  } catch (error) {
    setProfileStatus(`Profil konnte nicht erstellt werden: ${error.message}`, "is-error");
  }
}

async function loadProfile() {
  const id = profileIdInput.value.trim();
  if (!id) {
    setProfileStatus("Bitte eine Lern-ID eingeben.", "is-error");
    return;
  }
  try {
    const profile = await apiRequest(`/profiles/${encodeURIComponent(id)}`);
    applyProfile(profile);
  } catch (error) {
    setProfileStatus(`Lern-ID nicht gefunden oder Server nicht erreichbar: ${error.message}`, "is-error");
  }
}

async function saveProfile() {
  localStorage.setItem("musicCoachDone", JSON.stringify([...done]));
  localStorage.setItem("musicCoachExamDate", examDateInput.value);
  if (!activeProfile?.id) {
    setProfileStatus("Noch kein Profil verbunden. Fortschritt wird auf diesem Gerät gespeichert.");
    return;
  }
  try {
    const profile = await apiRequest(`/profiles/${encodeURIComponent(activeProfile.id)}`, {
      method: "PUT",
      body: JSON.stringify({
        name: profileNameInput.value.trim() || activeProfile.name,
        done: [...done],
        examDate: examDateInput.value
      })
    });
    activeProfile = { id: profile.id, name: profile.name };
    localStorage.setItem("musicCoachProfile", JSON.stringify(activeProfile));
    setProfileStatus(`Gespeichert: ${profile.name} · Lern-ID: ${profile.id}`, "is-connected");
  } catch (error) {
    setProfileStatus(`Server-Speichern fehlgeschlagen. Lokal bleibt es erhalten. ${error.message}`, "is-error");
  }
}

function queueProfileSave() {
  window.clearTimeout(saveTimer);
  localStorage.setItem("musicCoachExamDate", examDateInput.value);
  renderTracker();
  saveTimer = window.setTimeout(() => {
    saveProfile();
  }, 250);
}

function saveProfileNow() {
  window.clearTimeout(saveTimer);
  localStorage.setItem("musicCoachExamDate", examDateInput.value);
  renderTracker();
  saveProfile();
}

async function refreshActiveProfile() {
  if (!activeProfile?.id) return;
  setProfileStatus(`Lade ${activeProfile.name || activeProfile.id} vom Server...`);
  try {
    const profile = await apiRequest(`/profiles/${encodeURIComponent(activeProfile.id)}`);
    applyProfile(profile);
  } catch (error) {
    setProfileStatus(`Konnte Profil nicht frisch laden. Lokal bleibt es erhalten. ${error.message}`, "is-error");
  }
}

function renderTabs() {
  tabs.innerHTML = goals
    .map((goal) => {
      const active = goal.id === currentGoalId ? " is-active" : "";
      const completed = done.has(goal.id) ? " is-done" : "";
      return `<button class="goal-tab${active}${completed}" type="button" data-goal="${goal.id}" aria-label="Lernziel ${goal.id}">${goal.id}</button>`;
    })
    .join("");
}

function renderProgress() {
  const count = done.size;
  progressCount.textContent = `${count}/11`;
  progressBar.style.width = `${(count / goals.length) * 100}%`;
  renderTracker();
}

function localDateFromInput(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function daysUntilExam() {
  const examDate = localDateFromInput(examDateInput.value);
  if (!examDate) return null;
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil((examDate - todayStart) / 86400000);
}

function renderTracker() {
  const remaining = goals.length - done.size;
  const daysLeft = daysUntilExam();
  const undoneGoals = priorityOrder.map((id) => goals.find((goal) => goal.id === id)).filter((goal) => goal && !done.has(goal.id));

  if (daysLeft === null) {
    trackStatus.className = "track-status";
    trackStatus.innerHTML = "<strong>Termin eintragen</strong><span>Dann zeige ich euch, ob ihr im Plan seid und was als Nächstes Priorität hat.</span>";
  } else if (remaining === 0) {
    trackStatus.className = "track-status is-good";
    trackStatus.innerHTML = `<strong>Bereit</strong><span>Alle Lernziele sind als sicher markiert. Bis zur Prüfung bleiben ${Math.max(daysLeft, 0)} Tag(e) für Wiederholung.</span>`;
  } else if (daysLeft <= 0) {
    trackStatus.className = "track-status is-risk";
    trackStatus.innerHTML = `<strong>Heute Prüfung</strong><span>Noch ${remaining} Lernziel(e) offen. Jetzt nur die höchsten Prioritäten und die Probeprüfung üben.</span>`;
  } else {
    const goalsPerDay = remaining / daysLeft;
    const statusClass = goalsPerDay <= 2.5 ? "is-good" : goalsPerDay <= 4 ? "is-tight" : "is-risk";
    const label = goalsPerDay <= 2.5 ? "On track" : goalsPerDay <= 4 ? "Knapp, aber machbar" : "Risiko";
    trackStatus.className = `track-status ${statusClass}`;
    trackStatus.innerHTML = `<strong>${label}</strong><span>${remaining} Lernziel(e) offen, ${daysLeft} Tag(e) bis zur Prüfung. Plant ca. ${Math.ceil(goalsPerDay)} Lernziel(e) pro Tag plus kurze Wiederholung.</span>`;
  }

  priorityList.innerHTML = undoneGoals.slice(0, 4).map((goal, index) => {
    const meta = priorityMeta[goal.id];
    return `
      <button class="priority-item" type="button" data-priority-goal="${goal.id}">
        <span class="priority-rank">${index + 1}</span>
        <span><strong>LZ ${goal.id}: ${goal.title}</strong><span>${meta.reason}</span></span>
        <span class="priority-pill">${meta.level}</span>
      </button>
    `;
  }).join("") || '<div class="track-status is-good"><strong>Alles markiert</strong><span>Jetzt täglich Prüfungsmix und Klaviatur/Hören wiederholen.</span></div>';
}

function renderDay() {
  dayFocus.textContent = dayPlans[currentDay];
  document.querySelectorAll(".day-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.day) === currentDay);
  });
}

function renderVisual(type) {
  if (type === "staff") {
    visualZone.innerHTML = `
      <div class="staff-visual">
        <div class="staff-lines">
          ${[0, 1, 2, 3, 4].map((line) => `<span style="top:${line * 18 + 6}px"></span>`).join("")}
          <i class="note-dot" style="left:16%; top:42px"></i>
          <i class="note-dot" style="left:47%; top:24px"></i>
          <i class="note-dot" style="left:76%; top:6px"></i>
        </div>
        <div class="visual-labels"><span>Linien zählen</span><span>Zwischenräume erkennen</span><span>Oktave prüfen</span></div>
      </div>
    `;
    return;
  }

  if (type === "accidentalPlaces") {
    visualZone.innerHTML = `
      <div class="accidental-guide">
        <div class="accidental-compare">
          <div class="accidental-example">
            <h3>Kreuze erhöhen</h3>
            <div class="accidental-flow">
              <div><span>1</span><strong>Tonart</strong><small>A-Dur</small></div>
              <div><span>2</span><strong>Anzahl</strong><small>3 Kreuze</small></div>
              <div><span>3</span><strong>Welche?</strong><small>Fis · Cis · Gis</small></div>
              <div><span>4</span><strong>Wohin?</strong><small>auf F · C · G</small></div>
            </div>
            <div class="mini-staff-card">
              <div class="mini-staff">
                ${[0, 1, 2, 3, 4].map((line) => `<span style="top:${line * 16 + 8}px"></span>`).join("")}
                <b style="left:18%; top:0">♯<small>Fis</small></b>
                <b style="left:45%; top:34px">♯<small>Cis</small></b>
                <b style="left:70%; top:18px">♯<small>Gis</small></b>
              </div>
              <p>Das Kreuz steht auf dem Platz des Tons, den es erhöht: F wird Fis, C wird Cis, G wird Gis.</p>
            </div>
          </div>
          <div class="accidental-example">
            <h3>Bes erniedrigen</h3>
            <div class="accidental-flow">
              <div><span>1</span><strong>Tonart</strong><small>Es-Dur</small></div>
              <div><span>2</span><strong>Anzahl</strong><small>3 Bes</small></div>
              <div><span>3</span><strong>Welche?</strong><small>B · Es · As</small></div>
              <div><span>4</span><strong>Wohin?</strong><small>auf H · E · A</small></div>
            </div>
            <div class="mini-staff-card">
              <div class="mini-staff">
                ${[0, 1, 2, 3, 4].map((line) => `<span style="top:${line * 16 + 8}px"></span>`).join("")}
                <b class="flat" style="left:18%; top:25px">♭<small>B</small></b>
                <b class="flat" style="left:45%; top:0">♭<small>Es</small></b>
                <b class="flat" style="left:70%; top:42px">♭<small>As</small></b>
              </div>
              <p>Das Be steht auf dem Platz des Tons, den es erniedrigt: H wird B, E wird Es, A wird As.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (type === "keyboard" || type === "keyboardA") {
    const on = type === "keyboardA" ? ["A", "H", "Cis", "D", "E", "Fis", "Gis"] : ["E", "F", "H", "C"];
    visualZone.innerHTML = keyboardHtml(on);
    return;
  }

  if (type === "rhythm") {
    visualZone.innerHTML = `
      <div class="rhythm-row">
        <div class="rhythm-chip">Ganze<br>4 ZZ</div>
        <div class="rhythm-chip">Halbe<br>2 ZZ</div>
        <div class="rhythm-chip">Viertel<br>1 ZZ</div>
        <div class="rhythm-chip">Achtel<br>0.5 ZZ</div>
      </div>
    `;
    return;
  }

  if (type === "scale") {
    visualZone.innerHTML = `
      <div class="circle-row">
        <div class="circle-chip">G</div>
        <div class="circle-chip">G</div>
        <div class="circle-chip">H</div>
        <div class="circle-chip">G</div>
        <div class="circle-chip">G</div>
        <div class="circle-chip">G</div>
        <div class="circle-chip">H</div>
      </div>
    `;
    return;
  }

  if (type === "circle") {
    visualZone.innerHTML = `
      <div class="circle-row">
        ${["C", "G", "D", "A", "E", "H", "Fis", "F", "B", "Es", "As", "Des", "Ges"].map((item) => `<div class="circle-chip">${item}</div>`).join("")}
      </div>
    `;
    return;
  }

  visualZone.innerHTML = `
    <div class="circle-row">
      ${["Fis", "Cis", "Gis", "Dis", "B", "Es", "As", "Des"].map((item) => `<div class="circle-chip">${item}</div>`).join("")}
    </div>
  `;
}

function keyboardHtml(activeNotes) {
  const whites = ["C", "D", "E", "F", "G", "A", "H", "C", "D", "E", "F", "G", "A", "H"];
  const blacks = [
    ["Cis", 4.6],
    ["Dis", 11.7],
    ["Fis", 26],
    ["Gis", 33.2],
    ["Ais/B", 40.3],
    ["Cis", 54.6],
    ["Dis", 61.7],
    ["Fis", 76],
    ["Gis", 83.2],
    ["Ais/B", 90.3]
  ];

  return `
    <div class="keyboard" aria-label="Klaviatur">
      ${whites.map((note) => `<div class="white-key ${activeNotes.includes(note) ? "is-on" : ""}">${note}</div>`).join("")}
      ${blacks.map(([note, left]) => {
        const baseNote = note.split("/")[0];
        return `<div class="black-key ${activeNotes.includes(baseNote) ? "is-on" : ""}" style="left:${left}%">${note}</div>`;
      }).join("")}
    </div>
  `;
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playTone(note, duration = 0.55) {
  const target = typeof note === "string" ? pianoNotes.find((item) => item.note === note) : note;
  if (!target) return;
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = target.freq;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.22, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration + 0.03);
}

function setEarStatus(message, state = "") {
  earStatus.className = `ear-status ${state}`.trim();
  earStatus.textContent = message;
}

function flashPianoKey(noteName) {
  const key = pianoTrainer.querySelector(`[data-note="${noteName}"]`);
  if (!key) return;
  key.classList.add("is-active");
  window.setTimeout(() => key.classList.remove("is-active"), 280);
}

function handlePianoTap(noteName) {
  const note = pianoNotes.find((item) => item.note === noteName);
  if (!note) return;
  playTone(note);
  flashPianoKey(note.note);

  if (!challengeNote) {
    setEarStatus(`Du hörst: ${note.label} (${note.note})`);
    return;
  }

  if (note.note === challengeNote.note) {
    setEarStatus(`Richtig. Das war ${challengeNote.label}.`, "is-correct");
    challengeNote = null;
  } else {
    setEarStatus(`Noch nicht. Du hast ${note.label} getippt. Höre den Ton nochmal und vergleiche.`, "is-wrong");
  }
}

function renderPianoTrainer() {
  const whiteNotes = pianoNotes.filter((note) => note.type === "white");
  const blackNotes = pianoNotes.filter((note) => note.type === "black");
  pianoTrainer.innerHTML = `
    <div class="piano-white-row">
      ${whiteNotes.map((note) => `<button class="piano-key piano-white" type="button" data-note="${note.note}" aria-label="${note.note} hören">${note.label}</button>`).join("")}
    </div>
    ${blackNotes.map((note) => `<button class="piano-key piano-black" type="button" data-note="${note.note}" style="left:${note.left}%" aria-label="${note.note} hören">${note.label}</button>`).join("")}
  `;
}

function playChallenge() {
  const challengePool = pianoNotes.filter((note) => ["C4", "D4", "E4", "F4", "G4", "A4", "H4", "C5", "Cis5", "Fis5", "Gis5"].includes(note.note));
  challengeNote = challengePool[Math.floor(Math.random() * challengePool.length)];
  playTone(challengeNote, 0.7);
  setEarStatus("Welcher Ton war das? Tippe die passende Taste auf der Klaviatur.");
}

function playScale(scaleName) {
  const notes = scaleNotes[scaleName] || [];
  setEarStatus(`${scaleName}-Dur wird vorgespielt. Danach kann sie die Tasten selbst nachspielen.`);
  notes.forEach((noteName, index) => {
    window.setTimeout(() => {
      playTone(noteName, 0.35);
      flashPianoKey(noteName);
    }, index * 430);
  });
}

function renderLesson() {
  const goal = getGoal();
  mixedMode = false;
  document.querySelector("#practiceTitle").textContent = "Wissensabfrage";
  goalGroup.textContent = `${goal.group} · Lernziel ${goal.id}`;
  goalTitle.textContent = goal.title;
  simpleExplanation.textContent = goal.simple;
  helpText.textContent = goal.help;
  helpText.hidden = true;
  memoryText.textContent = goal.memory;
  microSteps.innerHTML = goal.steps
    .map((step, index) => `<div class="micro-step"><span>${index + 1}</span><p>${step}</p></div>`)
    .join("");
  markButton.classList.toggle("is-done", done.has(goal.id));
  markButton.textContent = done.has(goal.id) ? "Sitzt ✓" : "Sitzt";
  renderVisual(goal.visual);
  renderTabs();
  renderProgress();
  renderQuestion();
}

function pickQuestion() {
  const pool = mixedMode ? goals.flatMap((goal) => goal.questions.map((question) => ({ ...question, source: `LZ ${goal.id}` }))) : getGoal().questions;
  return pool[Math.floor(Math.random() * pool.length)];
}

function renderQuestion() {
  currentQuestion = pickQuestion();
  feedbackBox.textContent = "";
  feedbackBox.className = "feedback-box";
  questionBox.innerHTML = `<strong>${currentQuestion.q}</strong><span>${currentQuestion.source || getGoal().title}: ${currentQuestion.hint}</span>`;
  answerArea.innerHTML = "";

  if (currentQuestion.type === "choice") {
    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice;
      button.addEventListener("click", () => checkChoice(button, choice));
      answerArea.append(button);
    });
    return;
  }

  answerArea.innerHTML = `
    <div class="answer-input-row">
      <input id="textAnswer" type="text" autocomplete="off" placeholder="Antwort eingeben" />
      <button class="primary-button" type="button" id="checkTextButton">Prüfen</button>
    </div>
  `;
  document.querySelector("#checkTextButton").addEventListener("click", checkText);
}

function checkChoice(button, choice) {
  const correct = choice === currentQuestion.a;
  answerArea.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
    if (item.textContent === currentQuestion.a) item.classList.add("is-correct");
  });
  button.classList.toggle("is-wrong", !correct);
  feedbackBox.className = `feedback-box ${correct ? "is-correct" : "is-wrong"}`;
  feedbackBox.textContent = `${correct ? "Richtig." : "Noch nicht."} ${currentQuestion.explain}`;
}

function checkText() {
  const input = document.querySelector("#textAnswer");
  const correct = normalizeAnswer(input.value) === normalizeAnswer(currentQuestion.a);
  feedbackBox.className = `feedback-box ${correct ? "is-correct" : "is-wrong"}`;
  feedbackBox.textContent = `${correct ? "Richtig." : `Fast. Gesucht: ${currentQuestion.a}.`} ${currentQuestion.explain}`;
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-goal]");
  if (!button) return;
  currentGoalId = Number(button.dataset.goal);
  renderLesson();
});

priorityList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-priority-goal]");
  if (!button) return;
  currentGoalId = Number(button.dataset.priorityGoal);
  renderLesson();
  document.querySelector(".lesson-card").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".day-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentDay = Number(button.dataset.day);
    const firstGoalForDay = goals.find((goal) => goal.day === currentDay);
    currentGoalId = firstGoalForDay.id;
    renderDay();
    renderLesson();
  });
});

examDateInput.addEventListener("input", queueProfileSave);
examDateInput.addEventListener("change", saveProfileNow);
examDateInput.addEventListener("blur", saveProfileNow);

document.querySelector("#createProfileButton").addEventListener("click", createProfile);
document.querySelector("#loadProfileButton").addEventListener("click", loadProfile);

document.querySelector("#moreHelpButton").addEventListener("click", () => {
  helpText.hidden = !helpText.hidden;
});

document.querySelector("#newQuestionButton").addEventListener("click", renderQuestion);

document.querySelector("#mixedQuizButton").addEventListener("click", () => {
  mixedMode = true;
  document.querySelector("#practiceTitle").textContent = "Prüfungsmix";
  renderQuestion();
  document.querySelector(".practice-card").scrollIntoView({ behavior: "smooth", block: "start" });
});

pianoTrainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-note]");
  if (!button) return;
  handlePianoTap(button.dataset.note);
});

playChallengeButton.addEventListener("click", playChallenge);

document.querySelectorAll("[data-scale]").forEach((button) => {
  button.addEventListener("click", () => playScale(button.dataset.scale));
});

markButton.addEventListener("click", () => {
  const goal = getGoal();
  if (done.has(goal.id)) {
    done.delete(goal.id);
  } else {
    done.add(goal.id);
  }
  saveProfile();
  renderLesson();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  done.clear();
  localStorage.removeItem("musicCoachDone");
  saveProfile();
  renderLesson();
});

renderPianoTrainer();
if (activeProfile?.id) {
  setProfileStatus(`Verbunden: ${activeProfile.name} · Lern-ID: ${activeProfile.id}`, "is-connected");
} else {
  setProfileStatus("Noch kein Profil verbunden. Fortschritt wird auf diesem Gerät gespeichert.");
}
renderDay();
renderLesson();
refreshActiveProfile();

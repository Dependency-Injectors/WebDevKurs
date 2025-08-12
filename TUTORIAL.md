# 🚀 Step-by-Step Tutorial: WebDevKurs Portfolio

Dieses Tutorial begleitet dich von der Installation bis zum erfolgreichen Push deiner Änderungen – mit ausführlichen Erklärungen zu jedem Schritt.

---

## 1️⃣ Repository klonen

Zuerst holst du dir das Projekt von GitHub auf deinen Rechner. Das geht mit:

```bash
git clone https://github.com/Dependency-Injectors/WebDevKurs.git
cd WebDevKurs
```

Dadurch wird ein neuer Ordner `WebDevKurs` angelegt und du wechselst direkt hinein.

## 2️⃣ Dependencies installieren

Das Projekt benötigt verschiedene Bibliotheken (z.B. React, Tailwind, ESLint). Installiere sie mit:

```bash
npm install
```

Dadurch wird der Ordner `node_modules` angelegt und alle Abhängigkeiten werden geladen.

## 3️⃣ Branch erstellen

Du arbeitest immer in deinem eigenen Branch, damit Änderungen sauber getrennt sind. Gehe wie folgt vor:

```bash
git checkout main         # Wechsle auf den Haupt-Branch
git pull origin main      # Hole die neuesten Änderungen
git checkout -b deinname/meine-seite  # Erstelle einen neuen Branch
```

Beispiel: `git checkout -b max/portfolio`

## 4️⃣ Entwicklungsserver starten

Starte den lokalen Server, um deine Seite live zu sehen:

```bash
npm run dev
```

Öffne dann im Browser die Adresse `http://localhost:5173/WebDevKurs`. Hier siehst du die Startseite des Projekts.

## 5️⃣ Eigene Seite anlegen

Erstelle im Ordner `src/pages/` eine neue Datei, z.B. `Max.jsx` oder `Max.tsx` für TypeScript. Füge dort deine Inhalte ein:

```jsx
// src/pages/Max.jsx
function Max() {
  return (
    <div>
      <h1>Hi, ich bin Max!</h1>
      <p>Hier steht etwas über mich...</p>
    </div>
  );
}
export default Max;
```

## 6️⃣ Route hinzufügen

Damit deine Seite erreichbar ist, musst du sie in `src/routes.tsx` registrieren:

- Importiere deine neue Seite oben:
  ```tsx
  import Max from "./pages/Max";
  ```
- Füge sie zu den Routen hinzu:
  ```tsx
  { path: "/Max", label: "Max", element: <Max /> },
  ```

## 7️⃣ Änderungen testen

Speichere alle Dateien und lade die Seite im Browser neu. Navigiere über die Sidebar oder das Menü zu deiner neuen Seite und prüfe, ob alles wie gewünscht angezeigt wird.

## 8️⃣ Code-Qualität prüfen

Bevor du Änderungen committest, prüfe deinen Code auf Fehler und Formatierung:

```bash
npm run lint           # Sucht nach Code-Fehlern und Best-Practice-Verstößen
npm run format:check   # Prüft, ob der Code richtig formatiert ist
```

## 9️⃣ Probleme automatisch beheben

Viele Probleme lassen sich automatisch beheben:

```bash
npm run lint:fix       # Behebt viele ESLint-Probleme automatisch
npm run format         # Formatiert den Code nach Prettier-Standard
```

## 🔟 Änderungen committen und pushen

Füge deine Änderungen zum Commit hinzu und lade sie auf GitHub hoch:

```bash
git add .
git commit -m "Meine Portfolio-Seite hinzugefügt"
git push origin deinname/meine-seite
```

## 1️⃣1️⃣ Pull Request erstellen

Gehe auf GitHub, öffne dein Repository und erstelle einen Pull Request für deinen Branch. Beschreibe kurz, was du geändert hast (z.B. "Neue Portfolio-Seite Max hinzugefügt").

---

**Tipp:**

- Die ONBOARDING.md enthält viele Beispiele und Erklärungen zu Komponenten, Styling und Tests.
- Mit `npm run quality` kannst du alle Checks auf einmal ausführen.
- Bei Problemen helfen dir die Fehlermeldungen im Terminal weiter.
- Bei Fragen oder Problemen kanns du gerne im Team nachfragen.
- Dein Problem ist nicht lösbar? Wende dich an die Admins, wir finden zusammen eine Lösung!

Viel Erfolg beim Entwickeln! 🚀

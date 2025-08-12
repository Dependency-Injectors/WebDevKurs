# 🚀 Onboarding Guide - WebDevKurs Portfolio

Willkommen zum WebDevKurs Portfolio-Projekt! Diese Anleitung führt dich Schritt für Schritt durch den Einstieg.

## 📋 Voraussetzungen

Bevor du startest, stelle sicher, dass du folgende Software installiert hast:

- **Git** (für Versionskontrolle)
- **Node.js** (Version 18 oder höher)
- **VS Code** (empfohlener Editor)

### Installation überprüfen

Öffne ein Terminal und führe folgende Befehle aus:

```bash
git --version      # Sollte eine Versionsnummer zeigen
node --version     # Sollte v18.x.x oder höher zeigen
npm --version      # Sollte eine Versionsnummer zeigen
```

## 🛠️ Schritt 1: Projekt klonen

1. **Repository klonen:**

   ```bash
   git clone https://github.com/Dependency-Injectors/WebDevKurs.git
   ```

2. **In das Projektverzeichnis wechseln:**

   ```bash
   cd WebDevKurs
   ```

3. **Dependencies installieren:**

   ```bash
   npm install
   ```

4. **Entwicklungsserver starten:**

   ```bash
   npm run dev
   ```

5. **Browser öffnen:**
   - Gehe zu `http://localhost:5173/WebDevKurs`
   - Du solltest die Startseite sehen

## 🌿 Schritt 2: Eigenen Branch erstellen

**Wichtig:** Arbeite IMMER in deinem eigenen Branch, niemals direkt im `main` Branch!

1. **Zum main Branch wechseln:**

   ```bash
   git checkout main
   ```

2. **Neueste Änderungen holen:**

   ```bash
   git pull origin main
   ```

3. **Neuen Branch erstellen:**

   ```bash
   git checkout -b deinname/meine-seite
   ```

   **Beispiele:**
   - `max/portfolio`
   - `anna/ueber-mich`
   - `tom/projekte`

## 📄 Schritt 3: Deine eigene Seite erstellen

### 3.1 Page-Datei erstellen

1. **Gehe zum Pages-Ordner:**

   ```
   src/pages/
   ```

2. **Erstelle eine neue Datei:**
   - Dateiname: `DeinName.jsx` (z.B. `Max.jsx`)
   - **Tipp:** Verwende `.tsx` für TypeScript (empfohlen)

3. **Grundstruktur der Seite:**

   ```jsx
   // src/pages/Max.jsx
   function Max() {
     return (
       <div className="min-h-screen bg-gray-50 py-8">
         <div className="max-w-4xl mx-auto px-4">
           <h1 className="text-4xl font-bold text-center mb-8">
             Hi, ich bin Max! 👋
           </h1>

           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
             <h2 className="text-2xl font-semibold mb-4">Über mich</h2>
             <p className="text-gray-700">
               Hier kannst du etwas über dich schreiben...
             </p>
           </div>

           <div className="bg-white rounded-lg shadow-md p-6">
             <h2 className="text-2xl font-semibold mb-4">Meine Projekte</h2>
             <p className="text-gray-700">
               Hier kannst du deine Projekte vorstellen...
             </p>
           </div>
         </div>
       </div>
     );
   }

   export default Max;
   ```

### 3.2 Route hinzufügen

1. **Öffne die Datei `src/routes.tsx`**

2. **Füge den Import hinzu:**

   ```tsx
   import Max from "./pages/Max"; // Deine neue Seite importieren
   ```

3. **Füge die Route hinzu:**
   ```tsx
   export const routes = [
     { path: "/", label: "Home", element: <Home /> },
     { path: "/Sven", label: "Sven", element: <Sven /> },
     { path: "/Pawel", label: "Pawel", element: <Pawel /> },
     { path: "/Max", label: "Max", element: <Max /> }, // Deine neue Route
   ];
   ```

### 3.3 Testen

1. **Speichere alle Dateien**

2. **Überprüfe den Browser:**
   - **Desktop**: Klicke auf "Studenten (X)" um die Sidebar zu öffnen
   - **Mobile**: Nutze das Hamburger-Menü (☰) für die Navigation
   - Dein Name sollte in der Studenten-Liste erscheinen
   - Klicke auf deinen Namen - deine Seite sollte angezeigt werden

## 🎨 Schritt 4: Deine Seite gestalten

### Navigation Features

- **Responsive Design**: Automatische Anpassung zwischen Desktop und Mobile
- **Desktop Sidebar**: Linke Sidebar mit allen Studenten (schließt automatisch bei Klick)
- **Mobile Sidebar**: Rechte Sidebar für Touch-optimierte Navigation

### Tailwind CSS verwenden

Das Projekt verwendet Tailwind CSS für das Styling. Hier sind einige nützliche Klassen:

```jsx
{/* Layout */}
<div className="container mx-auto px-4">        {/* Zentrierter Container */}
<div className="grid grid-cols-1 md:grid-cols-2"> {/* Responsive Grid */}

{/* Typography */}
<h1 className="text-4xl font-bold">           {/* Große Überschrift */}
<h2 className="text-2xl font-semibold">       {/* Mittlere Überschrift */}
<p className="text-gray-700">                 {/* Normaler Text */}

{/* Spacing */}
<div className="mb-4">                        {/* Margin Bottom */}
<div className="p-6">                         {/* Padding */}
<div className="mt-8">                        {/* Margin Top */}

{/* Colors */}
<div className="bg-blue-500">                 {/* Hintergrundfarbe */}
<div className="text-white">                  {/* Textfarbe */}

{/* Cards */}
<div className="bg-white rounded-lg shadow-md p-6"> {/* Karte */}
```

### Beispiel: Erweiterte Seite

```jsx
function Max() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Max Mustermann
          </h1>
          <p className="text-xl text-gray-600">
            Frontend Developer & UI/UX Enthusiast
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Über mich
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ich bin ein leidenschaftlicher Webentwickler mit Fokus auf moderne
              Frontend-Technologien. Meine Reise begann...
            </p>
            <p className="text-gray-700 leading-relaxed">
              In meiner Freizeit experimentiere ich gerne mit neuen Frameworks
              und Designtrends.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Skills
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-700 w-24">
                  React
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-700 w-24">
                  CSS
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-700 w-24">
                  JavaScript
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div
                    className="bg-yellow-500 h-3 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
            Meine Projekte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Todo App
              </h3>
              <p className="text-gray-600 mb-4">
                Eine moderne Todo-App mit React und LocalStorage.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  CSS
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Weather App
              </h3>
              <p className="text-gray-600 mb-4">
                Wetter-App mit API-Integration und responsivem Design.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  API
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Portfolio Website
              </h3>
              <p className="text-gray-600 mb-4">
                Diese Website! Gebaut mit React und Tailwind CSS.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Max;
```

## 🧪 Schritt 5: Tests schreiben (optional)

1. **Test-Datei erstellen:**

   ```
   src/pages/__tests__/Max.test.tsx
   ```

2. **Grundstruktur:**

   ```tsx
   import { render, screen } from "@testing-library/react";
   import { describe, it, expect } from "vitest";
   // @ts-ignore
   import Max from "../Max.jsx";

   describe("Max Page", () => {
     it("zeigt den Namen an", () => {
       render(<Max />);
       expect(screen.getByText(/Max/i)).toBeInTheDocument();
     });

     it("zeigt Über mich Sektion an", () => {
       render(<Max />);
       expect(screen.getByText(/Über mich/i)).toBeInTheDocument();
     });
   });
   ```

3. **Tests ausführen:**
   ```bash
   npm test
   ```

## 🎨 Schritt 5.5: Code Quality & Formatierung

### Was ist Code Quality?

**Code Quality** bedeutet, dass dein Code:

- ✅ **Sauber formatiert** ist (einheitliche Einrückungen, Leerzeichen)
- ✅ **Fehlerfrei** ist (keine Syntax-Fehler, TypeScript-Fehler)
- ✅ **Best Practices** befolgt (React-Patterns, Accessibility)
- ✅ **Konsistent** ist (gleicher Stil im ganzen Team)

**Warum ist das wichtig?**

- 👥 **Teamarbeit:** Jeder kann deinen Code verstehen
- 🐛 **Weniger Bugs:** Automatische Fehler-Erkennung
- 🚀 **Professionell:** Standards wie in echten Firmen
- 📚 **Lerneffekt:** Du lernst Best Practices automatisch

### Automatische Code-Formatierung

**Das Projekt formatiert deinen Code automatisch!**

**1. Beim Speichern (VS Code):**

```json
// Automatisch konfiguriert in .vscode/settings.json
{
  "editor.formatOnSave": true, // Format beim Speichern
  "editor.defaultFormatter": "prettier", // Prettier als Formatter
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // ESLint-Fixes automatisch
  }
}
```

**2. Manuell formatieren:**

```bash
# Alle Dateien formatieren
npm run format

# Formatierung überprüfen (ohne Änderungen)
npm run format:check
```

**Beispiel - Vorher/Nachher:**

```javascript
// 😵 Unformatiert (wie du es schreibst)
function Component() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}

// ✨ Automatisch formatiert (nach dem Speichern)
function Component() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}
```

### ESLint - Dein Code-Mentor

**ESLint ist wie ein hilfreicher Mentor, der dir zeigt:**

- ❌ **Fehler** die du gemacht hast
- ⚠️ **Verbesserungen** die du machen kannst
- 💡 **Best Practices** die du lernen solltest

**Beispiele für ESLint-Hilfe:**

**1. Barrierefreiheit (Accessibility):**

```jsx
// ❌ ESLint warnt: "Missing alt attribute"
<img src="photo.jpg" />

// ✅ ESLint ist glücklich
<img src="photo.jpg" alt="Mein Profilbild" />
```

**2. React Best Practices:**

```jsx
// ❌ ESLint warnt: "Missing key prop"
{
  students.map(student => <div>{student.name}</div>);
}

// ✅ ESLint ist glücklich
{
  students.map(student => <div key={student.id}>{student.name}</div>);
}
```

**3. TypeScript Hilfe:**

```typescript
// ❌ ESLint warnt: "Type annotation missing"
const handleClick = event => {
  // Was ist 'event'? Unbekannt!
};

// ✅ ESLint ist glücklich
const handleClick = (event: React.MouseEvent) => {
  // Jetzt weiß TypeScript was 'event' ist!
};
```

### Quality Commands

**Die wichtigsten Befehle für dich:**

```bash
# 🔍 Probleme finden
npm run lint              # Zeigt alle ESLint-Probleme

# 🔧 Probleme automatisch beheben
npm run lint:fix          # Behebt ESLint-Probleme automatisch

# 🎨 Code formatieren
npm run format            # Formatiert allen Code mit Prettier

# 📝 TypeScript überprüfen
npm run type-check        # Überprüft TypeScript-Typen

# 🎯 Alles auf einmal (empfohlen!)
npm run quality           # Alle Checks ausführen
npm run quality:fix       # Alle Checks + automatische Fixes
```

### VS Code Setup für optimale Erfahrung

**Installiere diese Extensions:**

1. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
   - Automatische Code-Formatierung
2. **ESLint** (`dbaeumer.vscode-eslint`)
   - Zeigt Probleme direkt im Editor an
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Autocomplete für Tailwind-Klassen

**Nach Installation:**

- ✅ Code wird beim Speichern automatisch formatiert
- ✅ ESLint-Probleme werden unterstrichen angezeigt
- ✅ Quick-Fixes verfügbar (Glühbirne-Symbol)

### Pre-Commit Hooks - Automatische Qualitätsprüfung

**Was passiert beim Git Commit:**

```bash
git commit -m "Meine Änderungen"

# Automatisch ausgeführt:
1. 🔍 ESLint prüft geänderte Dateien
2. 🎨 Prettier formatiert geänderte Dateien
3. 🧪 Tests werden ausgeführt
4. ✅ Nur bei Erfolg: Commit wird erstellt
```

**Bei Problemen:**

```bash
❌ ESLint found problems:
  src/pages/Max.jsx:15:7  Missing alt attribute  jsx-a11y/alt-text

# Du musst die Probleme beheben:
npm run lint:fix        # Automatische Fixes
# oder manuell beheben, dann:
git add .
git commit -m "Meine Änderungen"
```

### Praktische Beispiele

**1. Neue Komponente erstellen:**

```jsx
// src/components/UserCard.tsx
import type { FC } from 'react';

interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
}

const UserCard: FC<UserCardProps> = ({ name, email, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {avatar && (
        <img
          src={avatar}
          alt={`Profilbild von ${name}`}  // ✅ Accessibility
          className="w-16 h-16 rounded-full mx-auto mb-4"
        />
      )}
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-gray-600 text-center">{email}</p>
    </div>
  );
};

export default UserCard;
```

**2. Nach dem Speichern (automatisch):**

- ✅ Prettier formatiert den Code
- ✅ ESLint prüft auf Probleme
- ✅ TypeScript validiert die Typen
- ✅ Imports werden organisiert

**3. Vor dem Commit:**

```bash
# Letzte Qualitätsprüfung
npm run quality:fix

# Alles OK? Dann commit:
git add .
git commit -m "Add UserCard component with TypeScript"
```

### Quality Check in der Pipeline

**Bei Pull Requests wird automatisch geprüft:**

```yaml
# GitHub Actions führt aus:
✅ TypeScript Check
✅ ESLint Validation
✅ Prettier Check
✅ Tests
✅ Build Check
# Nur bei allen ✅ kann gemerged werden!
```

**Du siehst die Ergebnisse:**

- 🟢 **Grüne Häkchen** = Alles super!
- 🔴 **Rote X** = Probleme gefunden, bitte beheben

### Häufige Probleme und Lösungen

**1. ESLint-Fehler:**

```bash
# Problem: 'React' must be in scope when using JSX
# Lösung: Nicht nötig in React 17+ (schon konfiguriert)

# Problem: Missing 'alt' attribute
# Lösung: Alt-Text zu Bildern hinzufügen
<img src="..." alt="Beschreibung" />

# Problem: Unexpected console statement
# Lösung: console.log() entfernen oder console.warn()/console.error() nutzen
```

**2. Prettier-Probleme:**

```bash
# Problem: Code formatting issues
# Lösung: Automatisch beheben
npm run format
```

**3. TypeScript-Fehler:**

```typescript
// Problem: Type 'string | undefined' is not assignable to type 'string'
// Lösung: Optional chaining oder type guards verwenden
const userName = user?.name ?? "Anonymous";
```

### Lerneffekt: Warum das alles?

**1. Professionelle Entwicklung:**

- 🏢 **In echten Firmen** sind solche Tools Standard
- 👥 **Teamarbeit** funktioniert nur mit einheitlichen Standards
- 🚀 **Bessere Codequalität** führt zu weniger Bugs

**2. Automatisierung:**

- 🤖 **Du musst nicht nachdenken** - Tools machen das für dich
- ⚡ **Schnellere Entwicklung** - Weniger manuelle Formatierung
- 🎯 **Fokus auf Features** - Nicht auf Code-Stil

**3. Lernhilfe:**

- 📚 **Automatisches Lernen** von Best Practices
- 💡 **Sofortiges Feedback** bei Problemen
- 🎓 **Verbesserung der Code-Qualität** über Zeit

**4. Karriere-Vorteil:**

- 💼 **Arbeitgeber erwarten** diese Skills
- 🏆 **Du kennst moderne Tools** und Workflows
- 📈 **Professionelle Entwicklung** von Anfang an

### Quick Reference

**Tägliche Befehle:**

```bash
# Vor der Arbeit
npm run dev              # Development Server starten

# Während der Arbeit
# (VS Code macht automatisch Format + Lint beim Speichern)

# Vor dem Commit
npm run quality:fix      # Alles prüfen und beheben
git add .
git commit -m "..."
```

**Bei Problemen:**

```bash
npm run lint             # Was ist das Problem?
npm run lint:fix         # Automatisch beheben
npm run format           # Code formatieren
npm run type-check       # TypeScript prüfen
```

## 📤 Schritt 6: Änderungen commiten und pushen

### ⚡ Automatische Quality Checks

**Das Projekt prüft deinen Code automatisch vor jedem Commit!**

1. **Qualität prüfen (empfohlen):**

   ```bash
   # Alles auf einmal prüfen und beheben
   npm run quality:fix
   ```

   **Was passiert:**
   - ✅ TypeScript-Typen werden validiert
   - ✅ ESLint-Probleme werden automatisch behoben
   - ✅ Code wird formatiert (Prettier)
   - ✅ Tests werden ausgeführt

2. **Änderungen anzeigen:**

   ```bash
   git status
   ```

3. **Dateien hinzufügen:**

   ```bash
   git add .
   ```

4. **Commit erstellen:**

   ```bash
   git commit -m "Füge meine Portfolio-Seite hinzu"
   ```

   **💡 Pre-Commit Hooks laufen automatisch:**

   ```bash
   # Das passiert automatisch beim Commit:
   ✅ Running lint-staged...
   ✅ ESLint fixes applied
   ✅ Prettier formatting applied
   ✅ Running tests...
   ✅ All tests passed
   ✅ Commit successful!
   ```

   **Bei Problemen:**

   ```bash
   ❌ ESLint found errors:
     src/pages/Max.jsx:15  Missing alt attribute

   # Probleme beheben:
   npm run lint:fix
   # oder manuell beheben, dann erneut:
   git add .
   git commit -m "Füge meine Portfolio-Seite hinzu"
   ```

5. **Branch pushen:**
   ```bash
   git push origin deinname/meine-seite
   ```

## 🔄 Schritt 7: Pull Request erstellen

1. **Gehe zu GitHub:**
   - Öffne https://github.com/Dependency-Injectors/WebDevKurs

2. **Pull Request erstellen:**
   - Du siehst einen gelben Banner "Compare & pull request"
   - Klicke darauf

3. **Pull Request beschreiben:**

   ```markdown
   ## Meine Portfolio-Seite

   Ich habe meine persönliche Portfolio-Seite hinzugefügt:

   ### Änderungen:

   - ✅ Neue Seite: `src/pages/Max.jsx`
   - ✅ Route hinzugefügt in `src/routes.tsx`
   - ✅ Tests erstellt (optional)

   ### Features:

   - Über mich Sektion
   - Skills mit Fortschrittsbalken
   - Projekt-Showcase
   - Responsive Design mit Tailwind CSS

   Die Seite ist unter `/Max` erreichbar.
   ```

4. **Pull Request öffnen:**
   - Klicke "Create pull request"
   - **Automatische Quality Checks laufen:**

   ```bash
   🔄 Quality Gate & Testing
   ├── ✅ Type checking
   ├── ✅ ESLint check
   ├── ✅ Prettier check
   ├── ✅ Run tests
   └── ✅ Build check
   ```

   **Mögliche Ergebnisse:**
   - 🟢 **Alle Checks bestanden** → PR kann gemerged werden
   - 🔴 **Checks fehlgeschlagen** → Du musst Probleme beheben

   **Bei fehlgeschlagenen Checks:**

   ```bash
   # Lokal beheben:
   npm run quality:fix    # Automatische Fixes
   git add .
   git commit -m "Fix quality issues"
   git push origin deinname/meine-seite

   # Checks laufen automatisch erneut
   ```

5. **Warte auf Review:**
   - Admin reviewed deinen Code
   - Bei Approval wird gemerged
   - Live-Deployment auf GitHub Pages erfolgt automatisch

## 🎯 Tipps und Tricks

### 🔍 Debugging

**Seite wird nicht angezeigt?**

- Überprüfe die Konsole im Browser (F12)
- Stelle sicher, dass der Import in `routes.tsx` korrekt ist
- Überprüfe, dass der Dateiname exakt übereinstimmt

**Styling funktioniert nicht?**

- Verwende die Browser-Entwicklertools
- Überprüfe, dass Tailwind-Klassen korrekt geschrieben sind
- Schaue dir andere Seiten als Beispiel an

### 📚 Nützliche Ressourcen

- **Tailwind CSS Dokumentation:** https://tailwindcss.com/docs
- **React Dokumentation:** https://react.dev/
- **Emojis für deine Seite:** https://emojipedia.org/
- **Farben und Inspiration:** https://coolors.co/

### 🚀 Erweiterte Features

**Icons hinzufügen:**

```bash
npm install lucide-react
```

```jsx
import { Mail, User, Heart } from "lucide-react";

// Verwendung:
<Mail className="w-6 h-6" />;
```

**⚠️ GitHub Icon Hinweis:**
Das GitHub Icon von Lucide ist deprecated. Verwende stattdessen:

```jsx
// Custom GitHub Icon (bereits im Projekt verfügbar)
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8..." />
  </svg>
);

// Verwendung:
<GitHubIcon className="w-6 h-6" />;
```

**Animationen:**

```jsx
<div className="hover:scale-105 transition-transform duration-300">
  Hover mich!
</div>
```

**Responsive Design:**

```jsx
<div className="text-sm md:text-lg lg:text-xl">Responsive Text</div>
```

## 🆘 Hilfe bekommen

**Bei Problemen:**

1. Schaue in die README.md
2. Frage in der Gruppe
3. Erstelle ein Issue auf GitHub
4. Schaue dir andere Branches als Beispiele an

**Wichtige Befehle:**

```bash
# Status überprüfen
git status

# Lokalen Server neustarten
npm run dev

# ⚠️ WICHTIG: Projekt läuft auf http://localhost:5173/WebDevKurs
# (nicht auf localhost:5173/ wegen basename Konfiguration!)

# Tests ausführen
npm test

# Build testen
npm run build
```

---

## 🔍 Health Check & Monitoring System

Das Projekt verfügt über ein automatisches Überwachungssystem, das täglich die Funktionalität der Website überprüft.

### Was ist ein Health Check?

Ein **Health Check** ist ein automatisierter Test, der regelmäßig überprüft, ob eine Anwendung ordnungsgemäß funktioniert. In unserem Fall überwacht er:

- ✅ **Website-Erreichbarkeit** - Ist die Seite online?
- ✅ **Content-Laden** - Wird der Inhalt korrekt angezeigt?
- ✅ **Build-Prozess** - Funktioniert das Erstellen der Anwendung?
- ✅ **Tests** - Laufen alle Tests erfolgreich?
- ✅ **Performance** - Lädt die Seite schnell genug?

### Cronjobs erklärt

**Was ist ein Cronjob?**
Ein Cronjob ist ein zeitgesteuerter Auftrag, der automatisch zu bestimmten Zeiten ausgeführt wird.

**Unser Health Check läuft:**

- 🕘 **Täglich um 09:00 MESZ** (07:00 UTC)
- 🔄 **Automatisch über GitHub Actions**
- 📊 **Mit detailliertem Monitoring-Report**

**Cron-Syntax Beispiele:**

```bash
0 7 * * *     # Täglich um 07:00 UTC (09:00 MESZ)
0 */6 * * *   # Alle 6 Stunden
0 9 * * 1     # Jeden Montag um 09:00 UTC
```

### Automatische Fehler-Meldung

**Wenn etwas schief geht:**

1. 🚨 **GitHub Issue wird automatisch erstellt**
2. 📧 **Admins werden benachrichtigt**
3. 🔗 **Direkte Links zum Problem**
4. ✅ **Debugging-Checkliste**

**Beispiel Auto-Issue:**

```markdown
🚨 Health Check Failed - 2025-08-11

### ❌ Health check failed

The daily health check for our GitHub Pages deployment has failed.

**Please check:**

- [ ] GitHub Pages deployment status
- [ ] Website accessibility
- [ ] Build process
- [ ] Content rendering

**Links:**

- [Failed Workflow Run](...)
- [Live Site](https://dependency-injectors.github.io/WebDevKurs/)
```

### Health Check Status überprüfen

**Wo siehst du den Status?**

1. **GitHub Repository:**
   - Gehe zu "Actions" Tab
   - Klicke auf "Daily Health Check"
   - ✅ Grün = Alles OK
   - ❌ Rot = Problem gefunden

2. **Manual Trigger:**
   - Du kannst den Health Check manuell starten
   - GitHub → Actions → "Daily Health Check" → "Run workflow"

### Was wird getestet?

**1. Website Response**

```bash
# Überprüft HTTP Status Code
curl -s -o /dev/null -w "%{http_code}" https://dependency-injectors.github.io/WebDevKurs/
# Erwartet: 200 (OK)
```

**2. Content Validation**

```bash
# Überprüft HTML-Struktur
grep "Vite + React"     # Page Title
grep 'id="root"'        # React Root Element
```

**3. Asset Loading**

```bash
# Überprüft JS/CSS Bundles
grep "/WebDevKurs/assets/.*\.js"   # JavaScript Files
grep "/WebDevKurs/assets/.*\.css"  # CSS Files
```

**4. Build Process**

```bash
npm ci           # Dependencies installieren
npm run build    # Production Build erstellen
npm test         # Tests ausführen
```

**5. Performance Check**

```bash
# Response Time Messung
START_TIME=$(date +%s%3N)
curl -s https://dependency-injectors.github.io/WebDevKurs/ > /dev/null
END_TIME=$(date +%s%3N)
RESPONSE_TIME=$((END_TIME - START_TIME))

# Erwartet: < 5000ms (5 Sekunden)
```

### GitHub Actions Free Tier

**Was ist kostenlos verfügbar?**

- ✅ **Public Repositories:** Unlimited Minuten
- ✅ **Private Repositories:** 2.000 Minuten/Monat
- ✅ **Storage:** 500MB für Build-Artefakte
- ✅ **Concurrent Jobs:** 20 gleichzeitig

**Unser Verbrauch:**

- 📊 **Daily Health Check:** ~3 Minuten täglich
- 📊 **Monatlicher Verbrauch:** ~90 Minuten
- 📊 **Status:** Sehr gering, optimal für Free Tier

### Praktisches Beispiel

**Angenommen, jemand bricht die Website:**

1. **10:00 MESZ:** Student pusht fehlerhaften Code
2. **Nächster Tag, 09:00 MESZ:** Health Check läuft automatisch
3. **09:03 MESZ:** Health Check erkennt Problem
4. **09:04 MESZ:** GitHub Issue wird automatisch erstellt
5. **09:05 MESZ:** Admins bekommen Benachrichtigung
6. **10:00 MESZ:** Problem wird behoben

**Ohne Health Check:**

- Problem könnte tagelang unentdeckt bleiben
- Besucher sehen kaputte Website
- Keine systematische Fehler-Erkennung

### Als Student: Was musst du wissen?

**📚 Für deine Karriere:**

- Health Checks sind **Standard in der Webentwicklung**
- Zeigt **professionelle Arbeitsweise**
- **DevOps/Monitoring** sind wichtige Skills

**🛠️ Für dieses Projekt:**

- Du musst **nichts** konfigurieren
- System läuft **automatisch**
- Bei Problemen wird **automatisch** ein Issue erstellt

**🎯 Wenn du mehr lernen möchtest:**

- Schaue dir `.github/workflows/health-check.yml` an
- Experimentiere mit eigenen GitHub Actions
- Lerne mehr über **Monitoring** und **DevOps**

### Weiterführende Links

- 📖 [GitHub Actions Dokumentation](https://docs.github.com/en/actions)
- 📖 [Cron Syntax Erklärung](https://crontab.guru/)
- 📖 [Monitoring Best Practices](https://sre.google/sre-book/monitoring-distributed-systems/)
- 📖 [DevOps Grundlagen](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-devops/)

---

## ✅ Checkliste für deinen ersten Beitrag

- [ ] Repository geklont
- [ ] Eigenen Branch erstellt (`deinname/seite`)
- [ ] Neue Page-Datei erstellt (`src/pages/DeinName.jsx`)
- [ ] Route hinzugefügt (`src/routes.tsx`)
- [ ] Lokaler Test erfolgreich (Navigation funktioniert)
- [ ] Styling mit Tailwind CSS angepasst
- [ ] Änderungen committet und gepusht
- [ ] Pull Request erstellt
- [ ] Tests laufen erfolgreich

**Herzlichen Glückwunsch! 🎉**
Du hast erfolgreich deine erste Seite zum Portfolio hinzugefügt!

---

**Bei Fragen melde dich gerne! Viel Spaß beim Entwickeln! 🚀**

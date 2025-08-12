# 🚀 Onboarding Guide - WebDevKurs Portfolio

Willkommen zum WebDevKurs Portfolio-Projekt! Diese Anleitung führt dich Schritt für Schritt durch den Einstieg.

## 📋 Voraussetzungen

Stelle sicher, dass folgende Software installiert ist:

- **Git** (für Versionskontrolle)
- **Node.js** (Version 18 oder höher)
- **VS Code** (empfohlener Editor)

**Installation überprüfen:**

```bash
git --version      # Sollte eine Versionsnummer zeigen
node --version     # Sollte v18.x.x oder höher zeigen
npm --version      # Sollte eine Versionsnummer zeigen
```

## 🛠️ Schritt 1: Projekt Setup

### 1.1 Repository klonen

```bash
git clone https://github.com/Dependency-Injectors/WebDevKurs.git
cd WebDevKurs
```

### 1.2 Dependencies installieren

```bash
npm install
```

### 1.3 Development Server starten

```bash
npm run dev
```

### 1.4 Browser öffnen

- Gehe zu `http://localhost:5173/WebDevKurs`
- Du solltest die Startseite sehen

> **⚠️ Wichtig:** Das Projekt läuft auf `/WebDevKurs` (nicht `/`) wegen GitHub Pages!

### 1.5 VS Code Extensions (Auto-Setup)

**Beim ersten Öffnen in VS Code:**

```
💡 This workspace has extension recommendations.
Would you like to install the recommended extensions?

[Install All] ← Klicke hier!
```

**Was passiert:**

- ✅ Prettier, ESLint und Tailwind Extensions installiert
- ✅ Automatische Code-Formatierung beim Speichern aktiviert
- ✅ Quality-Tools sofort einsatzbereit
- ✅ Keine weitere Konfiguration nötig!

## 🌿 Schritt 2: Branch Workflow

**Wichtig:** Arbeite IMMER in deinem eigenen Branch!

### 2.1 Branch erstellen

```bash
# Zum main Branch wechseln
git checkout main

# Neueste Änderungen holen
git pull origin main

# Neuen Branch erstellen
git checkout -b deinname/meine-seite
```

**Branch-Naming Beispiele:**

- `max/portfolio`
- `anna/about-page`
- `tom/projects`

## 📄 Schritt 3: Deine Portfolio-Seite erstellen

### 3.1 Component erstellen

**Erstelle:** `src/pages/DeinName.tsx`

```tsx
// src/pages/Max.tsx
import type { FC } from "react";

const Max: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Max Mustermann
          </h1>
          <p className="text-xl text-gray-600">
            Frontend Developer & UI/UX Enthusiast
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Über mich
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ich bin ein leidenschaftlicher Webentwickler mit Fokus auf moderne
              Frontend-Technologien...
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Skills
            </h2>
            <div className="space-y-4">
              {/* React Skill */}
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-700 w-24">
                  React
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div className="bg-blue-500 h-3 rounded-full w-4/5"></div>
                </div>
              </div>

              {/* CSS Skill */}
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-700 w-24">
                  CSS
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div className="bg-green-500 h-3 rounded-full w-5/6"></div>
                </div>
              </div>

              {/* JavaScript Skill */}
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-700 w-24">
                  JavaScript
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div className="bg-yellow-500 h-3 rounded-full w-3/4"></div>
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
            {/* Project 1 */}
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

            {/* Project 2 */}
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

            {/* Project 3 */}
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
};

export default Max;
```

### 3.2 Route hinzufügen

**Öffne:** `src/routes.tsx`

```tsx
// src/routes.tsx
import Max from "./pages/Max"; // Import hinzufügen

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/help", label: "Help", element: <Help /> },
  { path: "/sven", label: "Sven", element: <Sven /> },
  { path: "/pawel", label: "Pawel", element: <Pawel /> },
  { path: "/max", label: "Max", element: <Max /> }, // Route hinzufügen
];
```

### 3.3 Testen

1. **Speichere alle Dateien**
2. **Überprüfe den Browser:**
   - **Desktop**: Klicke "Studenten (X)" → Sidebar öffnet sich
   - **Mobile**: Hamburger-Menü (☰) → Navigation
   - Dein Name sollte in der Liste erscheinen
   - Klicke auf deinen Namen → Seite wird angezeigt

## 🎨 Schritt 4: Styling mit Tailwind CSS

### Nützliche Tailwind-Klassen

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

{/* Hover Effects */}
<div className="hover:scale-105 transition-transform duration-300">
  Hover-Effekt!
</div>
```

### Responsive Design

```jsx
{
  /* Text Size */
}
<div className="text-sm md:text-lg lg:text-xl">Responsive Text</div>;

{
  /* Grid Columns */
}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive Grid
</div>;

{
  /* Padding */
}
<div className="px-4 md:px-8 lg:px-12">Responsive Padding</div>;
```

## 🧪 Schritt 5: Tests schreiben (Optional)

### 5.1 Test-Datei erstellen

**Erstelle:** `src/pages/__tests__/Max.test.tsx`

```tsx
// src/pages/__tests__/Max.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Max from "../Max";

describe("Max Page", () => {
  it("renders page title", () => {
    render(<Max />);
    expect(screen.getByText("Max Mustermann")).toBeInTheDocument();
  });

  it("shows about section", () => {
    render(<Max />);
    expect(screen.getByText("Über mich")).toBeInTheDocument();
  });

  it("displays skills section", () => {
    render(<Max />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("shows projects section", () => {
    render(<Max />);
    expect(screen.getByText("Meine Projekte")).toBeInTheDocument();
  });
});
```

### 5.2 Tests ausführen

```bash
npm run test:unit
```

## 🎯 Schritt 6: Code Quality

### 6.1 Automatische Formatierung

**VS Code formatiert automatisch beim Speichern!**

**Manuelle Formatierung:**

```bash
npm run format           # Alle Dateien formatieren
npm run format:check     # Formatierung überprüfen
```

### 6.2 Code-Qualität prüfen

```bash
# Einzelne Checks
npm run lint             # ESLint-Probleme anzeigen
npm run lint:fix         # ESLint-Probleme beheben
npm run type-check       # TypeScript-Typen prüfen

# Alles auf einmal (empfohlen!)
npm run quality          # Alle Checks
npm run quality:fix      # Alle Checks + Auto-Fix
```

### 6.3 Pre-Commit Hooks

**Automatische Qualitätsprüfung vor jedem Commit:**

```bash
git commit -m "Add my portfolio page"

# Automatisch ausgeführt:
✅ ESLint fixes applied
✅ Prettier formatting applied
✅ Tests passed
✅ Commit successful!
```

**Bei Problemen:**

```bash
❌ ESLint found errors:
  Missing alt attribute for img

# Probleme beheben:
npm run quality:fix
git add .
git commit -m "Add my portfolio page"
```

## 📤 Schritt 7: Änderungen committen

### 7.1 Quality Check vor Commit

```bash
# Empfohlen: Alles prüfen und beheben
npm run quality:fix
```

### 7.2 Git Workflow

```bash
# Status anzeigen
git status

# Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Add my portfolio page with about, skills and projects sections"

# Branch pushen
git push origin max/portfolio
```

## 🔄 Schritt 8: Pull Request erstellen

### 8.1 GitHub Pull Request

1. **Gehe zu GitHub:**
   - https://github.com/Dependency-Injectors/WebDevKurs

2. **Pull Request erstellen:**
   - Gelber Banner: "Compare & pull request"
   - Klicke darauf

### 8.2 PR beschreiben

```markdown
## Meine Portfolio-Seite

Ich habe meine persönliche Portfolio-Seite hinzugefügt.

### 🚀 Features:

- ✅ Über mich Sektion mit persönlicher Beschreibung
- ✅ Skills mit interaktiven Fortschrittsbalken
- ✅ Projekt-Showcase mit 3 Beispiel-Projekten
- ✅ Vollständig responsive mit Tailwind CSS
- ✅ Tests für alle Hauptkomponenten

### 📝 Änderungen:

- Neue Seite: `src/pages/Max.tsx`
- Route hinzugefügt in `src/routes.tsx`
- Tests: `src/pages/__tests__/Max.test.tsx`

Die Seite ist unter `/max` erreichbar.
```

### 8.3 Quality Pipeline

**Automatische Checks laufen:**

```yaml
🔄 Quality Gate & Testing
├── ✅ TypeScript Check
├── ✅ ESLint Analysis
├── ✅ Prettier Validation
├── ✅ Unit Tests (Vitest)
├── ✅ E2E Tests (Playwright)
└── ✅ Build Verification
```

**Mögliche Ergebnisse:**

- 🟢 **Alle Checks bestanden** → PR kann gemerged werden
- 🔴 **Checks fehlgeschlagen** → Probleme beheben:

```bash
# Bei fehlgeschlagenen Checks:
npm run quality:fix    # Probleme automatisch beheben
git add .
git commit -m "Fix quality issues"
git push origin max/portfolio
# Checks laufen automatisch erneut
```

## 🎉 Schritt 9: Go Live!

1. **Admin reviewed & merged deinen PR**
2. **Automatisches Deployment auf GitHub Pages**
3. **Deine Seite ist live:**
   - https://dependency-injectors.github.io/WebDevKurs/max

## 🚀 Advanced Features (Optional)

### Icons hinzufügen

```bash
npm install lucide-react
```

```tsx
import { Mail, User, Github, ExternalLink } from "lucide-react";

// Verwendung:
<div className="flex items-center space-x-2">
  <Mail className="w-5 h-5" />
  <span>kontakt@max.de</span>
</div>;
```

### Animationen

```tsx
{
  /* Hover-Effekte */
}
<div className="hover:scale-105 transform transition-transform duration-300">
  Hover mich!
</div>;

{
  /* Fade-in Effekte */
}
<div className="opacity-0 animate-fade-in">Fade-in Animation</div>;
```

### Gradient Backgrounds

```tsx
{/* Gradient Backgrounds */}
<div className="bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient Background
</div>

<div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
  Subtle Gradient
</div>
```

## 🆘 Troubleshooting

### Häufige Probleme

**Seite wird nicht angezeigt:**

- Überprüfe Browser-Konsole (F12)
- Stelle sicher, dass Import in `routes.tsx` korrekt ist
- Dateiname muss exakt übereinstimmen

**Styling funktioniert nicht:**

- Verwende Browser-Entwicklertools (F12)
- Überprüfe Tailwind-Klassen auf Tippfehler
- Schaue dir andere Seiten als Beispiel an

**Tests schlagen fehl:**

- Führe `npm run quality:fix` aus
- Überprüfe TypeScript-Fehler: `npm run type-check`

### Wichtige Commands

```bash
# Development
npm run dev              # Development Server (http://localhost:5173/WebDevKurs)
npm run build            # Production Build erstellen
npm run preview          # Build lokal testen

# Testing & Quality
npm run test:unit        # Unit Tests ausführen
npm run quality:fix      # Alle Quality Checks + Auto-Fix

# Git
git status               # Aktueller Status
git checkout main        # Zum main Branch
git pull origin main     # Neueste Änderungen holen
```

## 📚 Hilfe & Ressourcen

### Bei Problemen:

1. 📖 Schaue in die [README.md](README.md)
2. 💬 Frage in der Gruppe
3. 🐛 Erstelle ein Issue auf GitHub
4. 👀 Schaue dir andere Branches als Beispiele an

### Lern-Ressourcen:

- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/
- **Emojis:** https://emojipedia.org/
- **Farben:** https://coolors.co/

---

**🎯 Viel Erfolg beim Erstellen deiner Portfolio-Seite!**

Bei Fragen: Erstelle ein Issue oder frage in der Gruppe.

# Portfolio Gruppenprojekt – WebDevKurs

Dieses Repository dient als Grundlage für unser Portfolio-Projekt im Webentwicklungs-Kurs. Wir erstellen gemeinsam eine React-Anwendung, das über GitHub Pages veröffentlicht ist. Es ist möglich sowohl Javascript als auch Typescript zu verwenden.

## Branch-Konzept

Jeder Teilnehmer arbeitet in einem eigenen Branch. Der Branch-Name sollte nach folgendem Schema aufgebaut sein:

```
name/page
```

**Beispiel:**  
Für Max, der an der Startseite arbeitet:  
`max/startseite`

## Branch im Terminal erstellen

So erstellst du deinen Branch im Terminal:

```bash
git checkout -b name/page
```

Ersetze `name/page` durch deinen eigenen Namen und die Seite, an der du arbeitest.

## Hinweise

# Tailwind

In dem Projekt verwenden wir für das Designen Tailwind.
Integration erfolgte in 3 Schritten:

1. Installation des Packages

   ```bash

   npm install tailwindcss @tailwindcss/vite

   ```

2. in der vite.config.js tailwindcss importiert und als plugin eingetragen

   ```bash

   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from "@tailwindcss/vite";

   // https://vite.dev/config/
   export default defineConfig({
   plugins: [react(), tailwindcss()],
   })

   ```

3. in der index.css Tailwind importiert

```bash

    @import "tailwindcss";

```

## React-Router

Für die Navigation verwenden wir React-Router. Dies wurde bereits integriert.

```bash
npm i react-router-dom
```

Die Routen werden in der `App.jsx` definiert.  
Das Layout für alle Seiten wird über die `Layout`-Komponente eingebunden.  
Die einzelnen Seiten liegen im Ordner `src/pages`.

**Beispiel für die Routenstruktur in App.jsx:**

```jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Weitere Seiten */}
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}
```

**Neue Pages erstellen:**

1. Lege eine neue Datei im Ordner `src/pages` an, z.B. `About.jsx` oder `About.tsx`.
2. Erstelle darin eine React-Komponente:
   ```jsx
   function About() {
     return <div>Über uns</div>;
   }
   export default About;
   ```
3. Füge die neue Seite in `src/routes.tsx` hinzu:

   ```tsx
   // @ts-ignore (falls .jsx Datei)
   import About from "./pages/About";

   export const routes = [
     { path: "/", label: "Home", element: <Home /> },
     { path: "/about", label: "About", element: <About /> },
     // weitere Seiten...
   ];
   ```

**Hinweis:**  
Durch die zentrale `routes.tsx` werden sowohl die Navigation als auch die App-Routen automatisch aktualisiert.  
Du musst die Seite nur einmal in der routes-Datei hinzufügen!

**Hinweis:**  
Der `Layout`-Komponente wird automatisch für alle Seiten verwendet.  
Die Navigation zwischen den Seiten erfolgt über die Links in der Layout-Komponente.

BrowserRouter wurde in der main.jsx eingefügt, App.jsx beinhaltet die Routes.

- Arbeite immer in deinem eigenen Branch und erstelle Pull Requests, wenn du Änderungen in den Haupt-Branch übernehmen möchtest.

Viel Erfolg beim Umsetzen eurer Portfolio-Seiten!

## Tests

Wir verwenden [Vitest](https://vitest.dev/) und [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) für das Testen der Anwendung.  
Vitest ist schnell, modern und optimal für Vite-Projekte geeignet.

### Installation

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### Beispiel für einen Test

```tsx
// src/pages/__tests__/About.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../About.js";

describe("About Page", () => {
  it("zeigt Überschrift an", () => {
    render(<About />);
    expect(screen.getByText("Über uns")).toBeInTheDocument();
  });
});
```

**Für JSX-Dateien in TypeScript-Tests:**
Dank der modernen TypeScript-Konfiguration mit `"allowJs": true` und `"moduleResolution": "bundler"` können JSX-Dateien direkt importiert werden:

```tsx
// src/pages/__tests__/Home.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../Home.jsx"; // Funktioniert ohne @ts-ignore

describe("Home Page", () => {
  it("zeigt Startseite an", () => {
    render(<Home />);
    expect(screen.getByText("Willkommen")).toBeInTheDocument();
  });
});
```

### Anleitung: Tests erstellen

1. **Test-Datei anlegen:**  
   Erstelle im Ordner `src/pages/__tests__/` eine neue Datei, z.B. `MeinePage.test.tsx`

2. **Grundstruktur:**

   ```tsx
   import { render, screen } from "@testing-library/react";
   import { describe, it, expect } from "vitest";
   import MeinePage from "../MeinePage";

   describe("MeinePage", () => {
     it("sollte Text anzeigen", () => {
       render(<MeinePage />);
       expect(screen.getByText("Erwarteter Text")).toBeInTheDocument();
     });
   });
   ```

3. **Tests ausführen:**

   ```bash
   npx vitest
   ```

4. **Mit GUI:**
   ```bash
   npx vitest --ui
   ```

### Konfiguration

In der `vite.config.ts` wurde test hinzugefügt und ein setupFile im src Ordner erstellt:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
```

Erstelle die Datei `src/setupTests.ts` mit folgendem Inhalt:

```ts
import { expect } from "vitest";
import "@testing-library/jest-dom/vitest";
```

Damit werden die jest-dom Matcher wie `toBeInTheDocument()` für alle Tests automatisch verfügbar gemacht.

### Tests ausführen und GUI nutzen

```bash
npx vitest --ui
```

Damit öffnet sich eine Test-GUI im Browser.

---

**Hinweis:**  
Alle neuen Seiten bitte als `.tsx` anlegen, wenn möglich und Tests im Ordner `__tests__` erstellen.

## CI/CD Pipeline

Das Projekt verwendet GitHub Actions für automatisierte Tests und Continuous Integration.

### Test Workflow

Die CI-Pipeline führt bei jedem Push und Pull Request automatisch Tests aus.  
Konfiguration in `.github/workflows/test.yml`:

```yaml
name: CI Test

on:
  push:
    branches: ["*"]
  pull_request:
    branches: ["*"]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"
      - name: Install dependencies
        run: npm ci
      - name: Run Vitest
        run: npx vitest --run
```

**Funktionen:**

- Tests laufen auf allen Branches
- Automatische Abhängigkeits-Installation
- Vitest-Ausführung mit Ergebnissen

### Ergebnisse anzeigen

Die Test-Ergebnisse siehst du unter:

- GitHub Repository → Tab "Actions"
- Bei Pull Requests werden die Ergebnisse direkt angezeigt

### GitHub Pages Deployment

Das Projekt wird automatisch über GitHub Pages deployed und ist öffentlich verfügbar.
Deploy erfolgt nur durch den main branch, daher müsst ihr warten, bis der Pull Request gemerged wurde durch einen Admin.

**Deployment Workflow:**

Die Anwendung wird automatisch bei Push auf den `main` Branch deployed.  
Konfiguration in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build for production
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

**Live URL:**  
🚀 **https://dependency-injectors.github.io/WebDevKurs/**

**Wichtige Konfigurationen für GitHub Pages:**

1. **Vite Build Konfiguration** (`vite.config.js`):

   ```js
   export default defineConfig({
     base: "/WebDevKurs/", // Repository Name für GitHub Pages
     build: {
       outDir: "dist",
     },
   });
   ```

2. **React Router Konfiguration** (`src/main.jsx`):

   ```jsx
   import { BrowserRouter } from "react-router";

   createRoot(document.getElementById("root")).render(
     <BrowserRouter basename="/WebDevKurs">
       <App />
     </BrowserRouter>
   );
   ```

> [!IMPORTANT] > **Wichtiger Hinweis für die lokale Entwicklung:**  
> Da wir den `basename="/WebDevKurs"` setzen, ist das Projekt beim Entwickeln **nicht** direkt auf `http://localhost:5173/` zu finden, sondern auf:  
> **🔗 http://localhost:5173/WebDevKurs**
>
> Merke dir diese URL für die lokale Entwicklung!

**Deployment Status überprüfen:**

- GitHub Repository → Tab "Actions" → "Deploy to GitHub Pages"
- Grüner Haken = erfolgreich deployed
- Bei Fehlern: Logs in der jeweiligen Action einsehen

## TypeScript Konfiguration

Das Projekt nutzt TypeScript mit optimierten Einstellungen für React/Vite:

**Wichtige Einstellungen in `tsconfig.json`:**

- `"moduleResolution": "bundler"` - Für moderne Bundler
- `"noEmit": true` - Nur Type-Checking, keine Kompilierung
- `"jsx": "react-jsx"` - React JSX Support
- `"allowJs": true` - Unterstützung für JS/JSX Dateien

**Branch Protection (optional):**
Administratoren können Branch Protection Rules einrichten:

- Settings → Branches → Add rule
- Require Pull Request reviews vor Merge
- Automatische Tests müssen bestehen

## Health Check & Monitoring

Das Projekt verfügt über ein automatisches Health Check System, das die Verfügbarkeit und Funktionalität der GitHub Pages Deployment überwacht.

### Daily Health Check

**Schedule:** Täglich um 09:00 MESZ (07:00 UTC)  
**Workflow:** `.github/workflows/health-check.yml`

**Was wird überwacht:**

1. **Website Accessibility** 
   - HTTP 200 Response Check
   - Server-Erreichbarkeit der Live-Site

2. **Content Validation**
   - HTML-Struktur (`<title>`, React root element)
   - Asset-Referenzen (JS/CSS Bundles, Favicon)

3. **Build Process**
   - Lokaler Build-Test mit aktuellen Dependencies
   - Build-Artefakte Validierung (`dist/` Ordner)

4. **Testing**
   - Vitest Test-Suite Ausführung
   - Code-Qualität Validation

5. **Performance Monitoring**
   - Response Time Messung (< 5s acceptable)
   - Load-Time Benchmarking

### Cronjob Konzept

**GitHub Actions Cronjobs** nutzen das gleiche Cron-Format wie Unix/Linux:

```yaml
schedule:
  - cron: "0 7 * * *"  # 07:00 UTC = 09:00 MESZ
```

**Cron-Format Erklärung:**
```
┌───────────── Minute (0-59)
│ ┌─────────── Stunde (0-23)  
│ │ ┌───────── Tag des Monats (1-31)
│ │ │ ┌─────── Monat (1-12)
│ │ │ │ ┌───── Wochentag (0-6, 0 = Sonntag)
│ │ │ │ │
* * * * *
```

**Beispiele:**
- `0 7 * * *` - Täglich um 07:00 UTC
- `0 */6 * * *` - Alle 6 Stunden
- `0 9 * * 1` - Montags um 09:00 UTC

### Automatic Issue Creation

Bei Health Check Fehlern wird automatisch ein GitHub Issue erstellt:

**Features:**
- 🚨 **Auto-Labels:** `health-check`, `bug`, `automated`
- 📊 **Detailed Report:** Datum, Workflow-Run, Failed Step
- 🔗 **Direct Links:** Failed Action Run, Live Site
- ✅ **Checklist:** Systematische Debugging-Schritte

**Beispiel Issue:**
```markdown
🚨 Health Check Failed - 2025-08-11

### ❌ Health check failed

**Please check:**
- [ ] GitHub Pages deployment status  
- [ ] Website accessibility
- [ ] Build process
- [ ] Content rendering

**Links:**
- [Failed Workflow Run](...)
- [Live Site](https://dependency-injectors.github.io/WebDevKurs/)
```

### GitHub Actions Free Tier

**Limits im kostenlosen GitHub Tier:**
- **Private Repos:** 2.000 Minuten/Monat
- **Public Repos:** Unlimited Minuten
- **Concurrent Jobs:** 20 Jobs gleichzeitig
- **Storage:** 500MB für Artifacts

**Unser Health Check:**
- **Laufzeit:** ~2-3 Minuten täglich
- **Frequency:** 1x täglich (optimal für free tier)
- **Monthly Usage:** ~90 Minuten (sehr gering)

**Monitoring Dashboard:**
Repository → Actions Tab → "Daily Health Check" Workflow

### Manual Health Check

Du kannst den Health Check auch manuell triggern:

1. **GitHub Web Interface:**
   - Repository → Actions → "Daily Health Check"
   - "Run workflow" Button → "Run workflow"

2. **Via GitHub CLI:**
   ```bash
   gh workflow run "Daily Health Check"
   ```

### Health Check Test Scripts

**Package.json Scripts für Testing:**

```json
{
  "scripts": {
    "test": "vitest --run",           // Einmalige Test-Ausführung
    "test:watch": "vitest",           // Watch-Mode für Development
    "test:ui": "vitest --ui"          // Visual Test Interface
  }
}

## Projektstruktur

```
WebDevKurs/
├── .github/
│   └── workflows/
│       ├── test.yml          # CI Tests
│       └── deploy.yml        # GitHub Pages Deployment
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Hauptlayout mit Navigation
│   │   ├── Navigation.tsx    # Responsive Navigation mit Sidebar
│   │   └── student-carousel.tsx  # Studenten-Karussell mit GitHub Icons
│   ├── pages/
│   │   ├── Home.tsx         # Startseite mit Custom GitHub Icons
│   │   ├── Sven.tsx         # Beispiel Studenten-Seite
│   │   ├── Pawel.tsx        # Beispiel Studenten-Seite
│   │   └── __tests__/       # Test-Dateien (Vitest + React Testing Library)
│   ├── routes.tsx           # Zentrale Routing-Konfiguration
│   ├── main.jsx            # App Entry Point mit Router + basename
│   ├── App.jsx             # Haupt-App-Komponente
│   ├── index.css           # Tailwind CSS Imports
│   └── setupTests.ts       # Vitest Setup mit jest-dom
├── public/                 # Statische Assets (Logos, etc.)
├── dist/                   # Build Output (automatisch erstellt)
├── package.json            # Dependencies und Scripts
├── vite.config.js         # Vite + GitHub Pages + Test Konfiguration
├── tsconfig.json          # TypeScript Konfiguration (modern bundler)
├── ONBOARDING.md          # Schritt-für-Schritt Anleitung für neue Studenten
└── README.md              # Hauptdokumentation
```

## Navigation Features

### Desktop Navigation:

- **Responsive Sidebar** - Linke Sidebar für Studenten-Navigation
- **Toggle Button** - "Studenten (X)" öffnet/schließt Sidebar
- **Auto-Layout** - Content verschiebt sich automatisch
- **Click-Outside** - Subtiles Overlay (10% opacity) schließt Sidebar

### Mobile Navigation:

- **Hamburger Menu** - Standard mobile Pattern
- **Right Sidebar** - Touch-optimierte Studenten-Liste
- **Overlay** - Vollständiges Overlay (50% opacity) für mobile Focus

### Icons:

- **Custom GitHub Icons** - Eigene SVG-Komponente (Lucide deprecated)
- **Lucide Icons** - Für alle anderen Icons (ChevronLeft, Users, etc.)
- **Responsive Sizing** - Verschiedene Größen je nach Kontext

## Entwicklungsprozess

### 1. Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/Dependency-Injectors/WebDevKurs.git
cd WebDevKurs

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# WICHTIG: Projekt läuft auf http://localhost:5173/WebDevKurs
# (nicht auf localhost:5173/ wegen basename Konfiguration)
```

### 2. Feature entwickeln

```bash
# Neuen Branch erstellen
git checkout -b name/feature

# Änderungen vornehmen...
# Neue Seite in src/pages/ erstellen
# Route in src/routes.tsx hinzufügen

# Tests schreiben und ausführen
npm test

# Build testen
npm run build
```

### 3. Pull Request erstellen

```bash
# Änderungen committen
git add .
git commit -m "Beschreibung der Änderungen"

# Branch pushen
git push origin name/feature

# Pull Request auf GitHub erstellen
# Tests werden automatisch ausgeführt
```

### 4. Merge und Deployment

- Nach erfolgreichem Review wird der PR in `main` gemerged
- Automatisches Deployment auf GitHub Pages
- Live-Site wird aktualisiert

## Wichtige Commands

```bash
# Entwicklung
npm run dev          # Entwicklungsserver starten
npm run build        # Production Build erstellen
npm run preview      # Build lokal testen

# Tests
npm test             # Tests ausführen
npm run test:ui      # Test GUI öffnen
npx vitest --run     # Tests einmalig ausführen

# Git Workflow
git checkout main           # Zum main branch wechseln
git pull origin main        # Neueste Änderungen holen
git checkout -b name/page   # Neuen Feature-branch erstellen
git push origin name/page   # Branch zum Repository pushen
```

## Häufige Probleme und Lösungen

### GitHub Pages zeigt leere Seite

**Problem:** React Router funktioniert nicht mit GitHub Pages Subdirectory.

**Lösung:**

1. Überprüfe `basename` in `src/main.jsx`:

   ```jsx
   <BrowserRouter basename="/WebDevKurs">
   ```

2. Überprüfe `base` in `vite.config.js`:
   ```js
   base: "/WebDevKurs/";
   ```

### Tests schlagen fehl

**Problem:** Import-Probleme bei JSX-Dateien in TypeScript-Tests.

**Lösung:** Dank der modernen TypeScript-Konfiguration können JSX-Dateien direkt importiert werden:

```tsx
import Home from "../Home.jsx"; // Funktioniert ohne @ts-ignore
```

**Falls dennoch Probleme auftreten:**

- Überprüfe, dass `"allowJs": true` in der `tsconfig.json` gesetzt ist
- Stelle sicher, dass die Dateiendung korrekt angegeben ist (.jsx/.tsx)

### Deployment schlägt fehl

**Problem:** Build-Fehler oder falsche Konfiguration.

**Lösung:**

1. Lokalen Build testen: `npm run build`
2. GitHub Actions Logs überprüfen
3. Dependencies aktualisieren: `npm ci`

### Deprecated Icon Warnings

**Problem:** Lucide Brand Icons sind deprecated (z.B. GitHub Icon).

**Lösung:** Verwende Custom SVG Components:

```tsx
// Eigene GitHub Icon Komponente
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438..." />
  </svg>
);

// Verwendung:
<GitHubIcon className="w-5 h-5" />;
```

**Alternative:** Nutze [Simple Icons](https://simpleicons.org/) für Brand Icons.

## Weiterführende Ressourcen

- [React Dokumentation](https://react.dev/)
- [Vite Dokumentation](https://vitejs.dev/)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/)
- [React Router Dokumentation](https://reactrouter.com/)
- [Vitest Dokumentation](https://vitest.dev/)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)

---

**Viel Erfolg beim Entwickeln! 🚀**

Bei Fragen könnt ihr Issues im Repository erstellen oder in der Gruppe nachfragen.

# Portfolio Gruppenprojekt – WebDevKurs

Dieses Repository dient als Grundlage für unser Portfolio-Projekt im Webentwicklungs-Kurs. Wir erstellen gemeinsam eine React-Anwendung, die später über GitHub Pages veröffentlicht wird. Es ist möglich sowohl Javascript als auch Typescript zu verwenden.

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

BroeserRouter wurde in der main.jsx eingefügt, App.jsx beinhaltet die Routes.

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
der Kommentar vor der Imortanweisung (// @ts-ignore) ist zwingen erforderlich bei jsx.Dateien!

```tsx
// src/pages/__tests__/Home.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// @ts-ignore
import Home from "../Home.jsx";

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
   import MeinePage from "../MeinePage.js"; // oder .jsx

   describe("MeinePage", () => {
     it("sollte Text anzeigen", () => {
       render(<MeinePage />);
       expect(screen.getByText("Erwarteter Text")).toBeInTheDocument();
     });
   });
   ```

3. **Imports anpassen:**

   - Für `.js`/`.jsx` Dateien: Endung mit angeben
   - Für `.jsx` in TypeScript-Tests: `// @ts-ignore` vor dem Import

4. **Tests ausführen:**

   ```bash
   npx vitest
   ```

5. **Mit GUI:**
   ```bash
   npx vitest --ui
   ```

### Konfiguration

In der `vite.config.ts` wurde test hinzugeffügt und ein setupFile im src Ordner estellt:

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

**Deployment Workflow:**

Die Anwendung wird automatisch bei Push auf den `main` Branch deployed.  
Konfiguration in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

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
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build for production
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

**Live URL:**  
🚀 **https://dependency-injectors.github.io/WebDevKurs/**

**Wichtige Konfigurationen für GitHub Pages:**

1. **Vite Build Konfiguration** (`vite.config.js`):
   ```js
   export default defineConfig({
     base: '/WebDevKurs/',  // Repository Name für GitHub Pages
     build: {
       outDir: 'dist'
     }
   })
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
│   │   ├── Navigation.tsx    # Dynamische Navigation
│   │   └── student-carousel.tsx  # Studenten-Karussell
│   ├── pages/
│   │   ├── Home.jsx         # Startseite
│   │   └── __tests__/       # Test-Dateien
│   ├── routes.tsx           # Zentrale Routing-Konfiguration
│   ├── main.jsx            # App Entry Point mit Router
│   ├── App.jsx             # Haupt-App-Komponente
│   ├── index.css           # Tailwind CSS Imports
│   └── setupTests.ts       # Vitest Setup
├── public/                 # Statische Assets
├── dist/                   # Build Output (automatisch erstellt)
├── package.json
├── vite.config.js         # Vite + GitHub Pages Konfiguration
├── tsconfig.json          # TypeScript Konfiguration
└── README.md
```

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
   base: '/WebDevKurs/'
   ```

### Tests schlagen fehl

**Problem:** Import-Probleme bei JSX-Dateien in TypeScript-Tests.

**Lösung:** `// @ts-ignore` vor JSX-Imports verwenden:
```tsx
// @ts-ignore
import Home from "../Home.jsx";
```

### Deployment schlägt fehl

**Problem:** Build-Fehler oder falsche Konfiguration.

**Lösung:**
1. Lokalen Build testen: `npm run build`
2. GitHub Actions Logs überprüfen
3. Dependencies aktualisieren: `npm ci`

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

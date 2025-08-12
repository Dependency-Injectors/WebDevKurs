# 🎯 Portfolio Gruppenprojekt – WebDevKurs

> **Moderne React-Anwendung mit TypeScript, Tailwind CSS und automatisierter CI/CD-Pipeline**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-blue?style=for-the-badge)](https://dependency-injectors.github.io/WebDevKurs/)
[![Quality Gate](https://img.shields.io/badge/✅_Quality_Gate-Passing-green?style=for-the-badge)](#cicd-pipeline)
[![Tests](https://img.shields.io/badge/🧪_Tests-Vitest_+_Playwright-purple?style=for-the-badge)](#tests)

Dieses Repository dient als Grundlage für unser Portfolio-Projekt im Webentwicklungs-Kurs. Wir erstellen gemeinsam eine professionelle React-Anwendung mit modernen Development-Tools und automatisierten Quality-Checks.

## 📁 Projektstruktur

```
WebDevKurs/
├── 🚀 .github/workflows/        # CI/CD Pipelines
│   ├── test.yml                 # Quality Gate & Testing
│   ├── deploy.yml              # GitHub Pages Deployment
│   ├── playwright.yml          # E2E Testing
│   ├── lighthouse.yml          # Performance Audits
│   └── health-check.yml        # Daily Monitoring
├── 📄 src/
│   ├── components/             # Reusable Components
│   │   ├── Layout.jsx          # Main Layout with Navigation
│   │   ├── Navigation.tsx      # Responsive Navigation
│   │   └── student-carousel.tsx
│   ├── pages/                  # Student Portfolio Pages
│   │   ├── Home.tsx            # Landing Page
│   │   ├── Help.tsx            # Documentation & FAQ
│   │   ├── Sven.tsx            # Example Student Page
│   │   ├── Pawel.tsx           # Example Student Page
│   │   └── __tests__/          # Unit Tests (Vitest)
│   ├── routes.tsx              # Centralized Routing
│   ├── main.jsx                # App Entry Point
│   └── setupTests.ts           # Test Configuration
├── 🧪 tests/                   # E2E Tests (Playwright)
├── 📋 public/                  # Static Assets
├── ⚙️ Configuration Files
│   ├── vite.config.js          # Build & Test Configuration
│   ├── playwright.config.ts    # E2E Test Configuration
│   ├── lighthouserc.json      # Performance Audit Rules
│   ├── tsconfig.json          # TypeScript Configuration
│   ├── eslint.config.js       # Code Quality Rules
│   └── .prettierrc            # Code Formatting Rules
└── 📖 Documentation
    ├── README.md               # Main Documentation (this file)
    ├── ONBOARDING.md          # Step-by-Step Guide for Students
    └── TUTORIAL.md            # Quick Start Tutorial
```

## 🚀 Quick Start

```bash
# 1. Repository klonen
git clone https://github.com/Dependency-Injectors/WebDevKurs.git
cd WebDevKurs

# 2. Dependencies installieren
npm install

# 3. Development Server starten
npm run dev

# 4. Öffne im Browser: http://localhost:5173/WebDevKurs
```

> **⚠️ Wichtiger Hinweis:** Das Projekt läuft auf `http://localhost:5173/WebDevKurs` (nicht auf `/` allein) wegen der GitHub Pages Konfiguration.

## 🌿 Branch-Konzept

**Jeder Teilnehmer arbeitet in einem eigenen Feature-Branch:**

```bash
# Branch-Naming Convention
name/feature
```

**Beispiele:**

- `max/portfolio` - Max arbeitet an seinem Portfolio
- `anna/about-page` - Anna erstellt eine Über-uns-Seite
- `tom/contact-form` - Tom entwickelt ein Kontaktformular

**Workflow:**

```bash
# 1. Aktuellen main Branch holen
git checkout main
git pull origin main

# 2. Neuen Feature-Branch erstellen
git checkout -b deinname/feature

# 3. Entwickeln, testen, committen
npm run quality:fix  # Code Quality prüfen
git add .
git commit -m "Add new feature"

# 4. Branch pushen und Pull Request erstellen
git push origin deinname/feature
```

## 🎨 Tech Stack & Features

### Core Technologies

- **⚡ Vite** - Lightning-fast build tool and dev server
- **⚛️ React 19** - Modern React with latest features
- **📘 TypeScript** - Type-safe JavaScript for better development
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧭 React Router** - Client-side routing for SPAs

### Development Tools

- **🧪 Vitest** - Fast unit testing framework
- **🎭 Playwright** - End-to-end testing automation
- **🔍 ESLint** - Code quality and best practices
- **💄 Prettier** - Automatic code formatting
- **🪝 Husky** - Git hooks for quality assurance

### CI/CD & Monitoring

- **🤖 GitHub Actions** - Automated testing and deployment
- **📊 Lighthouse CI** - Performance and accessibility audits
- **🏥 Health Checks** - Daily monitoring and alerting
- **📱 GitHub Pages** - Free hosting and deployment

### Key Features

- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **Type Safety** - Complete TypeScript integration
- ✅ **Code Quality** - ESLint + Prettier pre-configured
- ✅ **Testing Suite** - Unit tests (Vitest) + E2E tests (Playwright)
- ✅ **Auto Deployment** - Push to main → Live on GitHub Pages
- ✅ **Performance Monitoring** - Lighthouse CI audits
- ✅ **Accessibility** - JSX-A11y rules for inclusive design
- ✅ **Modern Git Workflow** - Feature branches + Pull Request reviews

## 🛠️ Development Commands

### Essential Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Create production build
npm run preview          # Preview production build locally

# Testing
npm run test:unit        # Run unit tests (Vitest)
npm run test:e2e         # Run end-to-end tests (Playwright)
npm test                 # Run all tests

# Code Quality
npm run lint             # Check for ESLint issues
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Validate TypeScript types

# All-in-One Quality Check
npm run quality          # Run all quality checks
npm run quality:fix      # Run all checks + auto-fix issues
```

### Git Workflow Commands

```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b yourname/feature-name

# Development cycle
npm run dev              # Start coding
npm run quality:fix      # Before committing
git add .
git commit -m "Your message"
git push origin yourname/feature-name

# Create Pull Request on GitHub
```

## 📱 Responsive Navigation System

### Desktop Experience

- **Left Sidebar Navigation** - Clean, professional layout
- **Toggle Button** - "Studenten (X)" opens/closes student list
- **Auto-Layout Adjustment** - Content shifts when sidebar opens
- **Click-Outside to Close** - Subtle overlay (10% opacity)

### Mobile Experience

- **Hamburger Menu** - Standard mobile pattern (☰)
- **Right Sidebar** - Touch-optimized student list
- **Full Overlay** - Clear focus on navigation (50% opacity)
- **Smooth Animations** - Tailwind CSS transitions

### Navigation Features

```jsx
// Navigation is automatically generated from routes.tsx
export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/help", label: "Help", element: <Help /> },
  { path: "/student-name", label: "Student Name", element: <StudentPage /> },
  // Add your page here!
];
```

## 🎯 How to Add Your Page

### Step 1: Create Your Page Component

```jsx
// src/pages/YourName.tsx
import type { FC } from 'react';

const YourName: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">
          Your Name
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              Tell your story here...
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-lg font-medium w-24">React</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                  <div className="bg-blue-500 h-3 rounded-full w-4/5"></div>
                </div>
              </div>
              {/* Add more skills */}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Project Name</h3>
              <p className="text-gray-600 mb-4">Project description...</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>
            {/* Add more project cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourName;
```

### Step 2: Add Route Configuration

```tsx
// src/routes.tsx
import YourName from "./pages/YourName";

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/help", label: "Help", element: <Help /> },
  { path: "/your-name", label: "Your Name", element: <YourName /> }, // Add this line
  // ... other routes
];
```

### Step 3: Write Tests (Optional but Recommended)

```tsx
// src/pages/__tests__/YourName.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import YourName from "../YourName";

describe("YourName Page", () => {
  it("renders page title", () => {
    render(<YourName />);
    expect(screen.getByText("Your Name")).toBeInTheDocument();
  });

  it("shows about section", () => {
    render(<YourName />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("displays skills section", () => {
    render(<YourName />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});
```

### Step 4: Test Locally

```bash
npm run dev                    # Start development server
npm run test:unit             # Run your tests
npm run quality:fix           # Check code quality
```

### Step 5: Deploy via Pull Request

```bash
git add .
git commit -m "Add my portfolio page"
git push origin yourname/portfolio
# Create Pull Request on GitHub
```

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

## Code Quality & Formatierung

Das Projekt implementiert professionelle Code-Qualitäts-Standards mit automatischer Formatierung und umfassenden Linting-Regeln.

### ESLint Konfiguration

**Moderne ESLint-Setup mit:**

- **React 19 Support** - Optimiert für neueste React-Features
- **TypeScript Integration** - Vollständige TypeScript-Unterstützung
- **Accessibility Rules** - JSX-A11y für barrierefreie Webentwicklung
- **Import Organization** - Automatische Import-Sortierung
- **React Hooks Rules** - Validierung für React Hook-Patterns

**Konfigurationsdateien:**

```javascript
// eslint.config.js - Moderne ESLint 9 Flat Config
export default [
  // JavaScript/JSX Rules
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      // React-spezifische Regeln
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],
      "react/self-closing-comp": "error",
    },
  },
  // TypeScript-spezifische Rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
];
```

### Prettier Formatierung

**Automatische Code-Formatierung mit:**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf",
  "arrowParens": "avoid"
}
```

**Prettier integriert:**

- ✅ **Format on Save** - Automatische Formatierung beim Speichern
- ✅ **Import Organization** - Sortierung der Imports
- ✅ **Consistent Styling** - Einheitlicher Code-Stil im Team
- ✅ **Pre-commit Hooks** - Formatierung vor Git-Commits

### Quality Scripts

**NPM Scripts für Code-Qualität:**

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "quality": "npm run type-check && npm run lint && npm run format:check && npm run test",
    "quality:fix": "npm run type-check && npm run lint:fix && npm run format && npm run test"
  }
}
```

**Einzelne Checks:**

```bash
# Linting
npm run lint              # ESLint-Probleme anzeigen
npm run lint:fix          # ESLint-Probleme automatisch beheben

# Formatierung
npm run format            # Alle Dateien formatieren
npm run format:check      # Formatierung überprüfen

# TypeScript
npm run type-check        # TypeScript-Typen validieren

# Komplett-Check
npm run quality           # Alle Checks ausführen
npm run quality:fix       # Alle Checks + automatische Fixes
```

### Pre-Commit Hooks (Husky)

**Automatische Qualitätsprüfung vor Git-Commits:**

```bash
# .husky/pre-commit
npx lint-staged    # Nur geänderte Dateien prüfen
npm test          # Tests ausführen
```

**Lint-Staged Konfiguration:**

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css,scss,yaml,yml}": ["prettier --write"]
  }
}
```

**Funktionsweise:**

1. **Git Commit erstellen** → Pre-commit Hook wird ausgelöst
2. **Lint-Staged** → Nur geänderte Dateien werden geprüft
3. **ESLint Fix** → Automatische Problembehebung
4. **Prettier Format** → Code-Formatierung
5. **Tests** → Vitest-Tests ausführen
6. **Commit** → Nur bei erfolgreichen Checks

### VS Code Integration

**🎉 Vollständig vorkonfiguriert!**

Das Projekt enthält optimierte VS Code-Konfiguration:

- **`.vscode/settings.json`** - Automatisches Format-on-Save, ESLint Integration
- **`.vscode/tasks.json`** - Vordefinierte Build/Quality Tasks (Ctrl+Shift+P → "Tasks: Run Task")
- **`.vscode/extensions.json`** - Empfohlene Extensions werden automatisch vorgeschlagen

**Empfohlene Extensions (werden automatisch vorgeschlagen):**

- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Importer

**Quality Tasks in VS Code:**

```bash
Ctrl+Shift+P → "Tasks: Run Task" →
├── quality          # Alle Checks ausführen
├── quality:fix      # Alle Checks + Auto-Fix
├── lint            # ESLint Check
├── lint:fix        # ESLint Auto-Fix
├── format          # Prettier Format
└── type-check      # TypeScript Check
```

**.vscode/settings.json:**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

**Empfohlene Extensions:**

- `esbenp.prettier-vscode` - Prettier Formatierung
- `dbaeumer.vscode-eslint` - ESLint Integration
- `bradlc.vscode-tailwindcss` - Tailwind CSS Support
- `ms-vscode.vscode-typescript-next` - Enhanced TypeScript

**Automatische Aktionen:**

- ✅ **Format on Save** - Code wird beim Speichern formatiert
- ✅ **ESLint Fix on Save** - Linting-Probleme automatisch behoben
- ✅ **Import Organization** - Imports automatisch sortiert
- ✅ **Type Checking** - Inline TypeScript-Fehler angezeigt

### Quality Rules im Detail

**React-spezifische Regeln:**

```javascript
// ✅ Guter Code
export default function Component() {
  return (
    <div>
      <img src="image.jpg" alt="Beschreibung" />
      <button type="button" onClick={handleClick}>
        Klick mich
      </button>
    </div>
  );
}

// ❌ Problematischer Code
export default function Component() {
  return (
    <div>
      <img src="image.jpg" />  {/* Missing alt attribute */}
      <button onClick={handleClick}>  {/* Missing type */}
        Klick mich
      </button>
    </div>
  );
}
```

**TypeScript-spezifische Regeln:**

```typescript
// ✅ Guter Code
import type { FC } from 'react';

interface Props {
  title: string;
  count?: number;
}

const Component: FC<Props> = ({ title, count = 0 }) => {
  return <h1>{title} ({count})</h1>;
};

// ❌ Problematischer Code
import { FC } from 'react';  // Should use type import

const Component = ({ title, count }) => {  // Missing type annotations
  return <h1>{title} ({count})</h1>;
};
```

**Import Organization:**

```typescript
// ✅ Automatisch organisierte Imports
import { FC } from "react"; // External libraries
import { useRouter } from "react-router"; // External libraries

import { Button } from "../components/ui"; // Internal components
import { formatDate } from "../utils"; // Internal utils

import type { User } from "./types"; // Type imports (last)
```

### Error Reporting

**ESLint-Fehler werden angezeigt als:**

```bash
Error: 'React' must be in scope when using JSX (react/react-in-jsx-scope)
Warning: Unexpected console statement (no-console)
Error: Missing "alt" attribute for img tag (jsx-a11y/alt-text)
```

**Prettier-Formatierung:**

```bash
Code style issues found in the following files:
  src/components/Navigation.tsx
  src/pages/Home.tsx

Run `npm run format` to fix them.
```

### Accessibility (A11Y) Standards

**Implementierte Accessibility-Regeln:**

- ✅ **Alt-Texte** für alle Bilder
- ✅ **ARIA-Labels** für interaktive Elemente
- ✅ **Keyboard Navigation** Support
- ✅ **Color Contrast** Validierung
- ✅ **Semantic HTML** Enforcement
- ✅ **Focus Management** für SPAs

**Beispiel:**

```jsx
// ✅ Accessible Component
<button
  type="button"
  aria-label="Navigation öffnen"
  aria-expanded={isOpen}
  onClick={toggleNav}
>
  <MenuIcon aria-hidden="true" />
</button>

// ❌ Non-accessible
<div onClick={toggleNav}>  {/* Not keyboard accessible */}
  <MenuIcon />
</div>
```

## CI/CD Pipeline

Das Projekt verwendet GitHub Actions für automatisierte Tests und Continuous Integration.

### Quality Gate & Testing Pipeline

Die CI-Pipeline führt bei jedem Push und Pull Request umfassende Qualitätsprüfungen aus.
Konfiguration in `.github/workflows/test.yml`:

```yaml
name: Quality Gate & Testing

on:
  push:
    branches: ["*"]
  pull_request:
    branches: ["*"]

jobs:
  quality-check:
    runs-on: ubuntu-latest
    name: Code Quality & Testing

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Type checking
        run: npm run type-check

      - name: ESLint check
        run: npm run lint

      - name: Prettier check
        run: npm run format:check

      - name: Run tests
        run: npm test

      - name: Build check
        run: npm run build
```

**Quality Pipeline Features:**

- ✅ **Multi-Stage Validation** - 5 separate Qualitätsprüfungen
- ✅ **TypeScript Checking** - Vollständige Typ-Validierung
- ✅ **ESLint Analysis** - Code-Qualität und Best Practices
- ✅ **Prettier Validation** - Konsistente Code-Formatierung
- ✅ **Automated Testing** - Vitest Test-Suite
- ✅ **Build Verification** - Production Build Test

**Pipeline Stages:**

1. **Dependencies** - npm ci für reproducible builds
2. **Type Check** - TypeScript-Compiler ohne Emission
3. **Linting** - ESLint-Regeln für alle JS/TS/JSX/TSX Dateien
4. **Formatting** - Prettier Code-Style Validierung
5. **Testing** - Vitest mit Coverage-Reporting
6. **Build** - Production-Build Verification

**Failure Handling:**

- Bei Fehlern stoppt die Pipeline sofort
- Detaillierte Error-Reports in GitHub Actions
- Pull Requests können nur gemerged werden wenn alle Checks bestehen

### Quality Reports

Die Pipeline generiert detaillierte Reports:

```bash
✅ Type checking passed
✅ ESLint: 0 errors, 0 warnings
✅ Prettier: All files formatted correctly
✅ Tests: 3 passed, 0 failed
✅ Build: Production build successful
```

### Ergebnisse anzeigen

Die Quality Gate Ergebnisse siehst du unter:

- GitHub Repository → Tab "Actions" → "Quality Gate & Testing"
- Bei Pull Requests: Automatische Status-Checks
- Detaillierte Logs für jeden Schritt verfügbar
- Failure-Reports mit konkreten Fehlermeldungen

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
  - cron: "0 7 * * *" # 07:00 UTC = 09:00 MESZ
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
    "test": "vitest --run", // Einmalige Test-Ausführung
    "test:watch": "vitest", // Watch-Mode für Development
    "test:ui": "vitest --ui" // Visual Test Interface
  }
}
```

## Projektstruktur

```

WebDevKurs/
├── .github/
│ └── workflows/
│ ├── test.yml # CI Tests
│ └── deploy.yml # GitHub Pages Deployment
├── src/
│ ├── components/
│ │ ├── Layout.jsx # Hauptlayout mit Navigation
│ │ ├── Navigation.tsx # Responsive Navigation mit Sidebar
│ │ └── student-carousel.tsx # Studenten-Karussell mit GitHub Icons
│ ├── pages/
│ │ ├── Home.tsx # Startseite mit Custom GitHub Icons
│ │ ├── Sven.tsx # Beispiel Studenten-Seite
│ │ ├── Pawel.tsx # Beispiel Studenten-Seite
│ │ └── **tests**/ # Test-Dateien (Vitest + React Testing Library)
│ ├── routes.tsx # Zentrale Routing-Konfiguration
│ ├── main.jsx # App Entry Point mit Router + basename
│ ├── App.jsx # Haupt-App-Komponente
│ ├── index.css # Tailwind CSS Imports
│ └── setupTests.ts # Vitest Setup mit jest-dom
├── public/ # Statische Assets (Logos, etc.)
├── dist/ # Build Output (automatisch erstellt)
├── package.json # Dependencies und Scripts
├── vite.config.js # Vite + GitHub Pages + Test Konfiguration
├── tsconfig.json # TypeScript Konfiguration (modern bundler)
├── ONBOARDING.md # Schritt-für-Schritt Anleitung für neue Studenten
└── README.md # Hauptdokumentation

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

## Lighthouse CI

Dieses Projekt nutzt Lighthouse CI für automatisierte Qualitätsprüfungen der GitHub Pages-Seite.

- Die Konfiguration befindet sich in `lighthouserc.json`.
- Der Workflow `.github/workflows/lighthouse-pages.yml` startet Lighthouse CI nach jedem Pages-Deploy.
- Alle Checks sind aktuell deaktiviert, sodass der Workflow immer erfolgreich ist.
- Du kannst Checks in der `lighthouserc.json` wieder aktivieren, indem du sie aus dem `assertions`-Block entfernst oder anpasst.

### Manuell lokal ausführen

```bash
npm run build
npm run preview
npx lhci autorun
```

Das Ergebnis findest du als Link im Terminal.

## Onboarding

### Lighthouse CI

Lighthouse CI prüft automatisch die Qualität deiner GitHub Pages-Seite nach jedem Deploy. Es analysiert Performance, Accessibility, SEO und Best Practices.

- **Automatischer Audit:** Nach jedem erfolgreichen Deploy auf GitHub Pages startet der Workflow `.github/workflows/lighthouse-pages.yml` einen Lighthouse CI Lauf.
- **Konfiguration:** Die Datei `lighthouserc.json` steuert, welche Checks ausgeführt werden. Du kannst dort URLs, die Anzahl der Durchläufe und die zu prüfenden Kriterien festlegen.
- **Assertions:** Im Block `assertions` kannst du einzelne Checks deaktivieren (z.B. Accessibility, Performance, SEO), indem du sie auf `"off"` setzt. Entfernst du einen Eintrag, wird der Check wieder aktiviert.
- **Ergebnisse:** Nach jedem Lauf bekommst du einen Link zu einem ausführlichen Report. Dort findest du Hinweise und Optimierungsvorschläge für deine Seite.
- **Manueller Audit:** Du kannst Lighthouse CI auch lokal ausführen:
  ```bash
  npm run build
  npm run preview
  npx lhci autorun
  ```
  Das Ergebnis findest du als Link im Terminal.
- **Typische Anpassungen:**
  - Checks gezielt aktivieren/deaktivieren
  - URLs für verschiedene Deployments testen
  - Thresholds für einzelne Checks anpassen

Weitere Infos: [Lighthouse CI Dokumentation](https://github.com/GoogleChrome/lighthouse-ci)

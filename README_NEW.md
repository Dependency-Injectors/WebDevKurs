# 🎯 WebDevKurs Portfolio

> **Modernes React-Portfolio mit TypeScript, Tailwind CSS und professioneller CI/CD-Pipeline**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-blue?style=for-the-badge)](https://dependency-injectors.github.io/WebDevKurs/)
[![Quality Gate](https://img.shields.io/badge/✅_Quality_Gate-Passing-green?style=for-the-badge)](#quality-pipeline)
[![Tests](https://img.shields.io/badge/🧪_Tests-Unit_+_E2E-purple?style=for-the-badge)](#testing)

Dieses Repository dient als Grundlage für unser Portfolio-Projekt im Webentwicklungs-Kurs. Jeder Teilnehmer erstellt seine eigene Portfolio-Seite mit modernen Web-Technologien und professionellen Development-Standards.

## 🚀 Quick Start

```bash
# 1. Repository klonen
git clone https://github.com/Dependency-Injectors/WebDevKurs.git
cd WebDevKurs

# 2. Dependencies installieren
npm install

# 3. Development Server starten
npm run dev

# 4. Öffne: http://localhost:5173/WebDevKurs
```

> **⚠️ Wichtig:** Das Projekt läuft auf `/WebDevKurs` (nicht `/`) wegen GitHub Pages Konfiguration.

## 🏗️ Projektstruktur

```
WebDevKurs/
├── 🚀 .github/workflows/         # CI/CD Pipelines
│   ├── test.yml                  # Quality Gate & Testing
│   ├── deploy.yml               # GitHub Pages Deployment
│   ├── playwright.yml           # E2E Testing
│   ├── lighthouse.yml           # Performance Audits
│   └── health-check.yml         # Daily Monitoring
├── 📄 src/
│   ├── components/              # Reusable Components
│   ├── pages/                   # Student Portfolio Pages
│   │   └── __tests__/           # Unit Tests (Vitest)
│   └── routes.tsx               # Centralized Routing
├── 🧪 tests/                    # E2E Tests (Playwright)
├── 📋 public/                   # Static Assets
├── ⚙️ Configuration Files
│   ├── vite.config.js           # Build & Test Configuration
│   ├── playwright.config.ts     # E2E Test Configuration
│   ├── lighthouserc.json       # Performance Audit Rules
│   └── eslint.config.js        # Code Quality Rules
└── 📖 Documentation
    ├── README.md                # Main Documentation (this file)
    ├── ONBOARDING.md           # Step-by-Step Guide for Students
    └── TUTORIAL.md             # Quick Start Tutorial
```

## 🎨 Tech Stack

### Core Technologies

- **⚡ Vite** - Lightning-fast build tool
- **⚛️ React 19** - Modern React with latest features
- **📘 TypeScript** - Type-safe JavaScript
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧭 React Router** - Client-side routing

### Development & Quality

- **🧪 Vitest** - Fast unit testing framework
- **🎭 Playwright** - End-to-end testing automation
- **🔍 ESLint** - Code quality and best practices
- **💄 Prettier** - Automatic code formatting
- **🪝 Husky** - Git hooks for quality assurance

### CI/CD & Deployment

- **🤖 GitHub Actions** - Automated testing and deployment
- **📊 Lighthouse CI** - Performance and accessibility audits
- **🏥 Health Checks** - Daily monitoring and alerting
- **📱 GitHub Pages** - Free hosting and deployment

## 🛠️ Essential Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Create production build
npm run preview          # Preview production build

# Testing
npm run test:unit        # Run unit tests (Vitest)
npm run test:e2e         # Run end-to-end tests (Playwright)

# Code Quality
npm run quality          # Run all quality checks
npm run quality:fix      # Run all checks + auto-fix issues

# Git Workflow
git checkout main && git pull origin main    # Get latest changes
git checkout -b yourname/feature             # Create feature branch
git push origin yourname/feature             # Push and create PR
```

## 🌿 Branch Workflow

**Jeder Teilnehmer arbeitet in einem eigenen Feature-Branch:**

```bash
# Branch-Naming Convention
yourname/feature-description

# Beispiele:
max/portfolio-page
anna/about-section
tom/project-showcase
```

**Standard Workflow:**

1. `git checkout main && git pull origin main` - Neueste Änderungen holen
2. `git checkout -b yourname/feature` - Feature-Branch erstellen
3. Entwickeln, committen, pushen
4. Pull Request erstellen → Automatische Quality Checks
5. Nach Review: Merge in main → Live-Deploy

## 📋 How to Add Your Page

### 1. Create Your Component

```tsx
// src/pages/YourName.tsx
import type { FC } from "react";

const YourName: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Your Name</h1>

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
            {/* Add your skills here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourName;
```

### 2. Add Route

```tsx
// src/routes.tsx
import YourName from "./pages/YourName";

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/help", label: "Help", element: <Help /> },
  { path: "/your-name", label: "Your Name", element: <YourName /> }, // Add this
  // ... other routes
];
```

### 3. Test & Deploy

```bash
npm run dev                # Test locally
npm run quality:fix        # Check code quality
git add . && git commit -m "Add my portfolio page"
git push origin yourname/portfolio
# Create Pull Request on GitHub
```

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm run test:unit          # Run unit tests
```

Example test:

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
});
```

### E2E Tests (Playwright)

```bash
npm run test:e2e           # Run end-to-end tests
```

Example E2E test:

```typescript
// tests/portfolio.spec.ts
import { test, expect } from "@playwright/test";

test("can navigate to portfolio page", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Your Name");
  await expect(page).toHaveTitle(/Your Name/);
});
```

## 🎯 Quality Pipeline

Every Push and Pull Request triggers:

```yaml
✅ TypeScript Check      # Type validation
✅ ESLint Analysis       # Code quality & best practices
✅ Prettier Validation   # Code formatting
✅ Unit Tests (Vitest)   # Component testing
✅ E2E Tests (Playwright) # Integration testing
✅ Build Verification    # Production build test
```

**Zusätzlich nach Deploy:**

- 📊 **Lighthouse CI** - Performance & Accessibility Audits
- 🏥 **Health Checks** - Daily website monitoring

## 📱 Navigation Features

- **🖥️ Desktop:** Responsive sidebar navigation
- **📱 Mobile:** Touch-optimized hamburger menu
- **♿ Accessible:** Full keyboard navigation & ARIA support
- **🎨 Smooth:** Tailwind CSS animations and transitions

## 🔧 Configuration

### VS Code Setup (Auto-configured)

- **Format on Save** - Prettier integration
- **ESLint Integration** - Inline error highlighting
- **Recommended Extensions** - Auto-suggested on first open
- **Quality Tasks** - Pre-configured build tasks

### Pre-commit Hooks (Husky)

- **Lint-staged** - Only check changed files
- **Auto-fix** - ESLint and Prettier corrections
- **Test validation** - Ensure tests pass before commit

### GitHub Actions

- **Quality Gate** - Comprehensive code validation
- **Auto-deploy** - Deploy to GitHub Pages on main merge
- **E2E Testing** - Browser automation testing
- **Performance Monitoring** - Lighthouse CI audits

## 📊 Monitoring & Health Checks

### Daily Monitoring (09:00 MESZ)

- **Website Accessibility** - HTTP status checks
- **Content Validation** - HTML structure verification
- **Build Process** - Dependency and build validation
- **Performance** - Response time monitoring

### Auto-Issue Creation

Bei Fehlern wird automatisch ein GitHub Issue mit Debugging-Checkliste erstellt.

### Manual Health Check

```bash
# GitHub Actions
gh workflow run "Daily Health Check"

# Local testing
npm run build && npm run preview
npx lhci autorun  # Lighthouse audit
```

## 🚀 Deployment

**Automatisches Deployment:**

- Push to `main` → GitHub Actions build → GitHub Pages deploy
- Live URL: **https://dependency-injectors.github.io/WebDevKurs/**

**GitHub Pages Konfiguration:**

```js
// vite.config.js
export default defineConfig({
  base: "/WebDevKurs/", // Repository name
  // ...
});
```

```jsx
// src/main.jsx
<BrowserRouter basename="/WebDevKurs">
  <App />
</BrowserRouter>
```

## 🆘 Troubleshooting

### Common Issues

**Empty page on GitHub Pages:**

- Check `basename="/WebDevKurs"` in main.jsx
- Verify `base: "/WebDevKurs/"` in vite.config.js

**Test failures:**

- Run `npm run quality:fix` for auto-fixes
- Check TypeScript errors: `npm run type-check`

**Build failures:**

- Update dependencies: `npm ci`
- Check GitHub Actions logs for details

## 📚 Resources & Learning

### Documentation

- 📖 [ONBOARDING.md](ONBOARDING.md) - Detailed step-by-step guide
- 📖 [TUTORIAL.md](TUTORIAL.md) - Quick start tutorial

### External Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [Vitest Testing](https://vitest.dev/)
- [Playwright E2E](https://playwright.dev/)

---

**🎉 Ready to build your portfolio? Start with [ONBOARDING.md](ONBOARDING.md)!**

Bei Fragen: Erstelle ein Issue oder frage in der Gruppe.

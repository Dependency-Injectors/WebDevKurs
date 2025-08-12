# � Quick Start Tutorial

> **5-Minuten Guide: Von 0 zur eigenen Portfolio-Seite**

Dieser Tutorial zeigt dir den schnellsten Weg, deine Portfolio-Seite zu erstellen und online zu bringen.

## ⚡ Express-Setup (5 Minuten)

### 1. Projekt klonen & starten

```bash
git clone https://github.com/Dependency-Injectors/WebDevKurs.git
cd WebDevKurs
npm install
npm run dev
```

🌐 Öffne: http://localhost:5173/WebDevKurs

### 2. Branch erstellen

```bash
git checkout main
git pull origin main
git checkout -b deinname/portfolio
```

### 3. Deine Seite erstellen

**Erstelle:** `src/pages/DeinName.tsx`

```tsx
import type { FC } from "react";

const DeinName: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Dein Name</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-6">Über mich</h2>
          <p className="text-gray-700 leading-relaxed">
            Hier erzählst du deine Geschichte...
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Meine Skills</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-lg font-medium w-24">React</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                <div className="bg-blue-500 h-3 rounded-full w-4/5"></div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-lg font-medium w-24">CSS</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
                <div className="bg-green-500 h-3 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeinName;
```

### 4. Route hinzufügen

**Bearbeite:** `src/routes.tsx`

```tsx
import DeinName from "./pages/DeinName"; // Import hinzufügen

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/help", label: "Help", element: <Help /> },
  { path: "/deinname", label: "Dein Name", element: <DeinName /> }, // Route hinzufügen
  // ... andere Routen
];
```

### 5. Testen & Pushen

```bash
npm run quality:fix              # Code Quality prüfen
git add .
git commit -m "Add my portfolio page"
git push origin deinname/portfolio
```

### 6. Pull Request erstellen

1. Gehe zu GitHub: https://github.com/Dependency-Injectors/WebDevKurs
2. Klicke "Compare & pull request"
3. Beschreibe deine Änderungen
4. Warte auf Review & Merge
5. 🎉 Deine Seite ist live!

## 🎨 Schnelle Anpassungen

### Farben ändern

```tsx
{/* Verschiedene Farbschemata */}
<div className="bg-gradient-to-br from-purple-50 to-pink-100">    {/* Lila/Pink */}
<div className="bg-gradient-to-br from-green-50 to-blue-100">     {/* Grün/Blau */}
<div className="bg-gradient-to-br from-yellow-50 to-orange-100">  {/* Gelb/Orange */}
```

### Skills anpassen

```tsx
{/* Mehr Skills hinzufügen */}
<div className="flex items-center">
  <span className="text-lg font-medium w-24">JavaScript</span>
  <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
    <div className="bg-yellow-500 h-3 rounded-full w-3/4"></div>
  </div>
</div>

<div className="flex items-center">
  <span className="text-lg font-medium w-24">TypeScript</span>
  <div className="flex-1 bg-gray-200 rounded-full h-3 ml-4">
    <div className="bg-blue-600 h-3 rounded-full w-2/3"></div>
  </div>
</div>
```

### Projekte hinzufügen

```tsx
{
  /* Projekte-Sektion */
}
<div className="bg-white rounded-xl shadow-lg p-8 mt-8">
  <h2 className="text-3xl font-semibold mb-6">Meine Projekte</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-3">Todo App</h3>
      <p className="text-gray-600 mb-4">Eine moderne Todo-App mit React</p>
      <div className="flex space-x-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
          React
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
          CSS
        </span>
      </div>
    </div>
  </div>
</div>;
```

## 🧪 Testing Quick-Check

```bash
# Optional: Test erstellen
# src/pages/__tests__/DeinName.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DeinName from "../DeinName";

describe("DeinName Page", () => {
  it("renders page title", () => {
    render(<DeinName />);
    expect(screen.getByText("Dein Name")).toBeInTheDocument();
  });
});
```

```bash
npm run test:unit    # Tests ausführen
```

## 🔧 Quality Commands

```bash
# Die wichtigsten Commands:
npm run dev              # Development Server
npm run quality:fix      # Code Quality + Auto-Fix
npm run test:unit        # Tests ausführen
npm run build            # Production Build
```

## 🆘 Häufige Probleme

**Seite nicht sichtbar?**

- Überprüfe: http://localhost:5173/WebDevKurs (mit `/WebDevKurs`!)
- Prüfe Browser-Konsole (F12)

**Import-Fehler?**

- Stelle sicher, dass Dateiname exakt übereinstimmt
- Überprüfe Import-Pfad in `routes.tsx`

**Styling funktioniert nicht?**

- Alle Tailwind-Klassen korrekt geschrieben?
- Browser-Cache leeren (Strg+F5)

## 📚 Nächste Schritte

**Für mehr Details:**

- 📖 [ONBOARDING.md](ONBOARDING.md) - Ausführliche Anleitung
- 📖 [README.md](README.md) - Vollständige Dokumentation

**Erweiterte Features:**

- Icons hinzufügen (Lucide React)
- Animationen mit Tailwind
- Eigene Komponenten erstellen
- E2E Tests mit Playwright

---

**🚀 In 5 Minuten von 0 zur Portfolio-Seite!**

Viel Erfolg! 🎉

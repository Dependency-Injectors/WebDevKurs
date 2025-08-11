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
   - Die Navigation sollte jetzt deinen Namen enthalten
   - Klicke auf deinen Namen in der Navigation
   - Deine Seite sollte angezeigt werden

## 🎨 Schritt 4: Deine Seite gestalten

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

## 📤 Schritt 6: Änderungen commiten und pushen

1. **Änderungen anzeigen:**

   ```bash
   git status
   ```

2. **Dateien hinzufügen:**

   ```bash
   git add .
   ```

3. **Commit erstellen:**

   ```bash
   git commit -m "Füge meine Portfolio-Seite hinzu"
   ```

4. **Branch pushen:**
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
   - Tests laufen automatisch
   - Warte auf Review

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
import { Mail, Github, Linkedin } from "lucide-react";

// Verwendung:
<Mail className="w-6 h-6" />;
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

# Tests ausführen
npm test

# Build testen
npm run build
```

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

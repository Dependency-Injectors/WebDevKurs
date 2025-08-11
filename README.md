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

1. Lege eine neue Datei im Ordner `src/pages` an, z.B. `About.jsx`.
2. Erstelle darin eine React-Komponente:
   ```jsx
   function About() {
     return <div>Über uns</div>;
   }
   export default About;
   ```
3. Importiere die neue Seite in `App.jsx` und füge eine neue Route hinzu:
   ```jsx
   import About from "./pages/About";
   // ...
   <Route path="/about" element={<About />} />;
   ```

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
import About from "../About";

test("zeigt Überschrift an", () => {
  render(<About />);
  expect(screen.getByText("Über uns")).toBeInTheDocument();
});
```

### Konfiguration

Füge in deiner `vite.config.ts` folgendes hinzu:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

### Tests ausführen und GUI nutzen

```bash
npx vitest --ui
```

Damit öffnet sich eine Test-GUI im Browser.

---

**Hinweis:**  
Alle neuen Seiten bitte als `.tsx` anlegen und Tests im Ordner `__tests__` erstellen.
Jest und zugehörige Pakete können aus dem Projekt

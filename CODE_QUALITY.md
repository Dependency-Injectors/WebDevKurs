# 🔧 Code Quality Setup

Dieses Projekt verwendet eine umfassende Code-Quality-Pipeline mit ESLint, Prettier, TypeScript und Husky.

## 📋 Übersicht

### 🎯 Tools

- **ESLint** - Statische Code-Analyse für JavaScript/TypeScript
- **Prettier** - Code-Formatierung
- **TypeScript** - Statische Typen-Überprüfung
- **Husky** - Git-Hooks für automatische Quality Checks
- **lint-staged** - Läuft nur auf geänderten Dateien

### 🛠️ Konfiguration

#### ESLint (`eslint.config.js`)

```javascript
- React 19 Rules
- TypeScript Support
- JSX Accessibility (a11y)
- Import Organization
- Prettier Integration
- Professional Rule Set
```

#### Prettier (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}
```

#### Husky (`.husky/pre-commit`)

```bash
npx lint-staged  # Formatiert und lintet geänderte Dateien
npm test         # Läuft Tests vor jedem Commit
```

## 🚀 Scripts

### Entwicklung

```bash
npm run dev           # Entwicklungsserver
npm run build         # Production Build
npm run preview       # Build Preview
```

### Code Quality

```bash
npm run lint          # ESLint Check
npm run lint:fix      # ESLint Auto-Fix
npm run format        # Prettier Format
npm run format:check  # Prettier Check
npm run type-check    # TypeScript Check
```

### Quality Pipeline

```bash
npm run quality       # Komplette Quality Check
npm run quality:fix   # Quality Check + Auto-Fix
```

### Testing

```bash
npm test              # Tests einmalig
npm run test:watch    # Tests im Watch-Mode
npm run test:ui       # Visual Test Interface
```

## 🔒 Pre-Commit Hooks

Bei jedem `git commit` werden automatisch ausgeführt:

1. **lint-staged** formatiert und lintet nur geänderte Dateien
2. **Tests** laufen durch (müssen bestehen)
3. **Commit wird blockiert** bei Fehlern

### Deaktivierung (nur Notfälle)

```bash
git commit --no-verify -m "Notfall-Commit"
```

## 🎯 ESLint Rules

### JavaScript/ES6

- `no-console`: Warnung (außer warn/error)
- `no-unused-vars`: Fehler
- `prefer-const`: Fehler
- `no-var`: Fehler

### React

- `react/react-in-jsx-scope`: Aus (React 17+)
- `react/prop-types`: Aus (TypeScript)
- `react/jsx-key`: Fehler
- `react/self-closing-comp`: Fehler

### TypeScript

- `@typescript-eslint/no-unused-vars`: Fehler
- `@typescript-eslint/no-explicit-any`: Warnung
- `@typescript-eslint/prefer-optional-chain`: Fehler
- `@typescript-eslint/consistent-type-imports`: Fehler

### Accessibility (a11y)

- `jsx-a11y/anchor-is-valid`: Fehler
- `jsx-a11y/click-events-have-key-events`: Fehler
- `jsx-a11y/no-static-element-interactions`: Fehler

### Import Organization

```javascript
// Automatische Sortierung:
import React from "react"; // 1. External
import { NavLink } from "react-router"; // 2. External

import { routes } from "../routes"; // 3. Internal
```

## 🎨 Prettier Formatierung

### Automatisch formatiert

- **Beim Speichern** (VS Code)
- **Vor jedem Commit** (Husky)
- **Manuell** (`npm run format`)

### Regeln

- Semikolons: Ja
- Anführungszeichen: Doppelt
- Tab-Breite: 2 Spaces
- Zeilenlänge: 80 Zeichen
- Trailing Commas: ES5

## 🔧 VS Code Integration

### Empfohlene Extensions

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Auto-Settings (`.vscode/settings.json`)

- Format on Save: ✅
- ESLint Auto-Fix: ✅
- Organize Imports: ✅
- TypeScript Strict Mode: ✅

## 🚀 GitHub Actions Integration

### Quality Gate Workflow (`.github/workflows/test.yml`)

```yaml
- Type checking (TypeScript)
- ESLint check
- Prettier check
- Tests
- Build verification
```

### Health Check Updates

```yaml
- Code quality als Teil der täglichen Checks
- Automatische Fehlererkennung
- Issue-Creation bei Quality-Problemen
```

## 🎯 Best Practices

### Für Entwickler

1. **Nutze VS Code** mit empfohlenen Extensions
2. **Committet regelmäßig** - Pre-Hooks prüfen nur Änderungen
3. **Fixe Warnings** auch wenn sie nicht blockierend sind
4. **Organisiere Imports** automatisch

### Für Studenten

1. **Quality Checks helfen beim Lernen** guter Code-Standards
2. **Fehler sind normal** - nutze `npm run quality:fix`
3. **Prettier formatiert automatisch** - keine manuellen Sorgen
4. **TypeScript Errors** zeigen Verbesserungsmöglichkeiten

### Für Teams

1. **Konsistenter Code-Style** durch Prettier
2. **Frühe Fehlererkennung** durch ESLint
3. **Automatische Quality Gates** in CI/CD
4. **Accessibility-Standards** werden eingehalten

## 🐛 Häufige Probleme

### ESLint Fehler

```bash
# Problem: ESLint Fehler
npm run lint        # Zeigt alle Probleme
npm run lint:fix    # Behebt automatisch

# Spezifische Datei
npx eslint src/components/MyComponent.tsx --fix
```

### Prettier Konflikte

```bash
# Problem: Formatierung inkonsistent
npm run format      # Formatiert alle Dateien
npm run format:check # Überprüft ohne zu ändern
```

### TypeScript Errors

```bash
# Problem: Type Errors
npm run type-check  # Zeigt alle Type-Probleme
# Lösung: Types in der Datei korrigieren
```

### Pre-Commit blockiert

```bash
# Problem: Commit wird blockiert
npm run quality:fix # Behebt alle automatisch behebbare Probleme
git add .           # Staged die Fixes
git commit -m "..."  # Neuer Commit-Versuch
```

## 📊 Quality Metrics

### ESLint Rules: 50+ professionelle Regeln

### TypeScript: Strict Mode mit 15+ strikten Checks

### Prettier: 12 Formatierungs-Regeln

### Accessibility: 10+ a11y-Regeln für Barrierefreiheit

### Import: Automatische Organisation und Duplikat-Erkennung

## 🏆 Professional Level

Diese Konfiguration entspricht **Enterprise-Standards** und bereitet auf:

- **Senior Developer** Positionen vor
- **Team-Entwicklung** mit strikten Standards
- **Open Source** Beiträge mit hoher Qualität
- **Production-Ready** Code von Anfang an

---

**Viel Erfolg mit der professionellen Code-Qualität! 🚀**

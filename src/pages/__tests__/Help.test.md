# Help.test.tsx – Testbeschreibung

Diese Datei enthält umfassende Unit-Tests für die React-Komponente `Help`. Ziel ist es, die Funktionalität, das Verhalten und die Fehlerbehandlung der Hilfeseite sicherzustellen. Die Tests sind mit [Vitest](https://vitest.dev/) und [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) implementiert.

## Testaufbau

- **Test-Framework:** Vitest
- **Test-Utils:** React Testing Library
- **Mocking:** `global.fetch` wird mit Vitest gemockt, um API-Responses zu simulieren
- **Cleanup:** Nach jedem Test wird die Komponentenausgabe bereinigt

## Getestete Szenarien

### 1. **Seitentitel wird korrekt gerendert**

- **Ziel:** Sicherstellen, dass der Titel "Hilfe & Ressourcen" immer angezeigt wird
- **Mock:** Leere FAQ-Liste wird zurückgegeben
- **Prüfung:** Titel ist im DOM vorhanden

### 2. **Dokumentationslinks werden angezeigt**

- **Ziel:** Die statischen Links zu README und weiteren Ressourcen müssen sichtbar sein
- **Mock:** Leere FAQ-Liste wird zurückgegeben
- **Prüfung:** Linktext "📖 README – Projektübersicht & Befehle" ist im DOM

### 3. **FAQs werden nach erfolgreichem Laden angezeigt**

- **Ziel:** Dynamisch geladene FAQs erscheinen nach erfolgreichem Fetch
- **Mock:** Ein FAQ-Objekt mit Frage und Antwort wird zurückgegeben
- **Prüfung:** Die Frage aus dem Mock ist im DOM sichtbar

### 4. **Fehlermeldung bei fehlgeschlagenem Fetch**

- **Ziel:** Bei Netzwerkfehlern oder fehlgeschlagenem Laden wird eine Fehlermeldung angezeigt
- **Mock:** Fetch wirft einen Fehler (z.B. Netzwerkfehler)
- **Prüfung:** Die Fehlermeldung "Die FAQs konnten nicht geladen werden. Bitte versuche es später erneut." ist im DOM

## Teststruktur (Ablauf)

- **beforeEach:** Alle Mocks werden vor jedem Test zurückgesetzt
- **afterEach:** Cleanup der Komponentenausgabe
- **Jeder Test:**
  - Setzt das gewünschte Fetch-Verhalten
  - Rendert die Komponente
  - Überprüft das erwartete Verhalten im DOM

## Besonderheiten

- **fetch wird global gemockt:** Ermöglicht vollständige Kontrolle über API-Responses
- **Asynchrone Tests:** Für das Laden und Fehlerhandling wird `waitFor` verwendet
- **Testabdeckung:** Alle Hauptpfade (Erfolg, Fehler, statische Inhalte) werden abgedeckt

---

**Fazit:**
Die Tests in `Help.test.tsx` gewährleisten, dass die Hilfeseite robust auf verschiedene Szenarien reagiert und sowohl bei Erfolg als auch bei Fehlern ein konsistentes Nutzererlebnis bietet.

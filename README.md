# Steckbrief App

Mini-Software der **Gruppe Rhein** aus dem Kurs **KI Use Cases**.

Die Anwendung hilft dabei, aus sechs Leitfragen einen klaren **KI-Use-Case-Steckbrief** zu erstellen. Das Ergebnis kann direkt im Browser ausgefüllt, als Datei gespeichert, wieder geladen und als Druckansicht beziehungsweise PDF genutzt werden.

## Funktionen

- Steckbrief auf Basis eines Sechs-Fragen-Rasters
- Einstufung nach EU AI Act
- Machbarkeitsampel mit Punktebewertung
- Druckansicht für PDF oder Ausdruck
- Speichern und Laden als JSON-Datei
- Installierbar als Web-App auf dem Handy

## Projektstand

- **Web-Version:** über GitHub Pages öffentlich erreichbar
- **PWA:** als App auf dem Smartphone installierbar
- **Windows:** Build als EXE über GitHub Actions
- **Android:** Build als APK über GitHub Actions

## Online-Version

GitHub Pages:

[https://wbsuser.github.io/Steckbrief/](https://wbsuser.github.io/Steckbrief/)

GitHub-Repository:

[https://github.com/wbsuser/Steckbrief](https://github.com/wbsuser/Steckbrief)

## Nutzung

1. Webseite öffnen
2. Formular ausfüllen
3. Steckbrief erzeugen
4. Bei Bedarf als JSON speichern oder wieder laden
5. Über `Drucken / PDF` als PDF ausgeben

## Als App auf dem Handy installieren

Auf dem Smartphone die GitHub-Pages-Seite öffnen und dann je nach Browser:

- **Android / Chrome:** `Zum Startbildschirm hinzufügen`
- **iPhone / Safari:** `Teilen` → `Zum Home-Bildschirm`

## Lokale Entwicklung

Voraussetzungen:

- Node.js
- npm

Projekt starten:

```bash
npm install
npm run start:electron
```

Web-Dateien neu vorbereiten:

```bash
npm run prepare:web
```

## Releases

Die Builds für Windows und Android werden über GitHub Actions erzeugt.

Wichtiger Workflow:

`Actions` → `Build Android APK and Windows EXE`

Dort kann der Workflow für den Branch `main` manuell gestartet werden.

Die erzeugten Dateien erscheinen anschließend in den GitHub Releases.

## Verwendete Technik

- HTML
- CSS
- JavaScript
- PWA mit Manifest und Service Worker
- Electron für Windows
- Capacitor für Android
- GitHub Pages
- GitHub Actions

## Team

**Gruppe Rhein**


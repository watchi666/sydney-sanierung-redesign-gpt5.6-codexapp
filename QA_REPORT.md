# QA Report

Stand: 12. Juli 2026

## Redesign Pass 2

- Direkter visueller Vergleich mit `sydney-sanierung-redesign-webcreato.vercel.app` durchgeführt.
- Hero vollständig neu aufgebaut: Prata/Manrope, atmosphärische Lichtbühne und 3D-Projektrolle statt statischer 5/7-Bildaufteilung.
- Hero bei 1280 × 720 geprüft: H1, Einleitung und beide CTAs vollständig sichtbar; sechs Ringflächen liegen im sichtbaren Bühnenbereich.
- Mobile bei ca. 375 × 812 geprüft: H1 bricht sauber, Telefonnummer und Menü sind sichtbar, beide CTAs bleiben erreichbar.
- Mobile Navigation öffnet und schließt korrekt.
- Projektrolle rotiert automatisch, reagiert auf Mausrad und Pointer-Drag und besitzt fokussierbare Bildschaltflächen.
- Startseiten-Bildaudit wiederholt: Bad-, Fliesen-, Fortuna- und Treppenaufnahmen mit sichtbarem Ausbauzustand aus Hero, Leistungsbühne und Referenzfilm entfernt.
- Baustellenbilder bleiben auf den Stockum-Prozess und den echten Vorher/Nachher-Vergleich begrenzt.
- Reveal-Fallback ergänzt, damit große Bildflächen auch bei schnellem Scrollen oder direktem Einsprung sichtbar werden.
- Alle HTML-Referenzen, H1-Strukturen, IDs und Alt-Texte erneut geprüft: ohne Fehler.
- JavaScript-Syntax und `git diff --check`: ohne Fehler.

## Geprüft

- Startseite, Stockum-Projektseite, Impressum, Datenschutz, 404, robots.txt und sitemap.xml liefern lokal HTTP 200.
- Alle lokalen HTML-Verweise und Bildpfade sind vorhanden.
- Jede Inhaltsseite besitzt genau eine H1; IDs sind eindeutig; alle Bilder haben Alt-Texte.
- JavaScript besteht den Syntaxcheck.
- Desktop-Hero bei 1280 × 720: CTA vollständig im ersten Viewport, keine horizontale Überbreite, keine Kollision zwischen Text und Projektkarte.
- Responsive CSS ist mobile-first für 320, 480, 768, 1024, 1280 und 1536 px abgestuft.
- Mobile Header: Telefonnummer bleibt sichtbar; Markenwortmarke wird auf 320 px zugunsten von Telefon und Menü reduziert.
- Stockum-Galerie: 31 Einträge, alle Bilder nach Lazy-Load fehlerfrei geladen.
- Filtertest „Bad“: 3 passende Bilder sichtbar, Status und pressed-State aktualisiert.
- Lightbox: öffnet das gewählte Bild mit passendem Alt-Text und lässt sich über den beschrifteten Schließen-Button schließen.
- Vorher/Nachher: Slider von 48 auf 72 gesetzt; CSS-Split wurde korrekt auf 72 % aktualisiert.
- Keine JavaScript-Fehler im Browser während der geprüften Abläufe.

## Bildregeln

- Startseite: ausschließlich fertige Arbeiten und hochwertige Detailaufnahmen.
- Baustellenbilder: nur auf der Projektseite Stockum und dort mit Bauphasen-Kontext.
- Vorher/Nachher: ausschließlich die tatsächlich zusammengehörige Stockum-Treppe (Rohbau und Fertigzustand).

## Deployment-Prüfung

Die produktive URL wird nach dem Vercel-Deployment erneut auf Erreichbarkeit, Seitentitel, Galerieumfang und Bildfehler geprüft.

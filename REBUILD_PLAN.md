# Rebuild-Plan: Sydney Sanierung

## Redesign Pass 2: Cinematic Craft Atelier

### Aesthetic direction

Die zweite Fassung wird als **cinematic craft atelier** inszeniert: rußschwarzer Raum, warmes Metalllicht, feine Serifentypografie und echte fertige Arbeiten als schwebende Materialkörper. Die Website soll weniger wie eine zusammengesetzte Handwerker-Landingpage und mehr wie ein begehbares Portfolio wirken. Referenz ist die räumliche Tiefe einer dunklen Ausstellung, nicht ein Kartenraster.

### Homepage sections

1. **Hero:** Vollbildbühne mit Text links und einer langsam rotierenden 3D-Projektrolle rechts. Die Rolle reagiert auf Mausrad und Ziehen; jedes Bild öffnet sich vergrößert. Ausschließlich fertige Arbeiten.
2. **Manifest:** Heller, großzügiger Gegenraum mit einer überbreiten Aussage und einem einzelnen starken Wohnraumbild. Kein Statistikstreifen.
3. **Leistungen:** Dunkle, zweigeteilte Arbeitsbühne. Links wechselt ein großes Bild, rechts stehen die Leistungen als typografische Liste statt Karten.
4. **Referenzen:** Horizontal wirkender Bildfilm mit stark unterschiedlichen Formaten und ruhigen Beschriftungen.
5. **Stockum:** Echter Vorher/Nachher-Vergleich über die volle Breite; Baustellenbilder nur hier und eindeutig als Prozess markiert.
6. **Ablauf:** Helles Materialpapier mit einer durchgehenden Linie und vier echten Phasen.
7. **Stimme:** Eine dominante Kundenstimme als große typografische Unterbrechung statt zweier Karten.
8. **FAQ und Kontakt:** Ruhige helle Fragen, danach ein dunkler Schlussraum mit großer Telefonnummer und reduziertem Formular.

### Wow moment

Die Hero-Projektrolle ist ein räumlicher Ring aus fertigen Arbeiten. Sie dreht sich langsam von selbst, lässt sich scrollen und ziehen, reagiert mit Tiefenschärfe und Licht und holt ein angeklicktes Bild in eine fokussierte Großansicht. Sie ist kein Dekoeffekt, sondern die Referenzgalerie im ersten Blick.

### Image discipline

- Hero und Startseitenreferenzen: nur eindeutig fertige Räume und Oberflächen.
- Stockum-Treppe: nicht als fertiges Hero-Motiv, weil die Umgebung in den vorhandenen Aufnahmen noch im Ausbau ist.
- Baustelle und Rohbau: ausschließlich im Stockum-Vergleich oder auf der Stockum-Galerieseite.

## Markenextraktion und Ausgangslage

Sydney Sanierung verbindet Komplettsanierung, Innenausbau, Trockenbau, Bodenverlegung und kreative Wandgestaltung. Das vorhandene Material zeigt sowohl fertige Räume als auch echte Bauphasen. Der neue Auftritt trennt diese Bildtypen bewusst: Die Startseite verkauft das Ergebnis, die Stockum-Seite belegt den Weg dorthin.

## SEO- und Inhaltsplan

- Primär: Sanierung Düsseldorf, Innenausbau Düsseldorf, Renovierung Düsseldorf
- Sekundär: Trockenbau, Bodenverlegung, Badrenovierung, Spachteltechnik Düsseldorf
- Startseite: Leistungsversprechen, fertige Referenzen, Stockum-Vorher/Nachher, Ablauf, echte Kundenstimmen, FAQ, Kontakt
- Projektseite: Projekt Stockum mit Bauphasen und vollständiger Galerie
- Rechtliches: Impressum und Datenschutz mit den vorhandenen Unternehmensdaten
- LocalBusiness-JSON-LD ohne erfundene Bewertung oder Kennzahlen

## Technisches Ziel

Statische Website mit HTML, CSS und Vanilla JavaScript. Kein Framework, kein Build-Schritt, keine externen Bildquellen. Lokale Bilder, native Interaktionen, portable Pfade und direkte Vercel-Kompatibilität.

## Verbindliche Designrichtung

**Aesthetic Direction:** warmes, präzises Bauatelier. Der Auftritt verbindet verbranntes Orange aus dem bestehenden Logo mit tiefem Rußschwarz, Kalkweiß und warmem Holz. Er wirkt wie eine gut geführte Werkstattmappe, nicht wie ein Bauportal und nicht wie ein Luxusmagazin.

**Physische Szene:** Ein Eigentümer betrachtet am späten Nachmittag in einem frisch fertiggestellten Raum Materialproben und saubere Detailfotos. Warmes Licht, klare Kanten, sichtbare handwerkliche Spuren.

## Abschnittsarchitektur

1. Hero: asymmetrischer 5:7-Split. Links große, direkte Copy auf Rußschwarz; rechts fertige Spachtelwand als raumhohes Bild mit überlappender Stockum-Treppenkarte.
2. Profilband: vier verifizierte Leistungsmerkmale als horizontale Werkstattmarken, keine erfundenen Zahlen.
3. Leistungen: große typografische Liste neben einem wechselnden Bildfeld, keine Kartenmatrix.
4. Referenzen: versetzte Collage ausschließlich fertiger Räume und Oberflächen.
5. Stockum-Fokus: echter Rohbau/Fertigstellung-Vergleich der Treppe mit draggablem Bildteiler und klarer Verlinkung zur Projektseite.
6. Ablauf: vier echte Phasen in einer strengen horizontalen Sequenz.
7. Kundenstimmen: groß gesetzte Originalaussagen ohne erfundene Namen.
8. FAQ: ruhiges Akkordeon auf hellem Kalkgrund.
9. Kontakt: voller dunkler Abschluss mit Telefon, E-Mail und zuverlässigem Mailto-Formular.

## Wow-Moment

Im Hero schiebt sich die fertige Stockum-Treppe wie eine Materialprobe über die große Spachtelwand. Weiter unten lässt sich dieselbe Treppe mit einem echten Vorher/Nachher-Teiler vom Rohzustand zur fertigen Schwarz-Holz-Konstruktion bewegen. Der Effekt ist unmittelbar verständlich und vollständig mit echten Bildern belegt.

## Bildplan

- Hero-Hauptbild: `Spachteltechnik2.jpg`, fertige mineralische Wandfläche
- Hero-Projektkarte: Stockum `projekt-stockum_30.jpg`, fertige Treppe
- Referenzen Startseite: `Wohnung_fertig.webp`, `Fortuna_fertigstellung.jpg`, `Schlafzimmer_fertig.jpg`, `Spachteltechnik_Schlafzimmer.webp`
- Stockum-Vergleich: `projekt-stockum_08.jpg` und `projekt-stockum_30.jpg`, gleiche Treppensituation
- Stockum-Projektseite: alle 31 Bilder, gruppiert nach Bad, Innenausbau, Boden, Treppe und Details
- Baustellenbilder außerhalb Stockum: nur als Prozessbild oder belegtes Vergleichspaar

## Copy-Strategie

- Ergebnis zuerst: Räume fertig denken und sauber umsetzen
- Kurze, aktive Sätze und konkrete Gewerke
- Keine erfundenen Projektzahlen, Teamgrößen, Garantien oder Bewertungsnamen
- Direkte CTAs: Projekt besprechen, Stockum ansehen, jetzt anrufen

## Accessibility und QA

- WCAG AA, sichtbare Fokuszustände, Skip-Link, semantische Überschriften
- Mindestens 44 × 44 Pixel große Touch-Ziele
- `prefers-reduced-motion` für alle Animationen
- Tests bei 320, 768, 1024, 1280 und 1536 Pixeln
- Keine defekten Bilder, kein horizontales Scrollen, eine H1 pro Seite

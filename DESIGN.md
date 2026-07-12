# Designsystem: Sydney Sanierung

## 1. Visual Theme & Atmosphere

Sydney Sanierung wirkt wie ein präzises Bauatelier: dunkle, ruhige Flächen tragen echte Projektbilder, verbranntes Orange markiert Handlung und Energie, Kalkweiß schafft Luft. Die Gestaltung übersetzt die vorhandene Handwerkermarke in einen erwachsenen, architektonischen Auftritt, ohne ihre Direktheit zu verlieren.

Die Seite lebt von klaren Kanten, überlappenden Materialbildern und großen typografischen Aussagen. Baustellenbilder sind Belege für den Prozess, niemals dekorative Kulisse. Fertige Räume bekommen Ruhe und Fläche.

**Key Characteristics:**
- Rußschwarz, Kalkweiß und Ember Orange
- klare Kanten statt weicher Kartenlandschaften
- echte fertige Projekte als primärer Beweis
- Bauphasen nur in erklärendem Kontext
- asymmetrische Kompositionen und kontrollierte Überlagerungen
- prägnante Grotesktypografie
- ruhige, handwerklich motivierte Bewegung

## 2. Color Palette & Roles

### Primary

| Role | Hex | Usage |
|---|---|---|
| Primary | #F06424 | CTAs, Projektmarkierungen, Fokus |
| Primary Dark | #B53E12 | Hover und aktive Zustände |
| Primary Light | #F6C4A8 | subtile Akzentflächen |

### Accent

| Role | Hex | Usage |
|---|---|---|
| Accent | #D6B26E | warme Materialdetails |
| Accent Dark | #8B6B32 | Hover auf hellen Flächen |

### Interactive States

| Role | Hex | Usage |
|---|---|---|
| Link Default | #B53E12 | Links auf hellen Flächen |
| Link Hover | #171612 | Hover auf hellen Flächen |
| Link Visited | #6F5549 | besuchte Links |
| Focus Ring | #FF8A4D | Tastaturfokus |
| Error | #A72F24 | Fehler |
| Success | #356C4B | Bestätigung |
| Warning | #8B6418 | Hinweise |

### Neutral Scale

| Role | Hex | Usage |
|---|---|---|
| Neutral 950 | #171612 | Haupttext, Hero, Footer |
| Neutral 800 | #302B26 | Sekundärflächen |
| Neutral 600 | #6F655D | Sekundärtext |
| Neutral 400 | #A89D92 | Metadaten |
| Neutral 200 | #D8D0C6 | Linien |
| Neutral 100 | #EAE4DA | alternative Fläche |
| Neutral 50 | #F6F2EA | Seitenhintergrund |

### Surface & Borders

| Role | Hex | Usage |
|---|---|---|
| Surface Primary | #F6F2EA | Hauptfläche |
| Surface Secondary | #EAE4DA | Prozess und FAQ |
| Surface Dark | #171612 | Hero und Kontakt |
| Border Default | #B9AEA3 | sichtbare Trennung |
| Border Subtle | #D8D0C6 | feine Linien |

### Shadow Colors

| Role | Value | Usage |
|---|---|---|
| Shadow Light | rgba(23,22,18,0.08) | Bilder |
| Shadow Medium | rgba(23,22,18,0.18) | überlappende Flächen |
| Shadow Heavy | rgba(23,22,18,0.34) | Lightbox und Navigation |

**Kontrast:** #171612 auf #F6F2EA > 15:1; #F6F2EA auf #171612 > 15:1; #171612 auf #F06424 > 4.5:1; #F6F2EA auf #B53E12 > 5:1.

## 3. Typography Rules

**Primary Font:** Bricolage Grotesque
**Secondary Font:** Archivo

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Bricolage Grotesque | clamp(3.5rem, 7vw, 6rem) | 700 | 0.92 | -0.045em | maximal 96px |
| Display Large | Bricolage Grotesque | clamp(2.8rem, 5vw, 4.5rem) | 700 | 0.96 | -0.035em | große Statements |
| Section Heading | Bricolage Grotesque | clamp(2.2rem, 4vw, 3.5rem) | 650 | 1.02 | -0.025em | H2 |
| Sub-heading | Bricolage Grotesque | 1.4rem | 650 | 1.2 | -0.015em | H3 |
| Body Large | Archivo | 1.125rem | 450 | 1.65 | 0 | Leads |
| Body | Archivo | 1rem | 420 | 1.65 | 0 | Fließtext |
| Button | Archivo | 0.94rem | 700 | 1 | 0.01em | Aktionen |
| Small | Archivo | 0.875rem | 600 | 1.45 | 0.03em | Metadaten |
| Caption | Archivo | 0.75rem | 650 | 1.4 | 0.08em | Bildlabels |

## 4. Component Stylings

### Primary Button

| Property | Value |
|---|---|
| Background | #F06424 |
| Text Color | #171612 |
| Padding | 16px 24px |
| Border Radius | 2px |
| Border | 1px solid #F06424 |
| Shadow | 0 12px 28px rgba(23,22,18,0.18) |
| Hover Background | #FF8A4D |
| Focus Ring | 0 0 0 4px #FF8A4D |
| Active Background | #B53E12 |
| Active Transform | translateY(1px) |
| Disabled Background | #A89D92 |
| Transition | background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease |

### Secondary Button

| Property | Value |
|---|---|
| Background | transparent |
| Text Color | #171612 |
| Border | 1px solid #171612 |
| Padding | 16px 24px |
| Border Radius | 2px |
| Hover Background | #171612 |
| Hover Text | #F6F2EA |
| Focus Ring | 0 0 0 4px #FF8A4D |

### Dark/Inverse Button

| Property | Value |
|---|---|
| Background | #F06424 |
| Text Color | #171612 |
| Border | 1px solid #F06424 |
| Padding | 16px 24px |
| Border Radius | 2px |
| Hover Background | #F6F2EA |
| Focus Ring | 0 0 0 4px #FF8A4D |

### Cards

| Property | Value |
|---|---|
| Background | #F6F2EA |
| Border | 1px solid #D8D0C6 |
| Border Radius | 2px |
| Padding | 24px |
| Shadow | 0 12px 30px rgba(23,22,18,0.08) |
| Hover Shadow | 0 24px 54px rgba(23,22,18,0.18) |
| Transition | transform 260ms cubic-bezier(0.16,1,0.3,1), box-shadow 260ms ease |

### Inputs

| Property | Value |
|---|---|
| Background | #F6F2EA |
| Border | 1px solid #B9AEA3 |
| Border Radius | 2px |
| Padding | 14px 16px |
| Font | Archivo, 16px |
| Placeholder Color | #6F655D |
| Focus Border | #F06424 |
| Focus Ring | 0 0 0 3px rgba(240,100,36,0.35) |
| Error Border | #A72F24 |
| Disabled Background | #EAE4DA |

### Navigation

| Property | Value |
|---|---|
| Background | rgba(23,22,18,0.94) |
| Height | 80px |
| Link Color | #F6F2EA |
| Link Hover Color | #F06424 |
| Active Link Color | #F06424 |
| Active Indicator | kurze orange Unterstreichung |
| Mobile Menu Background | #171612 |

## 5. Layout Principles

**Base Spacing Unit:** 8px
**Spacing Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

| Grid Property | Value |
|---|---|
| Max Container Width | 1360px |
| Grid Columns | 12 |
| Column Gap | 24px |
| Row Gap | 32px |

| Context | Value |
|---|---|
| Zwischen Hauptabschnitten | clamp(88px, 10vw, 152px) |
| Zwischen Unterabschnitten | 64px |
| Zwischen Inhaltsblöcken | 32px |

| Radius | Value | Usage |
|---|---:|---|
| Small | 2px | Bilder und Inputs |
| Medium | 8px | einzelne Controls |
| Large | 20px | nur Fokusbilder |
| Full | 9999px | mobile Telefonaktion |

## 6. Depth & Elevation

| Level | Name | CSS box-shadow | Usage |
|---|---|---|---|
| 0 | Flat | none | Text und Linien |
| 1 | Subtle | 0 2px 10px rgba(23,22,18,0.08) | Navigation |
| 2 | Raised | 0 12px 30px rgba(23,22,18,0.12) | Projektbilder |
| 3 | Elevated | 0 24px 60px rgba(23,22,18,0.18) | Überlagerungen |
| 4 | Floating | 0 24px 64px rgba(23,22,18,0.34) | Lightbox und mobile CTA |

## 7. Do's and Don'ts

### Do's

1. Fertige Räume auf der Startseite groß zeigen.
2. Orange #F06424 für Handlung und Projektmarkierung einsetzen.
3. Baustellenbilder nur mit Phase, Erklärung oder Vergleich zeigen.
4. Bricolage Grotesque für starke, kurze Aussagen verwenden.
5. Bildformate asymmetrisch staffeln.
6. Stockum als zusammenhängende Geschichte erzählen.
7. Kanten und Fugen als grafisches Motiv nutzen.
8. Bewegung über Transform und Opacity ruhig halten.

### Don'ts

1. Keine generische Blau-Weiß-Handwerkeroptik.
2. Keine erfundenen Kennzahlen, Namen oder Bewertungen.
3. Keine Baustelle im Hero.
4. Keine gleichförmige Dreier-Kartenmatrix.
5. Keine abgerundeten Icon-Kacheln.
6. Keine Textverläufe und keine Glaseffekte als Dekoration.
7. Keine wiederholten Mini-Kicker über jeder Überschrift.
8. Keine Bewegung bei reduzierter Bewegung.

### The AI Slop Test

> Wenn diese Website wie ein generisches KI-Handwerker-Template wirkt, ist sie nicht fertig. Jedes Layout muss aus Sydneys echten Projekten, Gewerken und der Orange-Ruß-Marke entstehen.

## 8. Responsive Behavior

| Name | Width | Columns | Container Padding |
|---|---:|---:|---:|
| Mobile | 375px | 4 | 18px |
| Tablet | 768px | 8 | 28px |
| Desktop | 1024px | 12 | 40px |
| Large | 1280px | 12 | 52px |
| XL | 1536px | 12 | 64px |

- Mindestgröße für Touch-Ziele: 44 × 44px.
- Mobile Navigation unter 900px, vollständige Navigation ab 900px.
- Hero einspaltig mobil, asymmetrischer Split ab 1024px.
- Projektcollage wird mobil zum rhythmischen Bildstrom.
- Galerie: zwei Spalten ab 640px, drei ab 1024px, vier ab 1440px.
- Display Hero maximal 6rem, Body immer mindestens 1rem.

## 9. Agent Prompt Guide

### Quick Color Reference

- Primary: #F06424
- Primary Dark: #B53E12
- Accent: #D6B26E
- Text Primary: #171612
- Text Secondary: #6F655D
- Background: #F6F2EA
- Surface: #EAE4DA

### Hero

Erstelle einen asymmetrischen Hero auf #171612. Headline in Bricolage Grotesque, clamp(3.5rem, 7vw, 6rem), Gewicht 700, Zeilenhöhe 0.92, Farbe #F6F2EA. CTA auf #F06424 mit #171612, 16px 24px, Radius 2px.

### Projektbild

Nutze eine echte fertige Arbeit ohne Kartenrahmen, Radius 2px, Shadow Level 3. Metadaten in Archivo 12px/650 mit #F06424.

### Kontaktformular

Labels in Archivo 14px/600, Eingaben auf #F6F2EA mit 1px #B9AEA3, Radius 2px, Fokus 0 0 0 3px rgba(240,100,36,0.35). Submit nutzt den primären Button.

### Footer

Footer auf #171612, Text #F6F2EA, Links Hover #F06424. Desktop dreispaltig, mobil einspaltig.

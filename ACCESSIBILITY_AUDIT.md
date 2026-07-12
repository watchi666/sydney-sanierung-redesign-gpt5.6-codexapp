# Accessibility Audit

Zielniveau: WCAG 2.2 AA, pragmatisch für eine statische lokale Unternehmenswebsite umgesetzt.

## Umgesetzt

- Semantische Landmarken, genau eine H1 pro Inhaltsseite und logisch aufgebaute Überschriften.
- Skip-Link zum Hauptinhalt.
- Sichtbare Fokusmarkierungen mit hohem Kontrast.
- Tastaturbedienbare Navigation, Galerie, Filter, Lightbox und Vorher/Nachher-Slider.
- Mindesthöhe interaktiver Elemente von 44 px; zentrale CTAs mindestens 50 px.
- Aussagekräftige Alt-Texte für Referenz- und Prozessbilder.
- Dekorative SVG-Icons sind vor Screenreadern verborgen.
- Galerie-Status wird über `aria-live` ausgegeben; Filter verwenden `aria-pressed`.
- Lightbox basiert auf dem nativen Dialogelement und besitzt einen explizit beschrifteten Schließen-Button.
- Animationen werden bei `prefers-reduced-motion` deutlich reduziert.
- Formulare haben sichtbare Labels, klare Fokuszustände, Statusausgabe und einen E-Mail-Fallback.
- Farben und Textgrößen sind auf hellem und dunklem Untergrund für gute Lesbarkeit ausgelegt.

## Bewusste Grenze

Das Kontaktformular öffnet das lokale E-Mail-Programm. Für serverseitige Übermittlung wäre später ein Formularanbieter oder eigener Endpoint erforderlich.

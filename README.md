# VerdViu · Jardineria i Poda (Vite + React + TS + CSS Modules)

**Idiomes**: Català (predeterminat) i Castellà.

## 🚀 Còmode per començar
```bash
npm install
npm run dev
```

Obre http://localhost:5173

## 🏗️ Build
```bash
npm run build
npm run preview
```

## Estructura
- `src/i18n` — sistema senzill de traduccions amb Context (DIP).
- `src/components` — components petits i reutilitzables (SRP).
- `src/styles` — CSS Modules i estils globals.
- `src/assets` — imatges SVG lleugeres.

## Notes de qualitat
- **SOLID**: components amb responsabilitat única, tipatges forts, inversió de dependències per a i18n.
- **Responsive**: grid + unitats fluides; proves fins a 320px d’amplada.
- **A11y**: llengua al `<html>`, enllaç *skip*, labels de formulari, `alt` a imatges decoratives controlat.
- **SEO**: meta `description` i headings ordenats.
- **Sense backend**: el formulari usa `mailto:` (substitueix l'email si cal).

## Personalització ràpida
- Canvia colors a `styles/global.css` (`:root` variables).
- Textos a `src/i18n/ca.json` i `es.json`.
- Afegiu serveis o seccions duplicant components.

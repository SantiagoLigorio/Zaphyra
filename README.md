# Zaphyra — Monochrome Editorial Website

Static, responsive, bilingual homepage for Zaphyra, designed as an artistic and commercial presentation rather than a fixed genre/BPM profile.

## Structure

- `index.html` — Portuguese default version
- `en/index.html` — English version
- `assets/site.css` — monochrome visual system, responsive layouts, integrated artwork, and motion
- `assets/site.js` — progressive reveal and current copyright year
- `assets/botanical.svg` — continuous botanical linework along page margins
- `assets/art-*.webp` — the five monochrome botanical/surreal illustrations supplied for this site, placed across the hero, research, approach, listening and interlude sections
- `assets/art-wreath-ink.png` — transparent black-ink version of the wreath engraving for the white interlude surface
- `assets/sigil.svg` — retained original vector ornament (not used as the hero artwork)
- `favicon.svg` — monochrome SVG favicon

## Editorial / positioning decisions

- No BPM range is displayed as a defining characteristic.
- Genres are described as open territories, never as an exclusive label or fixed BPM profile.
- Booking language emphasizes curatorial context and an adaptive set narrative.
- The booking system remains marked as in preparation until an actual endpoint exists.
- Images are used as monochrome visual identity assets, not as documentation of live performance.

## Deploy

Static files; no build step or JavaScript framework required. Google Fonts are optional enhancements with local system fallbacks. This package does not include a `CNAME`; the domain should be added once deployment is ready.


## Art direction

The flower-with-eye engraving leads the hero. The roots/eye engraving accompanies sonic research; the leaf/frequency engraving supports the open-ended approach; the dandelion/ear artwork sits with listening links; and the botanical wreath appears in the interlude as a symbol of cycles and ideas taking shape. The former standalone artwork gallery has been removed so visual meaning is integrated into the site narrative.


## Atualização de movimento contínuo
- Corrente botânica monocromática permanente nas laterais, com traço fluido discreto.
- Gravuras começam a se mover suavemente ao entrar na experiência e não reiniciam a cada saída da viewport.
- Faixa editorial animada com termos de identidade sonora, em português e inglês.
- Campo LINGUAGEM concluído com o texto “Curadoria aberta, assinatura própria” (EN: “Open curation, a distinct signature”).
- Respeito a `prefers-reduced-motion`.


## Booking destination
- The public site booking CTA points to the booking project repository URL provided by the site owner: https://github.com/SantiagoLigorio/zaphyra-booking. Replace this with the deployed booking application URL once available. The repository URL is not itself a public-facing booking app, but is used here temporarily because no deployed app URL was provided.

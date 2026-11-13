# Masonski Beograd · Belgrado Massonica

Interaktivni vodič (SR / IT) kroz masonsku istoriju Beograda. React + Vite + Leaflet.

## Pokretanje

Potreban je [Node.js](https://nodejs.org) (verzija 18 ili novija).

```bash
npm install
npm run dev
```

Otvori adresu koju ispiše terminal (obično http://localhost:5173).

## Gde se šta menja

| Šta | Fajl |
|---|---|
| Lokacije na mapi (tekst, adrese, koordinate) | `src/data/places.js` |
| Vremenska linija | `src/data/timeline.js` |
| Glavna priča i citat | `src/components/Story.jsx` |
| Kartice o Garibaldincima | `src/components/Garibaldini.jsx` |
| Izvori | `src/components/Footer.jsx` |
| Boje, fontovi, izgled | `src/index.css` (promenljive na vrhu) |

Svaki tekst ima srpsku (`sr`) i italijansku (`it`) verziju. Da dodaš novu tačku na mapu, kopiraj jedan objekat u `places.js` i promeni podatke. `type: 'history'` je puni zlatni krug, a `type: 'symbol'` je prazan krug.

## Objavljivanje

```bash
npm run build
```

Sadržaj foldera `dist/` može da se postavi na Netlify, Vercel ili GitHub Pages.

## Napomene

- Koordinate su približne – proveriti pre objave.
- Italijanski prevod treba da pregleda izvorni govornik.
- Mapa koristi besplatne OpenStreetMap pločice (bez API ključa, potreban internet), zatamnjene preko CSS filtera u `src/index.css`.

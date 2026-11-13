import { useT } from '../LangContext.jsx'

const sources = [
  ['Regularna Velika loža Srbije – istorija', 'https://rgls.org/en/history/'],
  ['RVLS – Svetlost Balkana in Belgrade', 'https://rgls.org/svetlost-balkana-in-belgrade/'],
  ['RVLS – Garibaldi lodges in Belgrade', 'https://rgls.org/the-oldest-and-the-youngest-garibaldi-lodge-at-a-joint-working-in-belgrade/'],
  ['BBC na srpskom – Masoni u Srbiji', 'https://www.danas.rs/bbc-news-serbian/masoni-u-srbiji-ko-su-slobodni-zidari-i-sta-rade/'],
  ['Novosti – kongres 1926.', 'https://www.novosti.rs/drustvo/feljton/1143866/feljton-evropska-unija-zaceta-beogradu-slobodni-zidari-sire-ideje-mira-sprecili-ratne-katastrofe'],
  ["F. Conti – Il Grande Oriente d'Italia e le massonerie balcaniche", 'https://flore.unifi.it/handle/2158/1133614'],
]

export default function Footer() {
  const t = useT()
  return (
    <footer>
      <svg className="eye" viewBox="0 0 60 40" fill="none" stroke="#c9a45c" strokeWidth="1.5">
        <path d="M30 3 L57 37 H3 Z" />
        <path d="M18 26 Q30 16 42 26 Q30 34 18 26Z" />
        <circle cx="30" cy="26" r="3" fill="#c9a45c" />
      </svg>
      <div className="cinzel gold">{t({ sr: 'Izvori', it: 'Fonti' })}</div>
      <ul>
        {sources.map(([name, url]) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </li>
        ))}
        <li>
          Zoran Lj. Nikolić, <em>Masonski simboli u Beogradu</em>, Službeni glasnik, 2020.
        </li>
      </ul>
      <div className="proto">{t({ sr: 'PROTOTIP · 2026', it: 'PROTOTIPO · 2026' })}</div>
    </footer>
  )
}

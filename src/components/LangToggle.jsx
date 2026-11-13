import { useLang } from '../LangContext.jsx'

export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Jezik / Lingua">
      {['sr', 'it'].map((l) => (
        <button key={l} className={lang === l ? 'on' : ''} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

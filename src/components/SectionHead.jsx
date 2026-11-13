import { useT } from '../LangContext.jsx'

export default function SectionHead({ kicker, title, lead }) {
  const t = useT()
  return (
    <>
      <div className="kicker">{t(kicker)}</div>
      <h2 className="title">{t(title)}</h2>
      {lead && <p className="lead">{t(lead)}</p>}
    </>
  )
}

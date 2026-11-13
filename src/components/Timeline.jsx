import { useEffect, useRef } from 'react'
import SectionHead from './SectionHead.jsx'
import { timeline } from '../data/timeline.js'
import { useT } from '../LangContext.jsx'

export default function Timeline() {
  const t = useT()
  const ref = useRef(null)

  // događaji se pojavljuju dok se skroluje
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('seen')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.2 }
    )
    ref.current.querySelectorAll('.ev').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="vreme">
      <SectionHead
        kicker={{ sr: 'Treći zapis', it: 'Terza tavola' }}
        title={{ sr: 'Hronika svetlosti', it: 'Cronaca della luce' }}
        lead={{ sr: 'Od prve lože u Beogradu do danas', it: 'Dalla prima loggia a Belgrado a oggi' }}
      />
      <p className="tl-legend">
        <i />
        {t({ sr: 'italijanska nit', it: 'il filo italiano' })}
      </p>
      <div className="tl" ref={ref}>
        {timeline.map((ev) => (
          <div key={ev.year} className={'ev' + (ev.italian ? ' it-mark' : '')}>
            <div className="y">{ev.year}</div>
            <h4>{t(ev.title)}</h4>
            <p>{t(ev.text)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

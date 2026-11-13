import Emblem from './Emblem.jsx'
import { useT } from '../LangContext.jsx'

export default function Hero() {
  const t = useT()
  return (
    <header className="hero">
      <Emblem />
      <div className="motto">FIAT LUX</div>
      <div className="motto-tr">{t({ sr: '„Neka bude svetlost"', it: '«Sia la luce»' })}</div>
      <div className="rule" />
      <h1>{t({ sr: 'Masonski Beograd', it: 'Belgrado Massonica' })}</h1>
      <p className="sub">
        {t({
          sr: 'Vodič kroz dva i po veka slobodnog zidarstva u gradu na ušću, i kroz nit koja ga od 1876. vezuje za Italiju.',
          it: "Una guida attraverso due secoli e mezzo di Libera Muratoria nella città alla confluenza, e il filo che dal 1876 la lega all'Italia.",
        })}
      </p>
      <div className="scroll">{t({ sr: 'SIĐI', it: 'SCENDI' })}</div>
    </header>
  )
}

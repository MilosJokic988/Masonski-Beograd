import SectionHead from './SectionHead.jsx'
import { useT } from '../LangContext.jsx'

const cards = [
  {
    when: '30. VI 1876',
    title: { sr: 'Rat za nezavisnost', it: "La guerra d'indipendenza" },
    text: {
      sr: 'Srbija i Crna Gora objavljuju rat Osmanskom carstvu. Garibaldi i njegovi sledbenici pažljivo prate balkanske ustanike, a dobrovoljci iz Italije kreću na istok.',
      it: "Serbia e Montenegro dichiarano guerra all'Impero ottomano. Garibaldi e i suoi seguaci seguono da vicino gli insorti balcanici, e i volontari italiani partono verso est.",
    },
  },
  {
    when: '1876',
    title: { sr: 'Giuseppe Barbanti Brodano', it: 'Giuseppe Barbanti Brodano' },
    text: {
      sr: 'Jedan od imenom poznatih dobrovoljaca. U Srbiju je došao sa garibaldinskom legijom i ostavio zapise o Srbima i srpskom jeziku. Njegova priča je dobar početak za istraživanje ostalih imena.',
      it: 'Uno dei volontari di cui conosciamo il nome. Arrivò in Serbia con la legione garibaldina e lasciò scritti sui Serbi e sulla lingua serba. La sua storia è un buon punto di partenza per ritrovare gli altri nomi.',
    },
  },
  {
    when: '1876 – 1909',
    title: { sr: 'Lože pod italijanskom zaštitom', it: 'Logge sotto protezione italiana' },
    text: {
      sr: 'Posle „Svetlosti Balkana", Veliki Orijent Italije štitio je i druge beogradske lože: „Srbska zadruga", „Sloga, rad i postojanstvo" i „Ujedinjenje" (1909).',
      it: 'Dopo la «Luce dei Balcani», il Grande Oriente d’Italia protesse anche altre logge belgradesi: «Srbska zadruga», «Concordia, Lavoro e Costanza» e «Ujedinjenje», cioè «Unificazione» (1909).',
    },
  },
  {
    when: '2011 · 2015 · 2016',
    title: { sr: 'Nit koja se nije prekinula', it: 'Un filo mai spezzato' },
    text: {
      sr: 'Beograd je 2011. bio domaćin II svetskog kongresa Garibaldijevih loža. Godine 2015. loža iz Folonike (GOI) radila je zajedno sa beogradskom, a 2016. je Anita Garibaldi, praunuka Đuzepea Garibaldija, govorila na 140. godišnjici lože.',
      it: 'Nel 2011 Belgrado ha ospitato il II Congresso mondiale delle logge Garibaldi. Nel 2015 una loggia di Follonica (GOI) ha tenuto un lavoro congiunto con quella belgradese, e nel 2016 Annita Garibaldi, pronipote di Giuseppe, è intervenuta al 140° anniversario della loggia.',
    },
  },
]

export default function Garibaldini() {
  const t = useT()
  return (
    <section id="garibaldinci">
      <SectionHead
        kicker={{ sr: 'Četvrti zapis', it: 'Quarta tavola' }}
        title={{ sr: 'Garibaldinci u Srbiji', it: 'I Garibaldini in Serbia' }}
        lead={{
          sr: 'Italijani koji su došli da se bore, i ostavili ložu',
          it: 'Italiani venuti a combattere, che lasciarono una loggia',
        }}
      />
      <div className="garib">
        {cards.map((c) => (
          <div className="card" key={c.when}>
            <div className="y">{c.when}</div>
            <h4>{t(c.title)}</h4>
            <p>{t(c.text)}</p>
          </div>
        ))}
      </div>
      <p className="note">
        {t({
          sr: 'U Beogradu i danas postoji Garibaldijeva ulica.',
          it: 'A Belgrado esiste ancora oggi una Via Garibaldi (Garibaldijeva ulica).',
        })}
      </p>
    </section>
  )
}

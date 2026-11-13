import SectionHead from './SectionHead.jsx'
import { useLang, useT } from '../LangContext.jsx'

const paragraphs = {
  sr: [
    'Leto 1876. Srbija ulazi u rat protiv Osmanskog carstva, a sa svih strana Evrope stižu dobrovoljci. Među njima su i Italijani, Garibaldinci, ljudi koji su nekoliko godina ranije ujedinjavali sopstvenu zemlju i koji u srpskoj borbi vide istu ideju: slobodu naroda.',
    <>Iste jeseni, 16. oktobra 1876, u Beogradu je osnovana loža <em>„Svetlost Balkana"</em>, prva srpska loža. Prema predanju Regularne Velike lože Srbije, osnovali su je upravo Garibaldijevi dobrovoljci, a loža je radila pod zaštitom Velikog Orijenta Italije, čiji je veliki majstor tada bio sam Đuzepe Garibaldi.</>,
    'U njene redove ušla je intelektualna elita Srbije: profesori Velike škole, političari, lekari, slikari i kompozitori. Bili su to ljudi poput Mihajla Valtrovića, Svetomira Nikolajevića i Emilijana Josimovića, koji su želeli da Srbiju uvedu u moderni svet koji je dolazio.',
    <>Svetlost se kasnije gasila i palila. Ratovi, zabrane i decenije tišine su je gasili, a ponovo je zapalila jedna loža koja od 1991. nosi oba imena: <em>„Svetlost Balkana – Garibaldi"</em>.</>,
  ],
  it: [
    "Estate 1876. La Serbia entra in guerra contro l'Impero ottomano e da tutta Europa arrivano volontari. Tra loro ci sono gli Italiani, i Garibaldini: uomini che pochi anni prima avevano unito la propria patria e che nella lotta serba riconoscono la stessa idea, la libertà dei popoli.",
    <>Quello stesso autunno, il 16 ottobre 1876, a Belgrado viene fondata la loggia <em>«Svetlost Balkana»</em> («Luce dei Balcani»), la prima loggia serba. Secondo la tradizione della Gran Loggia Regolare di Serbia, furono proprio i volontari garibaldini a fondarla, e la loggia lavorò sotto la protezione del Grande Oriente d'Italia, il cui Gran Maestro era allora Giuseppe Garibaldi in persona.</>,
    'Nelle sue colonne entrò l’élite intellettuale serba: professori della Grande Scuola, politici, medici, pittori e compositori. Erano uomini come Mihajlo Valtrović, Svetomir Nikolajević ed Emilijan Josimović, che volevano portare la Serbia nel mondo moderno che stava arrivando.',
    <>Poi la luce si è spenta e riaccesa più volte, attraverso guerre, divieti e decenni di silenzio. L'ha riaccesa una loggia che dal 1991 porta entrambi i nomi: <em>«Svetlost Balkana – Garibaldi»</em>.</>,
  ],
}

export default function Story() {
  const { lang } = useLang()
  const t = useT()
  return (
    <section id="prica">
      <SectionHead
        kicker={{ sr: 'Prvi zapis', it: 'Prima tavola' }}
        title={{ sr: 'Garibaldi i Svetlost Balkana', it: 'Garibaldi e la Luce dei Balcani' }}
        lead={{
          sr: 'Kako je prva srpska loža rođena pod italijanskom zaštitom',
          it: 'Come la prima loggia serba nacque sotto la protezione italiana',
        }}
      />
      <div className="prose">
        {paragraphs[lang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="quote">
          {t({ sr: '„Rođenjem sam Nemac, a izborom Srbin."', it: '«Tedesco di nascita, serbo per scelta.»' })}
          <small>
            {t({
              sr: 'Đorđe Vajfert, prvi veliki majstor Velike lože SHS, prema predanju',
              it: 'Đorđe Vajfert, primo Gran Maestro della Gran Loggia SHS, secondo la tradizione',
            })}
          </small>
        </div>
      </div>
      <div className="cta-wrap">
        <a className="cta" href="#mapa">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            <path d="M12 8l2 4-2 4-2-4z" fill="currentColor" />
          </svg>
          {t({ sr: 'Uđi u mapu', it: 'Entra nella mappa' })}
        </a>
      </div>
    </section>
  )
}

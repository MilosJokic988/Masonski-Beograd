import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import SectionHead from './SectionHead.jsx'
import { places } from '../data/places.js'
import { useT, useLang } from '../LangContext.jsx'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
const CENTER = [44.8165, 20.462]

function pinIcon(n, type, active) {
  return L.divIcon({
    className: '',
    html: `<div class="mpin ${type} ${active ? 'active' : ''}"><span>${n}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  })
}

// pomera mapu na izabranu tačku
function FlyTo({ place }) {
  const map = useMap()
  useEffect(() => {
    if (!place) return
    const far = place.id === 'avala'
    map.flyTo([place.lat, place.lng], far ? 13 : 16, { duration: 1.4 })
  }, [place, map])
  return null
}

export default function MapSection() {
  const t = useT()
  const { lang } = useLang()
  const [active, setActive] = useState(null)
  const place = active !== null ? places[active] : null

  // isprekidane "ley linije" između tačaka u gradu (bez Avale)
  const line = useMemo(() => places.filter((p) => p.id !== 'avala').map((p) => [p.lat, p.lng]), [])

  const go = (d) => setActive((i) => ((i ?? 0) + d + places.length) % places.length)

  return (
    <section id="mapa" className="wide">
      <SectionHead
        kicker={{ sr: 'Drugi zapis', it: 'Seconda tavola' }}
        title={{ sr: 'Mapa skrivenih tragova', it: 'Mappa delle tracce nascoste' }}
        lead={{
          sr: 'Dodirnite znak na mapi da biste otkrili priču mesta',
          it: 'Tocca un segno sulla mappa per svelare la storia del luogo',
        }}
      />

      <div className="mapgrid">
        <div>
          <div className="mapbox">
            <MapContainer center={CENTER} zoom={14} scrollWheelZoom={false} className="leaflet-map">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={19}
              />
              <Polyline positions={line} pathOptions={{ color: '#c9a45c', weight: 1, opacity: 0.45, dashArray: '2 8' }} />
              {places.map((p, i) => (
                <Marker
                  key={p.id}
                  position={[p.lat, p.lng]}
                  icon={pinIcon(i + 1, p.type, i === active)}
                  eventHandlers={{ click: () => setActive(i) }}
                />
              ))}
              <FlyTo place={place} />
            </MapContainer>
          </div>
          <div className="legend">
            <span className="l1">{t({ sr: 'istorijsko mesto', it: 'luogo storico' })}</span>
            <span className="l2">{t({ sr: 'simboli na fasadi', it: 'simboli sulla facciata' })}</span>
          </div>
        </div>

        <div className="panel">
          {!place ? (
            <div className="empty">
              <p>{t({ sr: `Izaberite jedan od ${places.length} znakova.`, it: `Scegli uno dei ${places.length} segni.` })}</p>
              <button className="start" onClick={() => setActive(0)}>
                {t({ sr: 'ZAPOČNI ŠETNJU →', it: 'INIZIA LA PASSEGGIATA →' })}
              </button>
            </div>
          ) : (
            <div key={place.id + lang} className="panel-in">
              <div className="num">
                {ROMAN[active]} / {ROMAN[places.length - 1]}
              </div>
              <h3>{t(place.name)}</h3>
              <div className="addr">{t(place.address)}</div>
              <div className="tag">
                {place.type === 'history'
                  ? t({ sr: 'ISTORIJSKO MESTO', it: 'LUOGO STORICO' })
                  : t({ sr: 'SIMBOLI NA FASADI', it: 'SIMBOLI SULLA FACCIATA' })}
              </div>
              {t(place.text).map((x, k) => (
                <p key={k}>{x}</p>
              ))}
              <div className="nav">
                <button onClick={() => go(-1)}>← {t({ sr: 'PRETHODNO', it: 'PRECEDENTE' })}</button>
                <button onClick={() => go(1)}>{t({ sr: 'SLEDEĆE', it: 'SUCCESSIVO' })} →</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

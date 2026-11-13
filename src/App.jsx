import { useEffect } from 'react'
import { LangProvider } from './LangContext.jsx'
import LangToggle from './components/LangToggle.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import MapSection from './components/MapSection.jsx'
import Timeline from './components/Timeline.jsx'
import Garibaldini from './components/Garibaldini.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // "candle light" that follows the cursor
  useEffect(() => {
    const glow = document.getElementById('glow')
    const move = (e) => {
      glow.style.setProperty('--x', e.clientX + 'px')
      glow.style.setProperty('--y', e.clientY + 'px')
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <LangProvider>
      <div id="glow" />
      <LangToggle />
      <main>
        <Hero />
        <Story />
        <MapSection />
        <Timeline />
        <Garibaldini />
      </main>
      <Footer />
    </LangProvider>
  )
}

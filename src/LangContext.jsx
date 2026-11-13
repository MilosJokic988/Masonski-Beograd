import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'sr', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('mb-lang') || 'sr'
    } catch {
      return 'sr'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('mb-lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

/** Pick the right language from an object like { sr: '...', it: '...' } */
export function useT() {
  const { lang } = useLang()
  return (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.sr : obj)
}

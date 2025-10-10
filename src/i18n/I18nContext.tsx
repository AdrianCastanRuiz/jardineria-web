import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import ca from './ca.json'
import es from './es.json'

export type Lang = 'ca' | 'es'
type Dict = Record<string, string>

interface ITranslationService {
  t: (key: string) => string
  lang: Lang
  setLang: (l: Lang) => void
  available: Lang[]
}

const dicts: Record<Lang, Dict> = { ca, es }

const STORAGE_KEY = 'vv_lang'

const I18nContext = createContext<ITranslationService | null>(null)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem(STORAGE_KEY) as Lang) || 'ca')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: string) => {
    const value = dicts[lang][key] ?? dicts['ca'][key] ?? key
    return value
  }

  const value = useMemo(() => ({
    t, lang, setLang, available: ['ca', 'es'] as Lang[]
  }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

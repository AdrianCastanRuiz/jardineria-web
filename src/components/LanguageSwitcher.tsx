import React from 'react'
import { useI18n, Lang } from '@i18n/I18nContext'
import s from '@styles/LanguageSwitcher.module.css'

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang, t } = useI18n()
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLang(e.target.value as Lang)
  return (
    <div className={s.root} aria-label={t('switch.lang')}>
      <select className={s.select} value={lang} onChange={onChange} aria-label={t('switch.lang')}>
        <option value="ca">{t('lang.ca')}</option>
        <option value="es">{t('lang.es')}</option>
      </select>
    </div>
  )
}

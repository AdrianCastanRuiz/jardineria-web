import React from 'react'
import { useI18n, Lang } from '@i18n/I18nContext'
import s from '@styles/LanguageSwitcher.module.css'
import esFlag from '../assets/icons/esflag.webp'
import catFlag from '../assets/icons/catflag.jpg'

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang, t } = useI18n()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Lang)
  }

  const flag = lang === 'ca' ? catFlag : esFlag

  return (
    <div className={s.root} aria-label={t('switch.lang')}>
      <img className={s.flag} src={flag} alt={lang === 'ca' ? 'Català' : 'Español'} />
      <select
        className={s.select}
        value={lang}
        onChange={onChange}
        aria-label={t('switch.lang')}
      >
        <option className={s.option} value="ca">{t('lang.ca')}</option>
        <option className={s.option} value="es">{t('lang.es')}</option>
      </select>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import s from '@styles/Services.module.css'
import { useI18n } from '@i18n/I18nContext'
import leaf2 from '@assets/leaf_2.svg'
import leaf3 from '@assets/leaf_3.svg'
import leaf4 from '@assets/leaf_4.svg'

interface Service {
  icon: string
  titleKey: string
  descKey: string
  path: string
}

const SERVICES: Service[] = [
  { icon: leaf2, titleKey: 'services.1.title', descKey: 'services.1.desc', path: '/serveis/poda-tala' },
  { icon: leaf3, titleKey: 'services.2.title', descKey: 'services.2.desc', path: '/serveis/manteniment' },
  { icon: leaf4, titleKey: 'services.3.title', descKey: 'services.3.desc', path: '/serveis/diseny' },
]

export const Services: React.FC = () => {
  const { t } = useI18n()
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">{t('services.title')}</h2>
        <div className={`grid ${s.grid}`}>
          {SERVICES.map((svi) => (
            <Link
              key={svi.titleKey}
              to={svi.path}
              className={s.cardLink} // ver CSS abajo
              aria-label={t(svi.titleKey)}
            >
              <article className={s.item}>
                <img src={svi.icon} width={64} height={48} alt="" aria-hidden />
                <h3>{t(svi.titleKey)}</h3>
                <p>{t(svi.descKey)}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import s from '@styles/Testimonials.module.css'
import { useI18n } from '@i18n/I18nContext'

export const Testimonials: React.FC = () => {
  const { t } = useI18n()
  const items = [t('testimonial.1'), t('testimonial.2')]
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title">{t('testimonials.title')}</h2>
        <div className={`grid ${s.list}`}>
          {items.map((quote, i) => (
            <blockquote key={i} className={s.item}>
              <p>“{quote}”</p>
              <div className={s.who}>— {i === 0 ? 'Marta G.' : 'Joan P.'}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import s from '@styles/Gallery.module.css'
import { useI18n } from '@i18n/I18nContext'
import img1 from '@assets/leaf_1.svg'
import img2 from '@assets/leaf_2.svg'
import img3 from '@assets/leaf_3.svg'
import img4 from '@assets/leaf_4.svg'
import img5 from '@assets/leaf_5.svg'
import img6 from '@assets/leaf_6.svg'

const images = [img1, img2, img3, img4, img5, img6]

export const Gallery: React.FC = () => {
  const { t } = useI18n()
  return (
    <section className="section" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title">{t('gallery.title')}</h2>
        <div className={`grid ${s.grid}`}>
          {images.map((src, i) => (
            <div className={s.img} key={i}>
              <img loading="lazy" src={src} alt={`treball ${i+1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

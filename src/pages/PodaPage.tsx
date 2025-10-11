import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import s from '@styles/pages/PodaPage.module.css'
import poda1 from '@assets/poda-tala/poda1.jpg'
import poda2 from '@assets/poda-tala/poda2.jpg'
import poda3 from '@assets/poda-tala/poda3.jpg'
import poda4 from '@assets/poda-tala/poda4.jpg'
import poda5 from '@assets/poda-tala/poda5.jpg'
import poda6 from '@assets/poda-tala/poda6.jpg'
import poda7 from '@assets/poda-tala/poda7.jpg'
import GalleryGrid from '@components/GalleryGrid'

const PodaPage: React.FC = () => {
  

  return (
    <section className={`section ${s.root}`}>
      <div className="container">
        {/* breadcrumb / tornar */}
        <nav className={s.breadcrumb}>
          <Link to="/#services">← Serveis</Link>
        </nav>

        <div className={`grid ${s.layout}`}>
          {/* Columna text */}
          <div className={s.content}>
            <div className="chip">Manteniment, disseny i cura de jardins</div>
            <h1 className={s.title}>Poda i tala d’arbres</h1>
            <p className={s.lede}>
              Poda segura i tala controlada amb personal qualificat. Treballs en alçada, sanejament de capçades i retirada de restes amb neteja completa. Pressupost sense compromís.
            </p>

            <div className="grid">
              <article className={`card ${s.card}`}>
                <h3 className={s.h3}>Beneficis</h3>
                <ul className={s.list}>
                  <li>Tècniques de poda adequades a cada espècie</li>
                  <li>Treballs en alçada amb equips homologats</li>
                  <li>Gestió de residus i neteja de la zona</li>
                  <li>Intervencions ràpides i segures</li>
                </ul>
              </article>

              <article className={`card ${s.card}`}>
                <h3 className={s.h3}>Procés</h3>
                <ol className={s.listOrdered}>
                  <li>Inspecció i diagnòstic de l’arbre</li>
                  <li>Pla de treball i mesures de seguretat</li>
                  <li>Execució, retirada i neteja</li>
                  <li>Recomanacions de manteniment</li>
                </ol>
              </article>

              <div className={s.actions}>
                <a href="/#contact" className="btn" aria-label="Sol·licitar pressupost">
                  Sol·licitar pressupost
                </a>
                <span className="chip">ISO • Eco</span>
                <span className="chip">+10 anys</span>
              </div>
            </div>
          </div>

          {/* Columna imatge + FAQ */}
          <aside className={s.aside}>
            <figure className={`card ${s.imgCard}`}>
              <img src={poda1} alt="Poda i tala en alçada" className={s.image} />
            </figure>

            <div className={`card ${s.faq}`}>
              <h3 className={s.h3}>Preguntes freqüents</h3>

              <details className={s.details}>
                <summary>Necessito permís de l’ajuntament?</summary>
                <p className={s.answer}>
                  Pot ser necessari segons la normativa municipal i l’espècie. T’assessorem i, si cal, t’ajudem amb el tràmit.
                </p>
              </details>

              <details className={s.details}>
                <summary>Què feu amb les restes?</summary>
                <p className={s.answer}>
                  Triturem i retirem les restes per a la seva gestió adequada. També les podem deixar com a encoixinat si ho prefereixes.
                </p>
              </details>
            </div>
          </aside>
        </div>

        {/* --- Galeria al final de la pàgina (reutilizable) --- */}
        <section className={s.gallerySection} aria-labelledby="poda-gallery-title">
          <h2 id="poda-gallery-title" className={s.galleryTitle}>Galeria de treballs</h2>
          <GalleryGrid
            images={[
              { src: poda2, alt: 'Treballs de poda 2' },
              { src: poda3, alt: 'Treballs de poda 3' },
              { src: poda4, alt: 'Treballs de poda 4' },
              { src: poda5, alt: 'Treballs de poda 5' },
              { src: poda6, alt: 'Treballs de poda 6' },
              { src: poda7, alt: 'Treballs de poda 7' },
            ]}
            cols={3}
            colsMd={2}
            colsSm={1}
            aspectRatio="3 / 2"
          />
        </section>
      </div>
    </section>
  )
}

export default PodaPage

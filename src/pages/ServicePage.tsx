import { Contact } from "@components/Contact";
import GalleryGrid from "@components/GalleryGrid";
import { useI18n } from "@i18n/I18nContext";
import s from "../styles/pages/ServicePage.module.css";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";



interface ServicePageProps {
  service: string;
  images: { src: string; alt: string }[];
}

const ServicePage = ({ service, images }: ServicePageProps) => {
  const { t } = useI18n();
  const [popUp, setPopUp] = useState<boolean>(false)
  const ctx = useContext(appContext)

  const closeForm = ()=>{
    setPopUp(false)
    ctx?.setPopUpForm(false)
  }

  useEffect(()=>{
    if(popUp){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  },[popUp])

  return (
    <>
      <section className={`section ${s.root}`}>
        <div className="container">
          {/* breadcrumb / tornar */ }
          <nav className={s.breadcrumb}>
            <Link onClick={
              (e:any)=>{
                if(popUp){
                  e.preventDefault()
                }
              }
            } to="/#services">← {t("nav.services")}</Link>
          </nav>

          <div className={`grid ${s.layout}`}>
            {/* Columna text */}
            <div className={s.content}>
              <div className="chip">{t("services.h2")}</div>
              <h1 className={s.title}>{t(`services${service}.title`)}</h1>
              <p className={s.lede}>
                {t(`services${service}.desc2`)}
              </p>

              <div className="grid">
                <article className={`card ${s.card}`}>
                  <h3 className={s.h3}>{t(`services${service}.benefits`)}</h3>
                  <ul className={s.list}>
                    <li>{t(`services${service}.benefits2`)}</li>
                    <li>{t(`services${service}.benefits3`)}</li>
                    <li>{t(`services${service}.benefits4`)}</li>
                    <li>{t(`services${service}.benefits5`)}</li>
                  </ul>
                </article>

                <article className={`card ${s.card}`}>
                  <h3 className={s.h3}>{t(`services${service}.process`)}</h3>
                  <ol className={s.listOrdered}>
                    <li>{t(`services${service}.process2`)}</li>
                    <li>{t(`services${service}.process3`)}</li>
                    <li>{t(`services${service}.process4`)}</li>
                    <li>{t(`services${service}.process5`)}</li>
                  </ol>
                </article>

                <div className={s.actions}>
                  <a
                    onClick={(e) => {
                      e.stopPropagation()
                      setPopUp(true)
                      ctx?.setPopUpForm(true)

                    }}
                    className="btn"
                    aria-label="Sol·licitar pressupost"
                  >
                    {t(`cta.contact`)}
                  </a>
                  <span className="chip">ISO • Eco</span>
                  <span className="chip">+10 {t("years")}</span>
                </div>
              </div>
            </div>

            {/* Columna imatge + FAQ */}
            <aside className={s.aside}>
              <figure className={`card ${s.imgCard}`}>
                <img
                  src={images[0].src}
                  alt="Poda i tala en alçada"
                  className={s.image}
                />
              </figure>

              <div className={`card ${s.faq}`}>
                <h3 className={s.h3}>{t("faq")}</h3>

                <details className={s.details}>
                  <summary>{t(`services${service}.faq1`)}</summary>
                  <p className={s.answer}>
                    {t(`services${service}.answer1`)}
                  </p>
                </details>

                <details className={s.details}>
                  <summary>{t(`services${service}.faq2`)}</summary>
                  <p className={s.answer}>
                    {t(`services${service}.answer2`)}
                  </p>
                </details>
              </div>
            </aside>
          </div>

          {/* --- Galeria al final de la pàgina (reutilizable) --- */}
          <section
            className={s.gallerySection}
            aria-labelledby="poda-gallery-title"
          >
            <h2 id="poda-gallery-title" className={s.galleryTitle}>
              {t("workGallery")}
            </h2>
            <GalleryGrid
              images={images}
              cols={3}
              colsMd={2}
              colsSm={1}
              aspectRatio="3 / 2"
            />
          </section>
        </div>
      </section>
      {popUp && (
  <div
    className={s.modalBackdrop}
    onClick={closeForm}                // click fuera => cerrar
    role="dialog"
    aria-modal="true"
  >
    <div
      className={s.modalContent}
      onClick={(e) => e.stopPropagation()} // click dentro => no cerrar
    >
      <Contact />
    </div>
  </div>
)}
    </>

  );
};

export default ServicePage;

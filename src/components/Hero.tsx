import React, { useEffect, useMemo, useState } from "react";
import s from "@styles/Hero.module.css";
import { useI18n } from "@i18n/I18nContext";
import leaf1 from "@assets/leaf_1.svg";
import jardin3 from "@assets/mantenimiento/jardin3.png";
import jardin4 from "@assets/mantenimiento/jardin4.jpg";
import antes from "@assets/poda-tala/antes.jpeg";
import despues from "@assets/poda-tala/despues.jpeg";
import fb from "@assets/icons/fb.png";
import ig from "@assets/icons/ig.png";

export const Hero: React.FC = () => {
  const { t } = useI18n();

  // Array de imágenes a rotar
  const photos = useMemo(() => [antes, despues, jardin3, jardin4], []);

  // Índice actual
  const [idx, setIdx] = useState(0);

  // Cambio de imagen cada 2s
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx((i) => (i + 1) % photos.length);
    }, 3000);
    return () => clearInterval(iv);
  }, [photos.length]);

  // Preload para evitar parpadeos
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  return (
    <section className={`section ${s.root}`} aria-labelledby="hero-title">
      <div className={`container ${s.wrap}`}>
        <div>
          <div className="chip">{t("tagline")}</div>
          <h1 id="hero-title" className={s.title}>
            {t("hero.title")}
          </h1>
          <p className={s.subtitle}>{t("hero.subtitle")}</p>
          <div className={s.bullets}>
            <span className="chip">ISO • Eco</span>
            <span className="chip">+10 anys</span>
            <span className="chip">360º</span>
          </div>
          <a href="#contact" className="btn" aria-label={t("cta.contact")}>
            {t("cta.contact")}
          </a>
          <div className={s.stats}>
            <div className={s.stat}>
              <strong>250+</strong>
              <small>Projectes</small>
            </div>
            <div className={s.stat}>
              <strong>98%</strong>
              <small>NPS</small>
            </div>
            <div className={s.stat}>
              <strong>24h</strong>
              <small>{t("answer")}</small>
            </div>
          </div>
        </div>

        <div className={s.heroImgDiv} aria-live="polite">
          <img
            key={photos[idx]} // fuerza re-render para transiciones CSS si las añades
            src={photos[idx]}
            alt={`Jardineria — imatge ${idx + 1} de ${photos.length}`}
            className={`${s.heroImg} ${s[`img-${idx + 1}`]}`}
          />
        </div>
      </div>
    </section>
  );
};

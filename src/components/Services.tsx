import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import s from "@styles/Services.module.css";
import { useI18n } from "@i18n/I18nContext";

import SERVICES from "../constants/services";

export const Services: React.FC = () => {
  const { t } = useI18n();

  // Guardamos refs de cada card (el <Link>)
  const cardRefs = useRef<HTMLAnchorElement[]>([]);
  const setCardRef = (el: HTMLAnchorElement | null) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Sin animaciones: marcamos como reveladas
      cardRefs.current.forEach((el) => el.classList.add(s.reveal));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // “Stagger”: retardo según el índice
            const index = Number(el.getAttribute("data-index") || "0");
            el.style.setProperty("--delay", `${index * 90}ms`);
            el.classList.add(s.reveal);
            obs.unobserve(entry.target); // solo una vez
          }
        });
      },
      {
        root: null,
        // Dispara un poco antes del borde inferior para que “entren” suave
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">{t("services.title")}</h2>

        {/* 👇 arreglado el template literal de className */}
        <div className={`grid ${s.grid}`}>
          {SERVICES.map((svi, i) => (
            <Link
              key={svi.titleKey}
              to={svi.path}
              ref={setCardRef}
              data-index={i}
              className={`${s.cardLink} ${s.revealBase}`} // base para animación
              aria-label={t(svi.titleKey)}
            >
              <article className={s.item}>
                <img src={svi.img} alt="" aria-hidden="true" />
                <h3>{t(svi.titleKey)}</h3>
                <p>{t(svi.descKey)}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

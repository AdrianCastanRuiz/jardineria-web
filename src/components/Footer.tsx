import React from "react";
import s from "@styles/Footer.module.css";
import { useI18n } from "@i18n/I18nContext";
import fb from "@assets/icons/fb.png";
import ig from "@assets/icons/ig.png";

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className={s.root}>
      <div className={`container ${s.inner}`}>
        <div className={s.copy}>
          © {year} {t("brand")} · {t("footer.rights")}
        </div>

        <nav className={s.anchorsDiv} aria-label={t("footer.navLabel") ?? "Footer navigation"}>
          <div className={s.headersLinksDiv}>
            <a className={s.link} href="/#services">
              {t("nav.services")}
            </a>
            <a className={s.link} href="/#home-gallery">
              {t("nav.gallery")}
            </a>
            <a className={s.link} href="/#contact">
              {t("nav.contact")}
            </a>
          </div>

          {/* Redes sociales */}
          <div className={s.socialDiv} aria-label={t("footer.socialLabel") ?? "Social links"}>
            <a
              className={s.social}
              href="https://www.instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <img src={ig} alt="" aria-hidden="true" />
              <span className={s.srOnly}>Instagram</span>
            </a>

            <a
              className={s.social}
              href="https://www.facebook.com/tu_pagina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <img src={fb} alt="" aria-hidden="true" />
              <span className={s.srOnly}>Facebook</span>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

import React from "react";
import s from "@styles/Footer.module.css";
import { useI18n } from "@i18n/I18nContext";
import fb from "@assets/icons/fb.png";
import ig from "@assets/icons/ig.png";

export const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className={s.root}>
      <div className={`container ${s.inner}`}>
        <div>
          © {new Date().getFullYear()} {t("brand")} · {t("footer.rights")}
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#services">· {t("nav.services")}</a>
          <a href="#gallery">· {t("nav.gallery")}</a>
          <a href="#contact">· {t("nav.contact")}</a>

          {/* Redes sociales */}
          <span className={s.dot} aria-hidden>
            ·
          </span>

          <a
            className={s.social}
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <img src={ig}  alt="instagram icon" aria-hidden />
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
            <img src={fb} alt="facebook icon" aria-hidden />
            <span className={s.srOnly}>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

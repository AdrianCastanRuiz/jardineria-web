// SocialIcons.tsx / .jsx
import fb from "@assets/icons/fb.png";
import ig from "@assets/icons/ig.png";
import s from "@styles/SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <nav aria-label="Redes sociales" className={s.container}>
      <ul className={s.group}>
        <li>
          <a
            className={s.socialBtn}
            data-brand="instagram"
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <img className={s.icon} src={ig} alt="" />
          </a>
        </li>
        <li>
          <a
            className={s.socialBtn}
            data-brand="facebook"
            href="https://www.facebook.com/tu_pagina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <img className={s.icon} src={fb} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialIcons;

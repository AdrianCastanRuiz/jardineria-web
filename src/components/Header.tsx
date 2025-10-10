import React, { useEffect, useRef, useState } from 'react'
import s from '@styles/Header.module.css'
import { useI18n } from '@i18n/I18nContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export const Header: React.FC = () => {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement | null>(null)

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Cerrar al clicar fuera del panel
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const closeAndGo = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(hash)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`sticky ${s.root}`}>
      <div className={`container ${s.inner}`}>
        <a className={s.brand} href="#">
          <span className={s.brandLogo}>V</span>
          <span>{t('brand')}</span>
        </a>

        {/* Nav desktop */}
        <nav className={s.nav} aria-label="primary">
          <a className={s.link} href="#services">{t('nav.services')}</a>
          <a className={s.link} href="#gallery">{t('nav.gallery')}</a>
          <a className={s.link} href="#testimonials">{t('nav.testimonials')}</a>
          <a className={s.link} href="#contact">{t('nav.contact')}</a>
        </nav>

        <div className={s.spacer} />

        {/* Idioma siempre visible */}
        <div className={s.lang}>
          <LanguageSwitcher />
        </div>

        {/* Botón menú móvil */}
        <button
          className={`btn ${s.menu}`}
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label="menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Overlay + Sheet móviles */}
      <div className={`${s.mobileNav} ${open ? s.open : ''}`} aria-hidden={!open}>
        <div className={s.backdrop} onClick={() => setOpen(false)} />
        <div className={s.sheet} id="mobile-nav" ref={sheetRef} role="dialog" aria-modal="true" aria-label="Navegació mòbil">
          <nav className={s.sheetLinks} aria-label="mobile">
            <a className={s.mlink} href="#services" onClick={closeAndGo('#services')}>{t('nav.services')}</a>
            <a className={s.mlink} href="#gallery" onClick={closeAndGo('#gallery')}>{t('nav.gallery')}</a>
            <a className={s.mlink} href="#testimonials" onClick={closeAndGo('#testimonials')}>{t('nav.testimonials')}</a>
            <a className={s.mlink} href="#contact" onClick={closeAndGo('#contact')}>{t('nav.contact')}</a>
          </nav>
          <div className={s.sheetFooter}>
            <LanguageSwitcher />
            <button className={s.closeGhost} onClick={() => setOpen(false)} aria-label="Tancar">✕</button>
          </div>
        </div>
      </div>
    </header>
  )
}

// Header.tsx
import React, { useEffect, useRef, useState } from 'react'
import s from '@styles/Header.module.css'
import { useI18n } from '@i18n/I18nContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Link } from 'react-router-dom'
import { appContext } from '../App'
import { useContext } from 'react'


export const Header: React.FC = () => {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement | null>(null)
  const ctx = useContext(appContext)

  const handleLinkClick = (e: any) => {
 
    ctx?.setScroll(!ctx?.scroll)
    setOpen(false)
  }

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Cerrar al clicar fuera
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  // Maneja anclas cuando ya estás en la misma URL (#hash incluido)
  // const handleAnchorClick = (targetHash: string, closeAfter = false) =>
  //   (e: React.MouseEvent<HTMLAnchorElement>) => {
  //     const samePath = pathname === '/' // destino es Home en estos enlaces
  //     const sameHash = hash === targetHash
  //     if (samePath && sameHash) {
  //       e.preventDefault()
  //       // const id = targetHash.slice(1)
  //       requestAnimationFrame(() => {
  //         document.getElementById(targetHash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //       })
  //     }
  //     if (closeAfter) setOpen(false)
  //   }

  return (
    <header className={`sticky ${s.root}`}>
      <div className={`container ${s.inner}`}>
        <Link
          className={s.brand} to="/">
          <span className={s.brandLogo}>V</span>
          <span>AgreenJardineria</span>
        </Link>

        {/* Nav desktop */}
        <nav className={s.nav} aria-label="primary">
          <Link className={s.link} onClick={handleLinkClick} to="/#services" >
            {t('nav.services')}
          </Link>
          <Link className={s.link} onClick={handleLinkClick} to="/#home-gallery">
            {t('nav.gallery')}
          </Link>
          <Link className={s.link} onClick={handleLinkClick} to="/#testimonials">
            {t('nav.testimonials')}
          </Link>
          <Link className={s.link} onClick={handleLinkClick} to="/#contact" >
            {t('nav.contact')}
          </Link>
        </nav>

        <div className={s.spacer} />

        <div className={s.lang}><LanguageSwitcher /></div>

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
            <Link className={s.mlink} onClick={handleLinkClick} to="/#services">
              {t('nav.services')}
            </Link>
            <Link className={s.mlink} onClick={handleLinkClick} to="/#home-gallery">
              {t('nav.gallery')}
            </Link>
            <Link className={s.mlink} onClick={handleLinkClick} to="/#testimonials" >
              {t('nav.testimonials')}
            </Link>
            <Link className={s.mlink} onClick={handleLinkClick} to="/#contact" >
              {t('nav.contact')}
            </Link>
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

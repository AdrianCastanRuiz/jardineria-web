import React, { useEffect, useRef } from 'react'
import s from '@styles/GalleryGrid.module.css'

export interface GalleryImage {
  src: string
  alt?: string
  caption?: string
}

type CSSVars = React.CSSProperties & Record<string, string | number>

interface GalleryGridProps {
  images: GalleryImage[]
  cols?: number       // desktop
  colsMd?: number     // <= 900px
  colsSm?: number     // <= 560px
  gap?: number        // px
  aspectRatio?: string // ej: "3 / 2", "4 / 3", "16 / 9"
  className?: string
  itemClassName?: string
  padding?: string
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  cols = 3,
  colsMd = 2,
  colsSm = 1,
  gap = 10,
  aspectRatio = '1 / 1',
  className,
  padding = '0',
}) => {
  const styleVars: CSSVars = {
    '--cols': String(cols),
    '--cols-md': String(colsMd),
    '--cols-sm': String(colsSm),
    '--gap': `${gap}px`,
    '--aspect-ratio': aspectRatio,
    '--pad': padding,
  }

  // refs para observar cada imagen
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: sin IO, mostramos todo directamente
      imgRefs.current.forEach(el => el?.classList.add(s.in))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.in)
            obs.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '120px', // empieza a animar un poco antes de entrar
        threshold: 0.1,
      }
    )

    imgRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [images])

  return (
    <div className={`${s.root} ${className ?? ''}`} style={styleVars}>
      {images.map((img, i) => (
        <img
          key={img.src ?? i}
          ref={el => (imgRefs.current[i] = el)}
          className={`${s.img} ${s.fade}`}         // estado inicial oculto
          src={img.src}
          alt={img.alt ?? `Imatge ${i + 1}`}
          loading="lazy"
          decoding="async"
          style={{ transitionDelay: `${i * 60}ms` }} // pequeño “stagger”
        />
      ))}
    </div>
  )
}

export default GalleryGrid

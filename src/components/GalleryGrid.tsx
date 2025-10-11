import React from 'react'
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
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  cols = 3,
  colsMd = 2,
  colsSm = 1,
  gap = 10,
  aspectRatio = '1 / 1',
  className,
  itemClassName,
}) => {
  const styleVars: CSSVars = {
    '--cols': String(cols),
    '--cols-md': String(colsMd),
    '--cols-sm': String(colsSm),
    '--gap': `${gap}px`,
    '--aspect-ratio': aspectRatio,
  }

  return (
    <div className={`${s.root} ${className ?? ''}`} style={styleVars}>
      {images.map((img, i) => (
          <img
            className={s.img}
            src={img.src}
            alt={img.alt ?? `Imatge ${i + 1}`}
            loading="lazy"
            decoding="async"
          />
    
      ))}
    </div>
  )
}

export default GalleryGrid

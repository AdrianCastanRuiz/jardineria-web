import React, { useEffect, useRef, useState, useCallback } from "react";
import s from "@styles/GalleryGrid.module.css";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

type CSSVars = React.CSSProperties & Record<string, string | number>;

interface GalleryGridProps {
  images: GalleryImage[];
  cols?: number; // desktop
  colsMd?: number; // <= 900px
  colsSm?: number; // <= 560px
  gap?: number; // px
  aspectRatio?: string; // ej: "3 / 2", "4 / 3", "16 / 9"
  className?: string;
  itemClassName?: string;
  padding?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  cols = 3,
  colsMd = 2,
  colsSm = 1,
  gap = 10,
  aspectRatio = "1 / 1",
  className,
  itemClassName,
  padding = "0",
}) => {
  const styleVars: CSSVars = {
    "--cols": String(cols),
    "--cols-md": String(colsMd),
    "--cols-sm": String(colsSm),
    "--gap": `${gap}px`,
    "--aspect-ratio": aspectRatio,
    "--pad": padding,
  };

  // refs para observar cada imagen (reveal on view)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      imgRefs.current.forEach((el) => el?.classList.add(s.in));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.in);
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "120px", threshold: 0.1 }
    );

    imgRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  // --- Lightbox state ---
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // keyboard y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, close, next, prev]);

  // swipe básico para móvil
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <>
      <div className={`${s.root} ${className ?? ""}`} style={styleVars}>
        {images.map((img, i) => (
          <button
            key={img.src ?? i}
            className={`${s.item} ${itemClassName ?? ""}`}
            onClick={() => openAt(i)}
            aria-label={`Abrir imagen ${i + 1}`}
          >
            <img
              ref={(el) => (imgRefs.current[i] = el)}
              className={`${s.img} ${s.fade}`}
              src={img.src}
              alt={img.alt ?? `Imagen ${i + 1}`}
              loading="lazy"
              decoding="async"
              style={{ transitionDelay: `${i * 60}ms` }}
            />
            {img.caption && <span className={s.caption}>{img.caption}</span>}
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className={s.overlay}
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className={s.lightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              className={`${s.navBtn} ${s.prev}`}
              onClick={(e) => {
                prev();
                e.stopPropagation();
              }}
              aria-label="Anterior"
            >
              ‹
            </button>
            <img
              className={s.lightboxImg}
              src={images[index]?.src}
              alt={images[index]?.alt ?? `Imagen ampliada ${index + 1}`}
            />
            <button
              className={`${s.navBtn} ${s.next}`}
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              ›
            </button>

            <button className={s.closeBtn} onClick={close} aria-label="Cerrar">
              ×
            </button>
            {images[index]?.caption && (
              <div className={s.lbCaption}>{images[index].caption}</div>
            )}
            <div className={s.counter}>
              {index + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;

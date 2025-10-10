import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const HashScroller: React.FC = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)

    // intenta inmediatamente, y si aún no existe (por cambio de ruta), reintenta unos frames
    let raf = 0
    let tries = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (tries < 10) {
        tries += 1
        raf = requestAnimationFrame(tryScroll)
      }
    }
    tryScroll()
    return () => cancelAnimationFrame(raf)
  }, [hash, pathname])

  return null
}

export default HashScroller
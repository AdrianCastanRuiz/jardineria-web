import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  /** ID del contenedor que scrollea (por defecto #main). Si no existe, usa window/document. */
  targetId?: string
  /** Si true, no hace scroll-to-top cuando hay #hash en la URL. */
  ignoreHash?: boolean
  /** Fuerza desactivar smooth temporalmente para evitar “peleas” con CSS. */
  forceAutoDuringJump?: boolean
}

const ScrollToTop: React.FC<Props> = ({
  targetId = 'main',
  ignoreHash = true,
  forceAutoDuringJump = true,
}) => {
  const { pathname, search, hash } = useLocation()

  useLayoutEffect(() => {
    if (ignoreHash && hash) return

    const html = document.documentElement
    const prev = html.style.scrollBehavior
    if (forceAutoDuringJump) html.style.scrollBehavior = 'auto'

    requestAnimationFrame(() => {
      const scroller =
        (targetId ? document.getElementById(targetId) : null) ??
        document.scrollingElement ??
        document.documentElement

      scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      if (forceAutoDuringJump) html.style.scrollBehavior = prev
    })
  }, [pathname, search, hash, targetId, ignoreHash, forceAutoDuringJump])

  return null
}

export default ScrollToTop

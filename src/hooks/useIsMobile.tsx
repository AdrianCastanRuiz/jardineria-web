import { useEffect, useState } from "react";

const useIsMobile = (breakPoint = 768)=>{

    const [isMobile, setIsMobile] = useState(
        window.matchMedia(`(max-width: ${breakPoint}px)`).matches
    )

    useEffect(()=>{

        const media = window.matchMedia(`(max-width: ${breakPoint}px)`)

        const handler = () => setIsMobile(media.matches)
        media.addEventListener("change", handler)

        return ()=> media.removeEventListener("change", handler)

    },[breakPoint])

    return isMobile
}

export default useIsMobile;
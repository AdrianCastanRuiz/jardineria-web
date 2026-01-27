import ServicePage from "./ServicePage"
import limpieza1 from "../assets/limpieza/limpieza1.jpg"
import limpieza2 from "../assets/limpieza/limpieza2.jpg"
import limpieza3 from "../assets/limpieza/limpieza3.jpeg"
import limpieza4 from "../assets/limpieza/limpieza4.jpg"
import limpieza5 from "../assets/limpieza/limpieza5.jpg"
import limpieza6 from "../assets/limpieza/limpieza6.jpg"




const LimpiezaPage = () => {
    return (
        <>
            <ServicePage
                images={[
                    { src: limpieza1, alt: "Imagen limpieza" },
                    { src: limpieza2, alt: "Imagen limpieza" },
                    { src: limpieza3, alt: "Imagen limpieza" },
                    { src: limpieza4, alt: "Imagen limpieza" },
                    { src: limpieza5, alt: "Imagen limpieza" },
                    { src: limpieza6, alt: "Imagen limpieza" },
                ]}
                service="3"
            />
        </>
    )
}

export default LimpiezaPage
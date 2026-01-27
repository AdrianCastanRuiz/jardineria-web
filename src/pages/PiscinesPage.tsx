import ServicePage from "./ServicePage";
import piscina1 from "@assets/picinas/picina1.jpg"
import piscina2 from "@assets/picinas/picina2.jpg"
import piscina3 from "@assets/picinas/picina3.jpg"
import piscina4 from "@assets/picinas/picina4.jpg"
import piscina5 from "@assets/picinas/picina5.jpg"
import piscina6 from "@assets/picinas/picina6.jpg"


const PiscinesPage = ()=>{
return (
    <ServicePage
      images={[
        { src: piscina1, alt: "Imagen piscina" },
        { src: piscina2, alt: "Imagen piscina" },
        { src: piscina3, alt: "Imagen piscina" },
        { src: piscina4, alt: "Imagen piscina" },
        { src: piscina5, alt: "Imagen piscina" },
        { src: piscina6, alt: "Imagen piscina" },
      ]}
      service="5"
    />
  );
}

export default PiscinesPage
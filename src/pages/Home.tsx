// Home.tsx
import { Hero } from "@components/Hero";
import { Services } from "@components/Services";
import { Testimonials } from "@components/Testimonials";
import { Contact } from "@components/Contact";
import GalleryGrid from "@components/GalleryGrid";
import jardin1 from "@assets/mantenimiento/jardin1.png"
import jardin2 from "@assets/mantenimiento/jardin2.jpg"
import jardin3 from "@assets/mantenimiento/jardin3.png"
import jardin4 from "@assets/mantenimiento/jardin4.jpg"
import riego from "@assets/mantenimiento/riego.png"
import poda1 from "@assets/poda-tala/poda1.jpg"

const Home: React.FC = () => {

    const images = [{src: jardin1},{src: jardin2},{src: jardin3},{src: jardin4},{src:riego},{src: poda1}]
    return (
        <>
            <Hero />
            <Services />
            <div id="home-gallery">
            <GalleryGrid gap={30} cols={2} padding={"5rem"} images={images} />
            </div>
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home;

// Home.tsx
import { Hero } from "@components/Hero";
import { Gallery } from "@components/Gallery";
import { Services } from "@components/Services";
import { Testimonials } from "@components/Testimonials";
import { Contact } from "@components/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home;

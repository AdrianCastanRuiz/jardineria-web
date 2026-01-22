// Home.tsx
import { Hero } from "@components/Hero";
import { Services } from "@components/Services";
import { Testimonials } from "@components/Testimonials";
import { Contact } from "@components/Contact";
import GalleryGrid from "@components/GalleryGrid";
import jardin1 from "@assets/mantenimiento/jardin1.png";
import jardin2 from "@assets/mantenimiento/jardin2.jpg";
import jardin3 from "@assets/mantenimiento/jardin3.png";
import jardin4 from "@assets/mantenimiento/jardin4.jpg";
import riego from "@assets/mantenimiento/riego.png";
import poda1 from "@assets/poda-tala/poda1.jpg";
import { useEffect, useState, useContext } from "react";
import { useLoaderData, useLocation } from "react-router";
import { appContext } from "../App";


const Home: React.FC = () => {
  const images = [
    { src: jardin1 },
    { src: jardin2 },
    { src: jardin3 },
    { src: jardin4 },
    { src: riego },
    { src: poda1 },
  ];

  const { hash } = useLocation()
  const ctx = useContext(appContext)



  useEffect(() => {
    console.log(hash)
    console.log("hola")
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [ctx?.scroll, hash])

  return (
    <>
      <Hero />
      <div id="#services">
        <Services />

      </div>
      <div id="#home-gallery">
        <GalleryGrid gap={30} cols={2} padding={"5rem"} images={images} />
      </div>
      <div id="#testimonials">
        <Testimonials />

      </div>
      <div id="#contact">

        <Contact />

      </div>
    </>
  );
};

export default Home;

import React, { useLayoutEffect } from "react";
import riego1 from "@assets/riego/riego1.jpg";
import riego2 from "@assets/riego/riego2.jpg";
import riego3 from "@assets/riego/riego3.jpg";
import riego4 from "@assets/riego/riego4.jpg";
import riego5 from "@assets/riego/riego5.jpg";
import riego6 from "@assets/riego/riego6.jpg";
import ServicePage from "./ServicePage";

const RiegoPage: React.FC = () => {
  return (
    <ServicePage
      images={[
        { src: riego1, alt: "Imagen riego" },
        { src: riego2, alt: "Imagen riego" },
        { src: riego3, alt: "Imagen riego" },
        { src: riego4, alt: "Imagen riego" },
        { src: riego5, alt: "Imagen riego" },
        { src: riego6, alt: "Imagen riego" },
      ]}
      service="4"
    />
  );
};

export default RiegoPage;

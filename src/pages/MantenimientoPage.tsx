import React, { useLayoutEffect } from "react";
import img1 from "@assets/mantenimiento/jardin1.png";
import img2 from "@assets/mantenimiento/jardin2.jpg";
import img3 from "@assets/mantenimiento/jardin3.png";
import img4 from "@assets/mantenimiento/jardin4.jpg";
import img5 from "@assets/mantenimiento/riego.png";
import img6 from "@assets/mantenimiento/jardin5.jpg";
import ServicePage from "./ServicePage";

const MantenimientoPage: React.FC = () => {
  return (
    <ServicePage
      images={[
        { src: img1, alt: "Imagen jardin" },
        { src: img2, alt: "Imagen jardin" },
        { src: img3, alt: "Imagen jardin" },
        { src: img4, alt: "Imagen jardin" },
        { src: img5, alt: "Imagen jardin" },
        { src: img6, alt: "Imagen jardin" },
      ]}
      service="2"
    />
  );
};

export default MantenimientoPage;

import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import s from "@styles/pages/ServicePage.module.css";
import poda1 from "@assets/poda-tala/poda1.jpg";
import poda2 from "@assets/poda-tala/poda2.jpg";
import poda3 from "@assets/poda-tala/poda3.jpg";
import poda4 from "@assets/poda-tala/poda4.jpg";
import poda5 from "@assets/poda-tala/poda5.jpg";
import poda6 from "@assets/poda-tala/poda6.jpg";
import GalleryGrid from "@components/GalleryGrid";
import ServicePage from "./ServicePage";

const PodaPage: React.FC = () => {
  return (
    <ServicePage
      images={[
        { src: poda1, alt: "imagen poda" },
        { src: poda3, alt: "imagen poda" },
        { src: poda4, alt: "imagen poda" },
        { src: poda4, alt: "imagen poda" },
        { src: poda5, alt: "imagen poda" },
        { src: poda6, alt: "imagen poda" },
      ]}
      service="1"
    />
  );
};

export default PodaPage;

import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import HashScroller from "@components/HashScroller";
import { Routes, Route, Navigate } from "react-router-dom";
import PodaPage from "./pages/PodaPage";
import MantenimientoPage from "./pages/MantenimientoPage";
import ScrollToTop from "@components/ScrollToTop";
import SocialIcons from "@components/SocialIcons";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <main id="main">
        {/* <SocialIcons /> */}
        <HashScroller />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serveis/poda-tala" element={<PodaPage />} />
          <Route path="/serveis/manteniment" element={<MantenimientoPage />} />
          <Route path="/serveis/diseny" element={<p>Servei de diseny</p>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

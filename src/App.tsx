import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import HashScroller from "@components/HashScroller";
import { Routes, Route, Navigate } from "react-router-dom";
import PodaPage from "./pages/PodaPage";
import MantenimientoPage from "./pages/MantenimientoPage";
import ScrollToTop from "@components/ScrollToTop";
import SocialIcons from "@components/SocialIcons";
import { createContext, useState } from "react";

type AppContext = {
  scroll: boolean,
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export  const appContext = createContext<AppContext | null>(null)


const App: React.FC = () => {

  const [scroll, setScroll] = useState(false)

  return (
    <>
      <appContext.Provider value={{scroll, setScroll}}>

        <Header />

        <main id="main">
          {/* <SocialIcons /> */}
          {/* <HashScroller /> */}
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
      </appContext.Provider>

    </>
  );
};

export default App;

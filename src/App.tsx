import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import HashScroller from "@components/HashScroller";
import { Routes, Route, Navigate } from "react-router-dom";
import PodaPage from "./pages/PodaPage";
import MantenimientoPage from "./pages/MantenimientoPage";
import ScrollToTop from "@components/ScrollToTop";
import { createContext, useState } from "react";
import LimpiezaPage from "./pages/LimpiezaPage";
import RiegoPage from "./pages/RiegoPage";
import PiscinesPage from "./pages/PiscinesPage";
import WhatsappIcon from "@assets/icons/WhatsappIcon";
import useIsMobile from "@hooks/useIsMobile";

type AppContext = {
  scroll: boolean,
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
  popUpForm: boolean,
  setPopUpForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export  const appContext = createContext<AppContext | null>(null)


const App: React.FC = () => {

  const [scroll, setScroll] = useState(false)
  const [popUpForm, setPopUpForm] = useState(false)
  const mobile = useIsMobile()

  return (
    <>
      <appContext.Provider value={{scroll, setScroll, popUpForm, setPopUpForm}}>

        <Header />
        {useIsMobile(500) && <WhatsappIcon />}
        <main id="main">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/serveis/poda-tala" element={<PodaPage />} />
            <Route path="/serveis/manteniment" element={<MantenimientoPage />} />
            <Route path="/serveis/neteja" element={<LimpiezaPage />} />
            <Route path="/serveis/reg" element={<RiegoPage />} />
            <Route path="/serveis/piscines" element={<PiscinesPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </appContext.Provider>

    </>
  );
};

export default App;

import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import HashScroller from '@components/HashScroller'
import { Routes, Route, Navigate } from 'react-router-dom'
import PodaPage from './pages/PodaPage'
import ScrollToTop from '@components/ScrollToTop'
import fb from "@assets/icons/fb.png"
import ig from "@assets/icons/ig.png"


const App: React.FC = () => {
  return (
    <>
      <Header />
       

      <main id="main">
        
        <div className="social-container">
          <a
            className="social-btn"
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <img src={ig} alt="" />
            <span className="sr-only">Instagram</span>
          </a>

          <a
            className="social-btn"
            href="https://www.facebook.com/tu_pagina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <img src={fb} alt="" />
            <span className="sr-only">Facebook</span>
          </a>
   
      </div>
        <HashScroller />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/serveis/poda-tala' element={<PodaPage />} />
          <Route path='/serveis/manteniment' element={<p>Servei de manteniment</p>} />
          <Route path='/serveis/diseny' element={<p>Servei de diseny</p>} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

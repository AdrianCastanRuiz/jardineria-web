import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import HashScroller from '@components/HashScroller'
import { Routes, Route, Navigate } from 'react-router-dom' // <- aquí

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HashScroller />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/serveis/poda-tala' element={<p>Servei de poda i tala</p>} />
        <Route path='/serveis/manteniment' element={<p>Servei de manteniment</p>} />
        <Route path='/serveis/diseny' element={<p>Servei de diseny</p>} />
        {/* Catch-all -> Home */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { I18nProvider } from './i18n/I18nContext'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '@components/ScrollToTop'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Ojo, aquí van tus estilos de Tailwind

// 1. IMPORTANTE: Importa el BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envuelve tu App con el BrowserRouter */}
    {/* AGREGA LA PROPIEDAD basename AQUÍ */}
    {/* Debe ser EXACTAMENTE igual a lo que pusiste en vite.config.js sin la barra final obligatoriamente, pero mejor ponlo igual */}
    <BrowserRouter basename='/entrega-react'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
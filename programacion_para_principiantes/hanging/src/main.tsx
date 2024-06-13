// Todo el archivo es un JSX

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* StricMode para revisar errores */}
    <App /> {/* Etiqueta que nosotros creamos, explicando que se desea renderizar  */}
  </React.StrictMode>,
)

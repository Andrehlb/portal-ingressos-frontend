// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
// import CadastroEvento from './pages/eventos/CadastroEvento'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/eventos/cadastro" element={<CadastroEvento />} />
        {/* Adicione outras rotas aqui: fallback ou página inicial */ //}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    //  </Routes>
   // </Router>
 //  )
// }

/*
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
*/
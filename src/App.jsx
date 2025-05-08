// src/App.jsx
import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CadastroEvento from './pages/eventos/CadastroEvento';
import HomePage from './pages/cliente/HomePage';

// import { Routes, Route } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';

export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/eventos/cadastro">Cadastro de Evento</Link></li>
      </ul>
    </nav>
    
    <Routes>
      {/* Rota principal (raiz) página de entrada/login */}
      <Route path="/" element={<Login />} />

      {/* Página de cadastro de evento (acesso do gerente) */}
      <Route path="/eventos/cadastro" element={<CadastroEvento />} />

      {/* Rota coringa para redirecionar qualquer outra rota não definida */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}
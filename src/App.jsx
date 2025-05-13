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
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Página Inicial</Link></li>
          <li><Link to="/eventos/cadastro" className="hover:underline">Cadastro de Evento</Link></li>
        </ul>
      </nav>

      <Routes>

      {/* Importação do componente HomePage */}
      <Route path="/" element={<HomePage />} />

      {/* Rota para a página de (geral? Verificar) eventos (acesso do cliente) */}
      <Route path="/eventos" element={<HomePage />} />

      {/* Rota principal (raiz) página de entrada/login 
      <Route path="/" element={<Login />} /> */}

      {/* Página de cadastro de evento (acesso do restrito) */}
      <Route path="/eventos/cadastro" element={<CadastroEvento />} />

      {/* Rota coringa para redirecionar qualquer outra rota não definida */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}
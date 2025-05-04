// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CadastroEvento from './pages/eventos/CadastroEvento'
import { Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/eventos/cadastro" element={<CadastroEvento />} />
      <Route path="/" element={<div>Página Inicial</div>} />
      <Route path="*" element={<Navigate to="/eventos/cadastro" />} />
    </Routes>
  )
}
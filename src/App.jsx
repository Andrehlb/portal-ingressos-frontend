// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CadastroEvento from './pages/eventos/CadastroEvento'

export default function App() {
  return (
    <Routes>
      <Route path="/eventos/cadastro" element={<CadastroEvento />} />
    </Routes>
  )
}
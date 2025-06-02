// src/pages/eventos/CadastroEvento.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CadastroEvento() {
  const [evento, setEvento] = useState({
    nome: '',
    data: '',
    local: ''
  });

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Evento "${evento.nome}" cadastrado com sucesso!`);
    // Aqui depois você pode integrar com o backend real.
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cadastro de Evento</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>Nome do Evento:</label>
        <input type="text" name="nome" value={evento.nome} onChange={handleChange} required />

        <label>Data:</label>
        <input type="date" name="data" value={evento.data} onChange={handleChange} required />

        <label>Local:</label>
        <input type="text" name="local" value={evento.local} onChange={handleChange} required />

        <button type="submit" style={{ marginTop: '1rem' }}>Cadastrar</button>
      </form>
      <Link to="/" className="text-blue-600 font-medium text-sm hover:underline transition">Voltar para a Página Inicial</Link>
    </div>
  );
}

/*
import React from "react";
import EventoForm from "../../components/forms/EventoForm";
import { Card, CardContent } from "../../components/ui/card";

export default function CadastroEvento() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Cadastro de Evento</h2>
          <EventoForm />
        </CardContent>
      </Card>
    </div>
  );
}
*/
// src/pages/cliente/HomePage.jsx
import React from 'react';

// Dummy data for events
const categorias = [
  { nome: "Shows" },
  { nome: "Palestras" },
  { nome: "Teatro" },
  { nome: "Jogos" },
  { nome: "Filmes" },
  { nome: "Eventos" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Descubra seu tipo de evento
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categorias.map((categoria, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-between transition transform hover:scale-105"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
              Imagem de {categoria.nome}
            </div>

            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              {categoria.nome}
            </h2>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
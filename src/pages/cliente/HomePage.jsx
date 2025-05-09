// src/pages/cliente/HomePage.jsx
import React from 'react';

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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Descubra seu tipo de evento
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {categorias.map((categoria, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl w-80 p-5 flex flex-col items-center">
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
              Imagem {categoria.nome}
            </div>

            <h2 className="text-xl font-bold text-purple-600 text-center mb-2">
              {categoria.nome}
            </h2>

            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full">
              Explorar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

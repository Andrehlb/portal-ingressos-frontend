// src/pages/cliente/HomePage.jsx
import React from 'react';

const categorias = [
  { nome: "Eventos Corporativos", descricao: "Palestras, conferências, lançamentos" },
  { nome: "Feiras e Exposições", descricao: "Feiras de negócios, temáticas" },
  { nome: "Eventos Educacionais", descricao: "Cursos, palestras, simpósios" },
  { nome: "Shows", descricao: "Eventos musicais e festivais" },
  { nome: "Teatro", descricao: "Peças teatrais e performances" },
  { nome: "Esportivos", descricao: "Competições e eventos esportivos" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Categorias de Eventos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categorias.map((categoria, index) => (
          <div 
            key={index} 
            className="border-2 border-gray-300 rounded-lg p-4 flex flex-col"
          >
            <h2 className="text-xl font-bold text-center mb-2">
              {categoria.nome}
            </h2>
            <div className="border border-dashed border-gray-400 h-32 mb-4 flex items-center justify-center text-gray-500">
              Espaço para imagem
            </div>
            <p className="text-gray-600 text-center mb-4">
              {categoria.descricao}
            </p>
            <div className="border-t border-gray-300 pt-4 mt-auto">
              <button className="w-full py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100">
                Ver Eventos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// src/pages/cliente/HomePage.jsx
import React from 'react';

const categorias = [
  { 
    nome: "Eventos Corporativos", 
    descricao: "Palestras, conferências, lançamentos" 
  },
  { 
    nome: "Feiras e Exposições", 
    descricao: "Feiras de negócios, temáticas" 
  },
  { 
    nome: "Eventos Educacionais", 
    descricao: "Cursos, palestras, simpósios" 
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Menu Superior */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex space-x-4">
          <span className="font-semibold text-gray-700 hover:text-blue-600 cursor-pointer">Página Inicial</span>
          <span className="font-semibold text-gray-700 hover:text-blue-600 cursor-pointer">Cadastro de Evento</span>
        </div>
      </div>

      {/* Título Principal */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Categorias de Eventos
      </h1>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categorias.map((categoria, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              {/* Título do Card */}
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {categoria.nome}
              </h2>
              
              {/* Área da Imagem */}
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center text-gray-500">
                Imagem ilustrativa
              </div>
              
              {/* Descrição */}
              <p className="text-gray-600 mb-6">
                {categoria.descricao}
              </p>
              
              {/* Botão */}
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors">
                Ver Eventos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
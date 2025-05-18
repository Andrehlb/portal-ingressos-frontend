// src/components/CategoriaCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriaCard = ({ categoria }) => {
  const navigate = useNavigate();

  return (
    <div className="backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl rounded-2xl overflow-hidden transition-all hover:shadow-2xl">
      {/* Área da Imagem */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <span className="text-gray-600 text-lg">Imagem {categoria.nome}</span>
      </div>

      {/* Área de Conteúdo */}
      <div className="bg-white/90 p-6 backdrop-blur-xs">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
          {categoria.nome}
        </h3>
        <p className="text-gray-600 text-sm text-center mb-4">
          {categoria.descricao}
        </p>
        <button 
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          onClick={() => navigate(`/categoria/${categoria.id}`)}
        >
          Explorar
        </button>
      </div>
    </div>
  );
};

export default CategoriaCard;
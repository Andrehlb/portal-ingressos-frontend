// src/components/CategoriaCard.jsx
import React from "react";

export default function CategoriaCard({ nome, descricao, onClick }) {
  return (
    <div className="rounded-2xl shadow-xl bg-gradient-to-b from-blue-50 to-purple-50 border border-gray-100
      flex flex-col justify-between items-center p-0 min-h-[340px] transition-transform hover:scale-[1.02] cursor-pointer
      overflow-hidden"> {/* Adicionei overflow-hidden */}
      
      {/* Área da Imagem - Agora maior e com borda sutil */}
      <div className="w-full h-48 flex items-center justify-center relative 
        after:absolute after:inset-0 after:border-b after:border-gray-200/50"> {/* Linha divisória sutil */}
        
        <div className="w-full h-full flex items-center justify-center bg-white/20">
          <span className="text-gray-400 text-lg font-medium select-none">Imagem {nome}</span>
        </div>
      </div>

      {/* Conteúdo Inferior */}
      <div className="w-full p-6 flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{nome}</h3>
        <p className="text-gray-600 text-sm mb-4 text-center px-2">{descricao}</p>
        <button
          onClick={onClick}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-2 rounded-lg 
          font-medium shadow-sm w-full max-w-[200px]"
        >
          Explorar
        </button>
      </div>
    </div>
  );
}
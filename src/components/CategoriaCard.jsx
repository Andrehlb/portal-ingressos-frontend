// src/components/CategoriaCard.jsx
import React from "react";

export default function CategoriaCard({ nome, descricao, onClick }) {
  return (
    <div className="rounded-2xl shadow-xl bg-gradient-to-b from-blue-100 via-white to-purple-100 border border-gray-200
      flex flex-col justify-between items-center p-8 min-h-[340px] transition-transform hover:scale-105 cursor-pointer">
      {/* Espaço da Imagem/Categoria */}
      <div className="w-full h-40 flex items-center justify-center mb-6 rounded-xl bg-white/50 shadow-inner">
        <span className="text-gray-400 text-lg font-semibold select-none">Imagem {nome}</span>
      </div>
      {/* Título e Descrição */}
      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{nome}</h3>
        <p className="text-gray-600 text-sm mb-6 text-center">{descricao}</p>
        <button
          onClick={onClick}
          className="bg-blue-600 hover:bg-blue-800 transition text-white px-8 py-2 rounded-full font-semibold shadow-md"
        >
          Explorar
        </button>
      </div>
    </div>
  );
}
            
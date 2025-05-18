// src/components/CategoriaCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoriaCard({ categoria }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // 🔌 Futuro: filtrar por categoria no back-end
        navigate(`/eventos/${categoria.nome.toLowerCase()}`);
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer"
        >
            <div className="p-6">
                {/* Imagem fictícia */}
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                    Imagem {categoria.nome}
                </div>

                {/* Nome e descrição */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{categoria.nome}</h3>
                <p className="text-gray-600 text-sm mb-4">{categoria.descricao}</p>

                {/* Botão opcional */}
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Explorar
                </button>
            </div>
        </div>
    );
}
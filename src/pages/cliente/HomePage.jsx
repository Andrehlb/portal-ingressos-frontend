// src/pages/cliente/HomePage.jsx
import React, { useState } from 'react';

export default function HomePage() {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoAcesso, setTipoAcesso] = useState('cliente'); // 'cliente' ou 'gerente'

  const categorias = [
    { id: 1, nome: 'Shows', descricao: "Festivais de Música e Eventos Musicais" },
    { id: 2, nome: 'Palestras', descricao: "Eventos corporativos e Educacionais" },
    { id: 3, nome: 'Teatro', descricao: "Peças Teatrais e Performance" },
    { id: 4, nome: 'Esportes', descricao: "Eventos Esportivos e Competições" },
    { id: 5, nome: 'Filmes', descricao: "Festivais de Cinema e Pré-Estréias" },
    { id: 6, nome: 'Eventos', descricao: "Feiras e Exposições Diversas" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Seçao de Acesso */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Portal de Eventos</h1>

        <div className="flex gap-4 mb-6">
          <button
          onClick={ () => setTipoAcesso('cliente')}
          className={`px-6 py-2 rounded-full shadow transition ${tipoAcesso === 'cliente' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Acesso Cliente
          </button>
          <button
          onClick={ () => setTipoAcesso('gerente')}
          className={`px-6 py-2 rounded-full shadow transition ${tipoAcesso === 'gerente' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Acesso Gerente
          </button>
        </div>

        <button
          onClick={() => setModalAberto(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Entrar / Cadastrar
        </button>
      </div>

      {/* Seçao de Cards/Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{categoria.nome}</h2>
            <p className="text-gray-600">{categoria.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
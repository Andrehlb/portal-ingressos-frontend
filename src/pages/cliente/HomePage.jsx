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
      <div className="max-w-6x1 mx-auto">
        <h2 className="text-3xl font- text-center text-gray-800 mb-8">
          Descrubra o Mundo de Eventos que Esperam por Você
        </h2>
          <p className="text-center text-gray-600 mb-12">
            Shows, Palestras, Teatro, Esportes, Filmes e muito mais! Tudo ao Teu Alcance. 
            <br> 
            Nunca foi tão fácil participar e fazer presença </br>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria, index) => (	
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                    Imagem {categoria.nome}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{categoria.nome}</h3>
                  <p className="text-gray-600 mb-4">{categoria.descricao}</p>
                  <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Explorar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}
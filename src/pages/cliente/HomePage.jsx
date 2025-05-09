// src/pages/cliente/HomePage.jsx
import React, { useState } from 'react';

export default function HomePage() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Portal de Eventos</h1>

      <button
        onClick={() => setModalAberto(true)}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        Entrar / Cadastrar
      </button>

      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Acesse sua conta</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mb-3"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4">
              Entrar
            </button>

            <button
              className="w-full text-sm text-blue-600 hover:underline"
              onClick={() => setModalAberto(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
// src/pages/cliente/HomePage.jsx
import React from 'react';

export default function HomePage() {
  // Array fictício de eventos para simular a lógica de renderização
  const eventosFicticios = [
    { id: 1,
      titulo: 'Show sertanejo Hugo e Huga',
      data: '22/06',
      hora: '21:00',
      local: 'Av. Paulista, 900 - SP',
      preco: 'R$ 80',
      imagem: 'https://source.unsplash.com/400x300/?concert',
    },
    {
      id: 2,
      titulo: 'Imersão Palestras de Negócios',
      data: '30/05',
      hora: '10:00',
      local: 'Av. Paulista, 900 - SP',
      preco: 'R$ 150',
      imagem: 'https://source.unsplash.com/400x300/?business',
    },
    {
      id: 3,
      titulo: 'Teatro Peça dos Ninjas',
      data: '15/07',
      hora: '18:00',
      local: 'Av. Paulista, 900 - SP',
      preco: 'R$ 100',
      imagem: 'https://source.unsplash.com/400x300/?theater',
    },
  ];

  return (
     <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
        Descubra o Mundo de Eventos Que Esperam Por Você
      </h1>
      <p className="text-center text-slate-600 mb-10">
        Shows, Festivais e Eventos Online ao Seu Alcance – Nunca Foi Tão Fácil Marcar Presença.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventosFicticios.map(evento => (
          <div
            key={evento.id}
            className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden bg-white border border-gray-200"
          >
            <img src={evento.imagem} alt={evento.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-slate-800 mb-2">{evento.titulo}</h2>
              <p className="text-sm text-slate-600">
                📅 {evento.data} às {evento.hora}
              </p>
              <p className="text-sm text-slate-600">📍 {evento.local}</p>
              <p className="text-sm text-slate-600 mb-4">💰 {evento.preco}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
                Comprar Ingresso
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

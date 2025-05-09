// src/pages/eventos/EventosHome.jsx
import React from "react";

export default function EventosHome() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10">Descubra o Mundo de Eventos</h1>

      <div className="flex flex-row justify-around items-center">
        {/* Card 1 */}
        <div className="border border-gray-300 shadow-lg rounded-xl p-4 w-60 flex flex-col items-center bg-white">
          <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Shows</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Explorar</button>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 shadow-lg rounded-xl p-4 w-60 flex flex-col items-center bg-white">
          <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Palestras</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Explorar</button>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 shadow-lg rounded-xl p-4 w-60 flex flex-col items-center bg-white">
          <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Teatro</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Explorar</button>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-300 shadow-lg rounded-xl p-4 w-60 flex flex-col items-center bg-white">
          <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Jogos</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Explorar</button>
        </div>

        {/* Card 5 */}
        <div className="border border-gray-300 shadow-lg rounded-xl p-4 w-60 flex flex-col items-center bg-white">
          <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Filmes</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Explorar</button>
        </div>

        {/* Card 6 */}
        <div className="border border-gray-300 shadow-lg rounded-xl p-4 w-60 flex flex-col items-center bg-white">
          <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Eventos</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Explorar</button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Componente de barra de pesquisa moderna, com sugestões e usabilidade aprimorada
export default function BarraPesquisa({ onSearch, sugestoes = [] }) {
  const [termo, setTermo] = useState("");
  const [showSugestoes, setShowSugestoes] = useState(false);

  return (
    <div className="relative w-full max-w-xl mx-auto mt-8 mb-10">
      <div className="flex items-center">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute ml-4" />
        <input
          className="w-full pl-12 pr-4 py-3 rounded-full shadow border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-lg"
          type="text"
          placeholder="Pesquisar eventos, shows, teatros, cursos..."
          value={termo}
          onChange={e => {
            setTermo(e.target.value);
            setShowSugestoes(true);
            onSearch && onSearch(e.target.value);
          }}
          onFocus={() => setShowSugestoes(true)}
          onBlur={() => setTimeout(() => setShowSugestoes(false), 180)} // Delay para permitir clique
        />
      </div>
      {/* Sugestões abaixo do input */}
      {showSugestoes && sugestoes.length > 0 && (
        <div className="absolute w-full bg-white rounded-xl shadow-lg z-20 mt-2 p-4">
          <div className="mb-2 font-semibold text-gray-700">Sugestões</div>
          <div className="flex flex-wrap gap-2">
            {sugestoes.map((s, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                onClick={() => {
                  setTermo(s);
                  setShowSugestoes(false);
                  onSearch && onSearch(s);
                }}
                tabIndex={-1}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

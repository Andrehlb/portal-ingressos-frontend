// src/components/ModalAcessoRestrito.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ModalAcessoRestrito({ aberto, onClose }) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full relative">
        {/* Botão fechar */}
        <button
          className="absolute top-2 right-2 text-xl text-slate-400 hover:text-red-500"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
        {/* Conteúdo */}
        <h2 className="text-xl font-bold mb-4 text-blue-900 text-center">
          Acesso Restrito (Gerente)
        </h2>
        <input
          type="password"
          placeholder="Código de acesso do gerente"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="email"
          placeholder="E-mail do gerente"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border rounded mb-5"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition mb-3">
          Entrar
        </button>
        <div className="flex justify-between">
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            Voltar para Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function ModalCadastroVisitante({ aberto, onClose }) {
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
        <h2 className="text-xl font-bold mb-4 text-blue-900 text-center">
          Cadastro de Novo Usuário
        </h2>
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="text"
          placeholder="CPF"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border rounded mb-4"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition mb-3">
          Cadastrar
        </button>
        <div className="flex justify-between">
          <button className="text-blue-700 hover:underline text-sm" onClick={onClose}>
            Já tenho conta
          </button>
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            Voltar para Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

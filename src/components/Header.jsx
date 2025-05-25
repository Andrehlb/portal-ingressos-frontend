// COMPONENTE: HEADER GLOBAL DO PORTAL
// Estrutura sênior: sticky, glassmorphism, navegação principal, modularizado para reuso.
// Pronto para evoluir: pode receber props de handlers, nome do usuário, rotas dinâmicas etc.
// André Luiz Barbosa | 20/05/2025 | Branch: refactor/header-to-component

import React from "react";

export default function Header({
  onAcessoVisitante, // função para abrir modal visitante
  onAcessoRestrito,  // função para abrir modal restrito
  children           // permite injetar barra de pesquisa (e outros) entre as colunas se necessário
}) {
  return (
    <header
      className="
        sticky top-0 z-50
        flex flex-col gap-2
        px-8 py-3
        bg-white/80
        backdrop-blur-md
        border-b border-slate-200
        shadow
        transition-all
      "
    >
      <div className="flex items-center justify-between gap-4 w-full">
        {/* ESQUERDA: Logo + Acesso Visitante */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-blue-900 drop-shadow select-none">
            Portal de Eventos
          </span>
          <button
            type="button"
            className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            onClick={onAcessoVisitante}
          >
            Acesso Visitante
          </button>
        </div>
        {/* CENTRO: Barra de pesquisa ou outros elementos (opcional, injeta por children) */}
        {children && (
          <div className="flex-1 flex justify-center">
            {children}
          </div>
        )}
        {/* DIREITA: Navegação e acesso restrito */}
        <div className="flex items-center gap-4">
          <a href="/" className="text-gray-700 hover:underline text-base">Página Inicial</a>
          <a href="/eventos/cadastro" className="text-gray-700 hover:underline text-base">Cadastro de Evento</a>
          <button
            type="button"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
            onClick={onAcessoRestrito}
          >
            Acesso Restrito
          </button>
        </div>
      </div>
    </header>
  );
}

// COMPONENTE: COMO FUNCIONA - EXPLICA O FUNCIONAMENTO DO PORTAL
// Responde à pergunta "como vc funciona?" explicando o sistema de forma clara e visual
// André Luiz Barbosa | 03/08/2025 | Branch: feature/como-funciona

import React from "react";

export default function ComoFunciona() {
  const passos = [
    {
      numero: "1",
      titulo: "Descubra Eventos",
      descricao: "Navegue pelas categorias ou use a barra de pesquisa para encontrar eventos do seu interesse.",
      icone: "🔍"
    },
    {
      numero: "2", 
      titulo: "Faça seu Acesso",
      descricao: "Visitantes podem se cadastrar rapidamente. Organizadores usam o acesso restrito para gerenciar eventos.",
      icone: "👤"
    },
    {
      numero: "3",
      titulo: "Explore e Participe",
      descricao: "Clique em 'Explorar' nas categorias para ver eventos disponíveis e garantir sua participação.",
      icone: "🎟️"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Como Funciona o Portal
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nosso portal conecta você aos melhores eventos de forma simples e intuitiva. 
            Veja como é fácil participar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {passo.numero}
                </div>
                <div className="text-4xl mb-4">{passo.icone}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {passo.titulo}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Para Visitantes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Cadastro rápido e gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Busca inteligente com sugestões</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Acesso a eventos em diversas categorias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Interface moderna e intuitiva</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Para Organizadores
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Acesso restrito para gerenciamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Cadastro e gestão de eventos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Controle administrativo completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Sistema seguro e confiável</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
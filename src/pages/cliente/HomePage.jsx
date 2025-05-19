import React, { useState } from 'react';
import CategoriaCard from '../../components/CategoriaCard';
import BarraPesquisa from '../../components/BarraPesquisa';

export default function HomePage() {
  const [modalVisitante, setModalVisitante] = useState(false);
  const [modalRestrito, setModalRestrito] = useState(false);
  const [modoCadastro, setModoCadastro] = useState(false); // Alterna entre login/cadastro do visitante

  // Dados simulados para categorias (com id profissional)
  const categorias = [
    { id: 1, nome: 'Shows', descricao: "Festivais e Eventos Musicais" },
    { id: 2, nome: 'Palestras', descricao: "Eventos corporativos e Educacionais" },
    { id: 3, nome: 'Teatro', descricao: "Peças Teatrais e Performances" },
    { id: 4, nome: 'Esportes', descricao: "Eventos Esportivos e Competições" },
    { id: 5, nome: 'Filmes', descricao: "Festivais de Cinema e Pré-Estréias" },
    { id: 6, nome: 'Eventos', descricao: "Feiras e Exposições Variados" },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-slate-100 to-blue-50">
      {/* NAVBAR */}
      <header className="w-full bg-white/70 shadow-lg backdrop-blur sticky top-0 z-40">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo / Título */}
          <span className="font-extrabold text-2xl text-blue-900 drop-shadow select-none">
            Portal de Eventos
          </span>

          {/* Botões de acesso */}
          <div className="flex gap-3">
            {/* Acesso Visitante */}
            <button
              onClick={() => { setModoCadastro(false); setModalVisitante(true); }}
              className="bg-blue-600 hover:bg-blue-800 transition text-white px-6 py-2 rounded-full font-semibold shadow-md text-base"
            >
              Acesso Visitante
            </button>
            {/* Acesso Restrito (Gerente/Admin) */}
            <button
              onClick={() => setModalRestrito(true)}
              className="border border-blue-600 text-blue-700 hover:bg-blue-50 transition px-5 py-2 rounded-full text-sm font-semibold shadow-sm"
            >
              Acesso Restrito
            </button>
          </div>
        </nav>
      </header>

      {/* MODAL VISITANTE */}
      {modalVisitante && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96">
            {/* Alterna entre login e cadastro */}
            <h2 className="text-xl font-bold mb-4 text-blue-900">
              {modoCadastro ? 'Cadastrar Novo Usuário' : 'Acesso Visitante'}
            </h2>
            <input className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="E-mail" />
            {!modoCadastro && (
              <input className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Senha" type="password" />
            )}
            {modoCadastro && (
              <>
                <input className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Nome Completo" />
                <input className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Senha" type="password" />
              </>
            )}

            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-2">
              {modoCadastro ? 'Cadastrar' : 'Entrar'}
            </button>
            <button
              className="w-full text-sm text-blue-600 hover:underline"
              onClick={() => setModalVisitante(false)}
            >
              Fechar
            </button>
            <div className="mt-2 text-center">
              {modoCadastro
                ? (
                  <span
                    className="text-sm text-gray-500 hover:underline cursor-pointer"
                    onClick={() => setModoCadastro(false)}
                  >
                    Já tem conta? Entrar
                  </span>
                ) : (
                  <span
                    className="text-sm text-gray-500 hover:underline cursor-pointer"
                    onClick={() => setModoCadastro(true)}
                  >
                    Novo por aqui? Cadastrar
                  </span>
                )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL RESTRITO (Gerente/Admin) */}
      {modalRestrito && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Acesso Restrito</h2>
            <input className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Código de Acesso ou E-mail Admin" />
            <input className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Senha" type="password" />
            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-2">
              Entrar
            </button>
            <button
              className="w-full text-sm text-blue-600 hover:underline"
              onClick={() => setModalRestrito(false)}
            >
              Fechar
            </button>
            {/* Cadastrar novo gerente */}
            <div className="mt-2 text-center">
              <span
                className="text-sm text-gray-500 hover:underline cursor-pointer"
                // Futuro: abrir modal/fluxo de cadastro de novo gerente/admin/agente
                onClick={() => alert('Em construção o Fluxo de cadastro de novo gerente/admin/agente')}
              >
                Cadastrar novo Gerente/Admin
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CONTEÚDO CENTRAL */}
      <main className="max-w-6xl mx-auto px-4">
        <div className="text-center mt-12 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Descubra o Mundo de Eventos que Esperam por Você
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Shows, Palestras, Teatro, Esportes, Filmes e muito mais!<br />
            Nunca foi tão fácil participar e fazer presença.
          </p>
        </div>

        <BarraPesquisa
          onSearch={valor => {/* Lógica para filtar cards/categorias/eventos futuramente */}}
          sugestoes={[
            "hoje", "amanhã", "nesta semana", "neste fim de semana", "semana que vem", "neste mês", "próximo mês",
          ]}
        />

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categorias.map((categoria) => (
            <CategoriaCard
              key={categoria.id}
              nome={categoria.nome}
              descricao={categoria.descricao}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderGlassFlexible from '../../components/HeaderGlassFlexible';
import BarraPesquisa from '../../components/BarraPesquisa';
import CategoriaCard from '../../components/CategoriaCard';
import ModalCadastroVisitante from '../../components/ModalCadastroVisitante';
import ModalAcessoRestrito from '../../components/ModalAcessoRestrito';

export default function HomePage() {
  { /*Funções para abri modais */}
  const [modalCadastroVisitante, setModalCadastroVisitante] = useState(false);
  const [modalAcessoRestrito, setModalAcessoRestrito] = useState(false);
  const [modoCadastro, setModoCadastro] = useState(false); // Alterna entre login/cadastro do visitante

  // Dados simulados para categorias (com ids)
  const categorias = [
    { id: 1, nome: 'Shows', descricao: "Festivais e Eventos Musicais" },
    { id: 2, nome: 'Palestras', descricao: "Eventos corporativos e Educacionais" },
    { id: 3, nome: 'Teatro', descricao: "Peças Teatrais e Performances" },
    { id: 4, nome: 'Esportes', descricao: "Eventos Esportivos e Competições" },
    { id: 5, nome: 'Filmes', descricao: "Festivais de Cinema e Pré-Estréias" },
    { id: 6, nome: 'Eventos', descricao: "Feiras e Exposições Variados" },
  ];

  return (
    <>
      <HeaderGlassFlexible>
        <span className="text-blue-600 font-medium"> Portal de Eventos </span>
        <button 
          onClick={() => setModalCadastroVisitante(true)}
          className="mx-2 border-2 bg-blue-600 text-white px-2 py-0 rounded-full shadow hover:bg-blue-700 transition"
        > Acesso Visitante </button>
        <BarraPesquisa className="mx-4" />
          <nav className="flex items-center gap-4 mx-2"> 
            <Link to="/" className="text-blue-900 font-medium hover:underline"> Página Inicial </Link>
            <a href="/eventos/cadastro" className="text-blue-900 font-medium hover:underline">Cadastro</a>
          </nav>
        <button 
          onClick={() => setModalAcessoRestrito(true)}
          className="mx-2 border-2 bg-blue-600 text-white px-2 py-0 rounded-full shadow hover:bg-blue-700 transition"> Acesso Restrito </button>
      </HeaderGlassFlexible>
      {/* Modais */}
      {/* MODAL ACESSO RESTRITO (Gerente/Admin) */}
        <ModalAcessoRestrito
          aberto={modalAcessoRestrito}
          onClose={() => setModalAcessoRestrito(false)}
        />
        {/* MODAL CADASTRO VISITANTE */}
        <ModalCadastroVisitante
          aberto={modalCadastroVisitante}
          onClose={() => setModalCadastroVisitante(false)}
          modoCadastro={modoCadastro}
          setModoCadastro={setModoCadastro}
        />
      {/* Conteúdo Principal (títulos, pesquisa, cards, etc.) */}
      <main className="flex flex-col items-center mt-1">
        {/* CONTEÚDO CENTRAL */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mt-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Descubra o Mundo de Eventos que Esperam por Você
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Shows, Palestras, Teatro, Esportes, Filmes e muito mais!<br />
              Nunca foi tão fácil participar e fazer presença.
            </p>
          </div>

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
        </div>
      </main>
    </>
  );
}

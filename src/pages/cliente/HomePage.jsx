// src/pages/cliente/HomePage.jsx
import React, { useState } from 'react';

export default function HomePage() {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoAcesso, setTipoAcesso] = useState('cliente'); // usuário final
  const [codigoAcesso, setCodigoAcesso] = useState(''); // código de acesso restrito (interno)
  const [codigoValido, setCodigoValido] = useState(false); // código de acesso restrito válido
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' }); // credenciais de acesso restrito

  const categorias = [
    { id: 1, nome: 'Shows', descricao: "Festivais e Eventos Musicais" },
    { id: 2, nome: 'Palestras', descricao: "Eventos corporativos e Educacionais" },
    { id: 3, nome: 'Teatro', descricao: "Peças Teatrais e Performances" },
    { id: 4, nome: 'Esportes', descricao: "Eventos Esportivos e Competições" },
    { id: 5, nome: 'Filmes', descricao: "Festivais de Cinema e Pré-Estréias" },
    { id: 6, nome: 'Eventos', descricao: "Feiras e Exposições Variados" },
  ];

const handleRestritoLogin = () => {
  // 🔌 Conexão: Aqui será validado com backend futuramente
  if (codigoAcesso === 'restrito123') {
    setCodigoValido(true);
  } else {
    alert('Código de acesso inválido!');
  };

const handleCredenciaisSubmit = () => {
  // 🔌 Conexão: Aqui será validado com backend futuramente
  console.log('Login restrito com:', credenciais);
  // Redirecionar para a página/ painel restrito (exe: /restrito/dashboard)
  window.location.href = '/restrito/dashboard';
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Cabeçalho */}
      <header className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 mb-4">
        <nav className="flex gap-6">
          <span className="text-lg font-semibold">Portal de Eventos</span>
        </nav>
        <button
          onClick={() => { setTipoAcesso('restrito') || setModalAberto(true) }}
          className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded transition"
        >
          Acesso Restrito
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"b>
        {categorias.map((categoria.index) => (
          <div key={index} className="bg-white rounded-xl dhadow-md overflow-hiden hover:shadow-lg transition">
            <div className="p-6">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                Imagem {categoria.nome}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{categoria.nome}</h3>
              <p className="text-gray-600 mb-4">{categoria.descricao}</p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explorar
              </button>
              </div>
            </div>
        ))}
      </div>"
    </div>

    {/* Modal Restrito */}
    {modalAberto && tipoAcesso === 'restrito' && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class ="bg-white rounded-lg p-8 shadow-lg w-96">
        {!codigoValido ? (
          <>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Código de Acesso</h2>
          <input
            type="text"
            placeholder="Digite o Código"</></div> {
          constructor(parameters) {
            
          }
        }
    }

      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Portal de Eventos</h1>
        {/* Botões de Acesso */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTipoAcesso('cliente')}
            className={`px-6 py-2 rounded-full shadow transition ${tipoAcesso === 'cliente' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Acesso Cliente
          </button>
        </div>
        <button
          onClick={() => setModalAberto(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Entrar / Cadastrar
        </button>
      </div>
      {/* Seção de Cards */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Descubra o Mundo de Eventos que Esperam por Você
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Shows, Palestras, Teatro, Esportes, Filmes e muito mais! Tudo ao Teu Alcance.<br />
          Nunca foi tão fácil participar e fazer presença.
        </p>
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl rounded-2xl overflow-hidden transition-all hover:shadow-2xl"
            >
              {/* Área da Imagem */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Imagem {categoria.nome}</span>
              </div>

              {/* Área de Conteúdo */}
              <div className="bg-white/90 p-6 backdrop-blur-xs">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  {categoria.nome}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {categoria.descricao}
                </p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  Explorar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {tipoAcesso === 'cliente' ? 'Acesso Cliente' : 'Acesso restrito'}
            </h2>
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
            <div className="flex justify-between items-center">
              <button className="text-sm text-blue-600 hover:underline">
                Criar conta
              </button>
              <button
                className="text-sm text-gray-600 hover:underline"
                onClick={() => setModalAberto(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
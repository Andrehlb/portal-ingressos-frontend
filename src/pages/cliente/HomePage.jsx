// src/pages/cliente/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ou sua biblioteca de HTTP preferida
import CategoriaCard from '../../components/CategoriaCard';

export default function HomePage() {
  const navigate = useNavigate();
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoAcesso, setTipoAcesso] = useState('cliente');
  const [codigoAcesso, setCodigoAcesso] = useState('');
  const [codigoValido, setCodigoValido] = useState(false);
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const categorias = [
    { id: 1, nome: 'Shows', descricao: "Festivais e Eventos Musicais" },
    { id: 2, nome: 'Palestras', descricao: "Eventos corporativos e Educacionais" },
    { id: 3, nome: 'Teatro', descricao: "Peças Teatrais e Performances" },
    { id: 4, nome: 'Esportes', descricao: "Eventos Esportivos e Competições" },
    { id: 5, nome: 'Filmes', descricao: "Festivais de Cinema e Pré-Estréias" },
    { id: 6, nome: 'Eventos', descricao: "Feiras e Exposições Variados" },
  ];

  const validarCodigoAcesso = async () => {
    try {
      setLoading(true);
      setErro('');
      
      const response = await axios.post('/api/validar-codigo', { codigo: codigoAcesso });
      
      if (response.data.valido) {
        setCodigoValido(true);
      } else {
        setErro('Código de acesso inválido!');
      }
    } catch (error) {
      setErro('Erro ao validar código. Tente novamente.');
      console.error('Erro na validação:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginRestrito = async () => {
    if (!credenciais.email || !credenciais.senha) {
      setErro('Preencha todos os campos');
      return;
    }

    try {
      setLoading(true);
      setErro('');
      
      const response = await axios.post('/api/login-restrito', credenciais);
      
      if (response.data.autenticado) {
        navigate('/restrito/dashboard');
      } else {
        setErro('Credenciais inválidas');
      }
    } catch (error) {
      setErro('Erro no login. Tente novamente.');
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  };

  const fecharModal = () => {
    setModalAberto(false);
    setCodigoAcesso('');
    setCodigoValido(false);
    setCredenciais({ email: '', senha: '' });
    setErro('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Cabeçalho */}
      <header className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 mb-4">
        <nav className="flex gap-6">
          <span className="text-lg font-semibold">Portal de Eventos</span>
        </nav>
        <button
          onClick={() => {
            setTipoAcesso('restrito');
            setModalAberto(true);
          }}
          className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded transition"
          aria-label="Acesso restrito"
        >
          Acesso Restrito
        </button>
      </header>

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Portal de Eventos</h1>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTipoAcesso('cliente')}
            className={`px-6 py-2 rounded-full shadow transition ${tipoAcesso === 'cliente' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Acesso Cliente
          </button>
        </div>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CategoriaCard key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>

      {/* Modal Restrito */}
      {modalAberto && tipoAcesso === 'restrito' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            {!codigoValido ? (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Código de Acesso</h2>
                <input
                  type="password"
                  placeholder="Digite o Código"
                  value={codigoAcesso}
                  onChange={(e) => setCodigoAcesso(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  onKeyPress={(e) => e.key === 'Enter' && validarCodigoAcesso()}
                />
                {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}
                <button
                  onClick={validarCodigoAcesso}
                  disabled={loading}
                  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-2 disabled:opacity-50"
                >
                  {loading ? 'Validando...' : 'Validar Código'}
                </button>
                <button
                  onClick={fecharModal}
                  className="w-full text-sm text-gray-600 hover:underline"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Login Restrito</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={credenciais.email}
                  onChange={(e) => setCredenciais({ ...credenciais, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mb-3"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={credenciais.senha}
                  onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  onKeyPress={(e) => e.key === 'Enter' && handleLoginRestrito()}
                />
                {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}
                <button
                  onClick={handleLoginRestrito}
                  disabled={loading}
                  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-2 disabled:opacity-50"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </button>
                <button
                  onClick={fecharModal}
                  className="w-full text-sm text-gray-600 hover:underline"
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [codigo, setCodigo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (codigo === 'gerente123') {
            if (email && senha) {
                navigate('/eventos/cadastro');
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        } else {
            navigate('/eventos/cadastro');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Comprar Ingressos</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label>Nome:</label>
                <input type="text" required />

                <label>Código de acesso (se tiver):</label>
                <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

                {codigo === 'gerente123' && (
                    <>
                        <label>Email (gerente):</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label>Senha:</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </>
                )}

                <button type="submit" style={{ marginTop: '1rem' }}>Entrar</button>
            </form>
        </div>
    );
}  
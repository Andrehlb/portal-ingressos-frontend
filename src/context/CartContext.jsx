// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

// 1. Criar o Contexto
const CartContext = createContext();

// 2. Provedor do Carrinho (gerencia estado)
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Adiciona ingresso ao carrinho
  const addToCart = (evento, quantidade = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.evento.id === evento.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.evento.id === evento.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...prevCart, { evento, quantidade }];
    });
  };

  // Remove ingresso do carrinho
  const removeFromCart = (eventoId) => {
    setCart(prevCart => prevCart.filter(item => item.evento.id !== eventoId));
  };

  // Limpa o carrinho
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook personalizado para usar o contexto
export function useCart() {
  return useContext(CartContext);
}
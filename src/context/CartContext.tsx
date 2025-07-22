'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import products from '@/data/products'; // Adjust path if needed

// Define the shape of a product
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  [key: string]: any; // In case product has other fields
}

// Define shape of cart item (product + quantity)
export interface CartItem extends Product {
  quantity: number;
}

// Define context shape
interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  updateCartQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

// Create context with default empty functions
const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  updateCartQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

// Props for provider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('lilis_cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lilis_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        const product = products.find((p: Product) => p.id === productId);
        if (product) {
          return [...prevCart, { ...product, quantity }];
        }
        return prevCart;
      }
    });
  };

  const updateCartQuantity = (productId: string, newQuantity: number) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === productId);
      if (itemIndex > -1) {
        if (newQuantity <= 0) {
          return prevCart.filter((item) => item.id !== productId);
        } else {
          return prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          );
        }
      }
      return prevCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => useContext(CartContext);

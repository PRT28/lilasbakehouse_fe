'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define user type
interface User {
  name: string;
  email: string;
  phone: string;
}

// Define the context shape
interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create context with default empty functions
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

// Props type for provider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('lilis_isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
      setUser({
        name: 'Demo User',
        email: 'demo@example.com',
        phone: '+1234567890',
      });
    }
  }, []);

  const login = (userData: User) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('lilis_isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('lilis_isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);

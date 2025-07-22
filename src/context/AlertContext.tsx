'use client'

import { useState, createContext, useContext, ReactNode } from 'react';

interface AlertContextType {
  alertMessage: (msg: string, msgType?: 'success' | 'info' | 'error') => void;
}

const AlertContext = createContext<AlertContextType>({
  alertMessage: () => {},
});

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<'success' | 'info' | 'error'>('info');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const alertMessage = (msg: string, msgType: 'success' | 'info' | 'error' = 'info') => {
    setMessage(msg);
    setType(msgType);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <AlertContext.Provider value={{ alertMessage }}>
      {children}
      {isVisible && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-[1000] text-white
            ${type === 'success' ? 'bg-green-500' : ''}
            ${type === 'info' ? 'bg-blue-500' : ''}
            ${type === 'error' ? 'bg-red-500' : ''}
            transition-all duration-300 transform translate-x-0 opacity-100`}
        >
          {message}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => useContext(AlertContext);

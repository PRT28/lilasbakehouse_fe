'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faCog, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="https://placehold.co/40x40/d4b29c/ffffff?text=LB" alt="Lili's Bakehouse Logo" className="rounded-full" />
        <Link href="/" className="text-2xl font-bold text-[#6B4F4F]">
          Lili&apos;s Bakehouse
        </Link>
        <p className="text-sm text-gray-500 hidden md:block">THE CRAFT IN CARING</p>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-700 hover:text-[#6B4F4F] font-medium transition duration-300">Home</Link>
        <Link href="/products" className="text-gray-700 hover:text-[#6B4F4F] font-medium transition duration-300">Products</Link>
        <Link href="/about" className="text-gray-700 hover:text-[#6B4F4F] font-medium transition duration-300">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#6B4F4F] font-medium transition duration-300">Contact</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link className="text-gray-700 hover:text-[#6B4F4F] transition duration-300" href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            <span className="ml-1 hidden md:inline">Cart</span>
        </Link>
        {isLoggedIn ? (
          <>
            <Link href="/settings" className="text-gray-700 hover:text-[#6B4F4F] transition duration-300">
              <FontAwesomeIcon icon={faCog} className="text-xl" />
                <span className="ml-1 hidden md:inline">Settings</span>
            </Link>
            <button onClick={logout} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300">
              <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
              <span className="ml-1 hidden md:inline">Logout</span>
            </button>
          </>
        ) : (
          <Link href="/login" className="text-gray-700 hover:text-[#6B4F4F] transition duration-300">
            <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
              <span className="ml-1 hidden md:inline">Login</span>
          </Link>
        )}
        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 hover:text-[#6B4F4F] transition duration-300">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}
      <nav className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-6 flex flex-col space-y-4">
          <button className="self-end text-gray-700 hover:text-[#6B4F4F] transition duration-300 focus:outline-none" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
          <Link href="/" onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 py-2">Home</Link>
          <Link href="/products" onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 py-2">Products</Link>
          <Link href="/about" onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 py-2">About</Link>
          <Link href="/contact" onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 py-2">Contact</Link>
          <Link href="/cart" onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 py-2">Cart</Link>
          {isLoggedIn ? (
            <>
              <Link onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 font-medium py-2" href="/settings">Settings</Link>
              <button onClick={() => { logout(); toggleMobileMenu(); }} className="text-left text-gray-700 hover:text-[#6b4f4f] font-medium py-2">Logout</button>
            </>
          ) : (
            <Link href="/login" onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#6B4F4F] transition duration-300 font-medium py-2">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/consultoria', label: 'Consultoria' },
    { path: '/cursos', label: 'Cursos' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <header className="bg-black border-b border-green-900/30 sticky top-0 z-50 backdrop-blur-md bg-black/90">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">Alberto</span>
              <span className="text-green-500"> Filgueiras</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-green-500 transition-colors font-medium relative group ${
                  isActive(item.path) ? 'text-green-500' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            <a
              href="https://www.instagram.com/albertofilgueiras.phd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/login">
              <Button className="bg-green-600 hover:bg-green-700 text-white border-0">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-gray-300 hover:text-green-500 transition-colors font-medium py-2 ${
                  isActive(item.path) ? 'text-green-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/albertofilgueiras.phd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-green-500 transition-colors py-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Login
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
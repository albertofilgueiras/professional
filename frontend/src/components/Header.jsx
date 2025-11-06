import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">Alberto Filgueiras</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  isActive(item.path) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/albertofilgueiras.phd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/login">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
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
                className={`block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${
                  isActive(item.path) ? 'text-blue-600' : ''
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
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
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
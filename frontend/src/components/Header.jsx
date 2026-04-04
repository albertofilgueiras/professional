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
    { path: '/servicos', label: 'Serviços' },
    { path: '/programa-cerebro-alta-performance', label: 'Cérebro em Alta Performance' },
    { path: '/livros', label: 'Livros' },
    { path: '/curso-psicologia-processos-basicos', label: 'Curso Psicologia e Processos Básicos' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <header className="bg-black border-b border-green-900/30 sticky top-0 z-50 backdrop-blur-md bg-black/90">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold"><span className="text-white">Alberto</span><span className="text-green-500"> Filgueiras</span></div>
          </Link>
          <div className="hidden xl:flex items-center space-x-5">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className={`text-gray-300 hover:text-green-500 transition-colors font-medium relative group text-xs ${isActive(item.path) ? 'text-green-500' : ''}`}>
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`} />
              </Link>
            ))}
            <a href="https://www.instagram.com/albertofilgueiras.phd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <Link to="/login"><Button className="bg-green-600 hover:bg-green-700 text-white border-0 text-xs">Login</Button></Link>
          </div>
          <button className="xl:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)} data-testid="mobile-menu-btn">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 space-y-3">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className={`block text-gray-300 hover:text-green-500 transition-colors font-medium py-2 ${isActive(item.path) ? 'text-green-500' : ''}`} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
            ))}
            <a href="https://www.instagram.com/albertofilgueiras.phd/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-green-500 transition-colors py-2"><Instagram className="w-5 h-5" /><span>Instagram</span></a>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}><Button className="w-full bg-green-600 hover:bg-green-700 text-white">Login</Button></Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

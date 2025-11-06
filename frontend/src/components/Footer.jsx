import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Alberto</span>
              <span className="text-green-500"> Filgueiras</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Psicólogo esportivo, pesquisador e professor universitário com mais de 15 anos de experiência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-green-500 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/consultoria" className="hover:text-green-500 transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="hover:text-green-500 transition-colors">
                  Cursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Cursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/curso/escola-pai-de-atletas" className="hover:text-green-500 transition-colors">
                  Escola Pai de Atletas
                </Link>
              </li>
              <li>
                <Link to="/curso/mindfulness-psicologia-esporte" className="hover:text-green-500 transition-colors">
                  Mindfulness no Esporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <a href="https://wa.me/61415661366" className="hover:text-green-500 transition-colors">
                  +61 0415 661 366
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-sm">a.filgueirasgoncalves@cqu.edu.au</span>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-green-500" />
                <a
                  href="https://www.instagram.com/albertofilgueiras.phd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  @albertofilgueiras.phd
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900/30 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alberto Filgueiras. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
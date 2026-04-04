import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Alberto</span>
              <span className="text-green-500"> Filgueiras</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Psicólogo esportivo, pesquisador e professor universitário com mais de 20 anos de experiência.
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
                <Link to="/servicos" className="hover:text-green-500 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/programa-fortaleza-emocional" className="hover:text-green-500 transition-colors">
                  Fortaleza Emocional
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-green-500 transition-colors">
                  Contato
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
                <a href={"https://wa.me/610415661366?text=" + encodeURIComponent("Olá, gostaria de mais informações de como marcar o meu primeiro atendimento.")} className="hover:text-green-500 transition-colors">
                  +61 0415 661 366
                </a>
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

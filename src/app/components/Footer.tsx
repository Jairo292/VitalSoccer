import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '../../imports/logo_rv.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Vital Soccer Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-3">
              Desarrollando soluciones innovadoras en realidad extendida y tecnología háptica para el deporte del futuro.
            </p>
            <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full">
              <span className="text-secondary text-sm font-semibold">XR NEXUS</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-secondary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('motivacion')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-secondary transition-colors"
                >
                  Motivación
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('objetivos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-secondary transition-colors"
                >
                  Objetivos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('haptico')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-secondary transition-colors"
                >
                  Sistema Háptico
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} XR NEXUS. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Vital Soccer - Proyecto Académico-Tecnológico</p>
        </div>
      </div>
    </footer>
  );
}

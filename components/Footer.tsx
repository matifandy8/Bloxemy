import { Trophy } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mt-24 overflow-hidden"
     
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div
            className="flex items-center justify-center space-x-3 mb-4"
           
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
             
            >
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-black tracking-wide bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              CodemyBlox
            </span>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            La plataforma educativa más divertida e innovadora para aprender programación en Roblox.
            Transforma tu pasión por los juegos en habilidades de programación reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">🚀 Aprendizaje</h3>
            <nav className="space-y-3">
              <Link
                href="/misiones"
                className="block hover:text-blue-300 transition-colors duration-300 text-gray-300"
               
              >
                Misiones Interactivas
              </Link>
              <Link
                href="/scripts"
                className="block hover:text-blue-300 transition-colors duration-300 text-gray-300"
               
              >
                Biblioteca de Scripts
              </Link>
              <Link
                href="/sobre-roblox-studio"
                className="block hover:text-blue-300 transition-colors duration-300 text-gray-300"
               
              >
                Guía de Roblox Studio
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">👨‍👩‍👧‍👦 Comunidad</h3>
            <nav className="space-y-3">
              <Link
                href="/padres-educadores"
                className="block hover:text-purple-300 transition-colors duration-300 text-gray-300"
               
              >
                Para Padres y Educadores
              </Link>
              <Link
                href="/contacto"
                className="block hover:text-purple-300 transition-colors duration-300 text-gray-300"
               
              >
                Contacto y Soporte
              </Link>
              <Link
                href="/"
                className="block hover:text-purple-300 transition-colors duration-300 text-gray-300"
               
              >
                Acerca de Nosotros
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-300">✨ Características</h3>
            <ul className="space-y-3 text-gray-300">
              <li>🎮 Aprendizaje Gamificado</li>
              <li>🤖 Validación Automática</li>
              <li>🔒 100% Seguro</li>
              <li>📱 Responsive Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CodemyBlox. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Hecho con ❤️ para futuros programadores</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

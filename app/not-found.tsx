"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-float" />
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>

          <div className="glass rounded-3xl p-12 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <div className="mb-8">
              <Search className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ¡Página No Encontrada!
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Lo sentimos, la página que buscas no existe o ha sido movida. 
                No te preocupes, ¡aquí tienes algunas opciones para continuar tu aventura de programación!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold flex items-center"
                >
                  <Home className="w-5 h-5 mr-3" />
                  Volver al Inicio
                </Button>
              </Link>
              
              <Link href="/misiones">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 font-semibold rounded-xl flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-3" />
                  Ir a Misiones
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/sobre-roblox-studio">
                <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    🎮 ¿Qué es Roblox Studio?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Conoce la plataforma de desarrollo
                  </p>
                </div>
              </Link>
              
              <Link href="/scripts">
                <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    📝 Ver Scripts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explora ejemplos de código
                  </p>
                </div>
              </Link>
              
              <Link href="/contacto">
                <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    📧 Contacto
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ¿Necesitas ayuda?
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-lg">
              💡 <span className="font-semibold">Tip:</span> Mientras buscas, ¿por qué no practicas un poco de Lua?
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/20">
              <code className="text-sm text-blue-700 font-mono">
                print("¡Hola, programador!") -- ¡Siempre es buen momento para codear!
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
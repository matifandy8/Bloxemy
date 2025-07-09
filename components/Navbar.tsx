"use client";
import Link from "next/link";
import { Trophy, Play, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full sticky top-0 z-50 glass border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <Link href="/">
                <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
                  Bloxemy
                </span>
              </Link>
              <p className="text-gray-600 text-sm font-medium">
                🚀 Tu Academia de Programación Roblox
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            <Link href="/padres-educadores">
              <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                Padres/Educadores
              </button>
            </Link>
            <Link href="/sobre-roblox-studio">
              <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                ¿Qué es Roblox Studio?
              </button>
            </Link>
            <Link href="/contacto">
              <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                Contacto
              </button>
            </Link>
            <Link href="/scripts">
              <button className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-50 hover:to-purple-50 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 px-5 py-3 rounded-xl font-semibold flex items-center border border-gray-200">
                <Play className="w-4 h-4 mr-2" />
                Ver Scripts
              </button>
            </Link>
            <Link href="/misiones">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl font-bold flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Comenzar Misiones
              </button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="p-2 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <Menu className="w-7 h-7 text-blue-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil fuera del navbar */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-blue-600 to-purple-700 shadow-2xl p-8 flex flex-col gap-6 border-l border-white/20 z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Menú</h2>
              <button
                className="p-2 rounded-xl hover:bg-white/10 text-white transition-colors duration-300"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <Link href="/padres-educadores" onClick={() => setOpen(false)}>
              <span className="block py-4 px-4 text-lg text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                👨‍👩‍👧‍👦 Padres/Educadores
              </span>
            </Link>
            <Link href="/sobre-roblox-studio" onClick={() => setOpen(false)}>
              <span className="block py-4 px-4 text-lg text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                🎮 ¿Qué es Roblox Studio?
              </span>
            </Link>
            <Link href="/contacto" onClick={() => setOpen(false)}>
              <span className="block py-4 px-4 text-lg text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                📧 Contacto
              </span>
            </Link>
            <Link href="/scripts" onClick={() => setOpen(false)}>
              <span className="block py-4 px-4 text-lg bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                📝 Ver Scripts
              </span>
            </Link>
            <Link href="/misiones" onClick={() => setOpen(false)}>
              <span className="block py-4 px-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center">
                🚀 Comenzar Misiones
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

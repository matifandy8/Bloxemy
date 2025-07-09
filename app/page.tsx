"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Trophy,
  Code,
  Gamepad2,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const learningPath = [
    {
      title: "Poder de la Creación",
      color: "from-emerald-400 to-teal-600",
      icon: <Zap className="w-6 h-6" />,
      description: "Fundamentos básicos"
    },
    {
      title: "Lenguaje de Objetos",
      color: "from-blue-400 to-indigo-600",
      icon: <Code className="w-6 h-6" />,
      description: "Variables y tipos"
    },
    {
      title: "Pulso del Juego",
      color: "from-purple-400 to-violet-600",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "Lógica de juego"
    },
    {
      title: "Maestro Funciones",
      color: "from-orange-400 to-red-500",
      icon: <Play className="w-6 h-6" />,
      description: "Funciones avanzadas"
    },
    {
      title: "Ciclos Infinitos",
      color: "from-pink-400 to-rose-600",
      icon: <ArrowRight className="w-6 h-6" />,
      description: "Bucles y repetición"
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-float" />
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section
          className="relative flex flex-col items-center justify-center text-center mb-24 py-20 rounded-3xl overflow-hidden glass shadow-2xl border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 z-0" />

          <div className="relative z-10">
            <Badge
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 text-base px-6 py-3 shadow-lg hover:shadow-glow transition-all duration-300 font-medium"
            >
              🏆 Plataforma Educativa #1 para Roblox
            </Badge>

            <h1
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
            >
              Aprende a Programar en
              <br />
              <span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse"
              >
                Roblox Studio
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            >
              Transforma el aprendizaje de programación en Lua en una
              <span className="text-purple-600 font-semibold"> aventura gamificada</span>.
              Completa misiones, desbloquea logros y conviértete en un
              <span className="text-blue-600 font-semibold"> maestro del scripting</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link 
              href="/misiones"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl font-bold flex items-center"
            >
              <Play className="w-6 h-6 mr-3" />
              Comenzar Aventura
            </Link>
            <Link href="/sobre-roblox-studio">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 font-semibold rounded-2xl"
              >
                ¿Qué es Roblox Studio?
              </Button>
            </Link>
          </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white mb-4 px-4 py-2">
              💡 Beneficios
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              ¿Por Qué Aprender a
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"> Programar</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cómo la programación puede transformar tu futuro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 glass group cursor-pointer"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Desarrolla tu Mente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mejora el pensamiento lógico, la resolución de problemas y la
                  creatividad de forma divertida y práctica.
                </p>
              </CardContent>
            </Card>
            <Card
              className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 glass group cursor-pointer"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Crea tus Ideas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Convierte tus ideas en realidad. Desde juegos hasta aplicaciones,
                  la programación te da el poder de crear cualquier cosa.
                </p>
              </CardContent>
            </Card>
            <Card
              className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 glass group cursor-pointer"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Oportunidades Futuras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Los programadores tienen algunas de las carreras mejor pagadas
                  y con mayor demanda en el mercado actual.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          className="mb-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl" />
          <div className="relative glass rounded-3xl py-16 px-8 border border-white/20">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 px-4 py-2">
                🎮 Plataforma
              </Badge>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                ¿Por Qué
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Roblox</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                La plataforma perfecta para comenzar tu viaje en la programación
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card
                className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Fácil y Divertido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Lua es amigable para principiantes y Roblox Studio es
                    intuitivo y completamente visual.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Comunidad Masiva
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Más de 200 millones de usuarios activos y miles de recursos
                    educativos disponibles.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Impacto Real
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Tus creaciones pueden llegar a millones de personas y hasta
                    convertirse en un negocio rentable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white mb-4 px-4 py-2">
              ⭐ Ventajas
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              ¿Por Qué Elegir
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"> Bloxemy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una experiencia de aprendizaje única y segura
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aprendizaje Gamificado</h3>
                <p className="text-gray-600">Sistema progresivo con misiones, logros y recompensas que mantienen la motivación alta.</p>
              </div>

              <div className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Validación Inteligente</h3>
                <p className="text-gray-600">Sistema automático que verifica tu código y te da feedback instantáneo para mejorar.</p>
              </div>

              <div className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Seguro</h3>
                <p className="text-gray-600">Sin registro, sin chat externo, sin datos personales. Enfoque total en el aprendizaje.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 px-4 py-2">
              🚀 Ruta de Aprendizaje
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Tu Camino hacia la
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Maestría</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un viaje estructurado desde los conceptos básicos hasta técnicas avanzadas
            </p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 border border-white/20">
            <div
              className="flex flex-col lg:flex-row items-center justify-center gap-8 relative"
            >
              {learningPath.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center relative group"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl mb-4 border-4 border-white z-10 group-hover:scale-110 transition-all duration-300`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <h3
                      className="text-lg font-bold text-gray-900 mb-2 w-40"
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 w-40">
                      {step.description}
                    </p>
                  </div>
                  {idx < learningPath.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-10 left-full w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 z-0"
                    />
                  )}
                  {idx < learningPath.length - 1 && (
                    <div
                      className="lg:hidden absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 z-0 transform -translate-x-1/2"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white border border-white/20">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" >
              ¿Listo para Comenzar tu
              <span className="text-yellow-300"> Aventura</span>?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya están creando increíbles juegos en Roblox
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/misiones">
              <Button
                size="lg"
                className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                <Play className="w-6 h-6 mr-3" />
                Comenzar Primera Misión
              </Button>
            </Link>
            <Link href="/scripts">
              <Button
                size="lg"
                className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                Ver Scripts de Ejemplo
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gamepad2, Code, Users, Lightbulb, Star, ArrowRight } from "lucide-react";

export default function SobreRobloxStudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-10">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 px-6 py-2 text-base shadow-lg font-medium">
            ¿Qué es Roblox Studio?
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Descubre Roblox Studio
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Roblox Studio es la herramienta oficial para crear juegos y experiencias interactivas en la plataforma Roblox. Es gratuita, potente y perfecta para aprender programación desde cero.
          </p>
        </div>
        <div className="grid gap-8 mb-8">
          <Card className="transition-all duration-300 border-0 glass group">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">¿Qué puedes hacer con Roblox Studio?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Crear tus propios juegos en 3D y experiencias interactivas.</li>
                <li>Aprender a programar usando Lua, un lenguaje sencillo y poderoso.</li>
                <li>Publicar tus creaciones y compartirlas con millones de jugadores.</li>
                <li>Colaborar con otros desarrolladores y aprender en comunidad.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 border-0 glass group">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Ventajas educativas de Roblox Studio</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fomenta la creatividad y el pensamiento lógico.</li>
                <li>Permite aprender programación de forma práctica y divertida.</li>
                <li>Desarrolla habilidades de resolución de problemas y trabajo en equipo.</li>
                <li>Ofrece recursos y tutoriales para todos los niveles.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 border-0 glass group">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">¿Por qué es ideal para aprender?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Interfaz intuitiva y amigable para principiantes.</li>
                <li>Gran comunidad de apoyo y recursos gratuitos.</li>
                <li>Posibilidad de ver resultados inmediatos y motivadores.</li>
                <li>Es totalmente gratis y accesible desde cualquier computadora.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Llamado a la acción */}
        <div className="text-center pt-4">
          <p className="text-gray-600 mb-4">
            <strong className="text-blue-600">¿Listo para comenzar a crear?</strong>
          </p>
          <Link href="/misiones">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-2 mx-auto"
            >
              <ArrowRight className="w-5 h-5" />
              Ver misiones de aprendizaje
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

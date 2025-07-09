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
import { Users, ShieldCheck, Lightbulb, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

export default function PadresEducadoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-10">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 px-6 py-2 text-base shadow-lg font-medium">
            👨‍👩‍👧‍👦 Zona de Padres y Educadores
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Información para Padres y Educadores
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Bloxemy es una plataforma segura y educativa para que niños y adolescentes aprendan programación en Roblox Studio de forma divertida y responsable.
          </p>
        </div>

        <div className="grid gap-8 mb-8">
          <Card className="transition-all duration-300 border-0 glass group">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">¿Por qué es seguro Bloxemy?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>No hay chat ni interacción con desconocidos.</li>
                <li>No se recopilan datos personales.</li>
                <li>Todo el contenido es 100% educativo y apropiado.</li>
                <li>No hay compras ni publicidad externa.</li>
                <li>El progreso se guarda localmente en el navegador.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 border-0 glass group">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Beneficios de Aprender Programación</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Desarrolla el pensamiento lógico y la creatividad.</li>
                <li>Mejora la resolución de problemas y la autonomía.</li>
                <li>Prepara para carreras del futuro en tecnología.</li>
                <li>Fomenta el aprendizaje autodidacta y la perseverancia.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 border-0 glass group">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">¿Cómo pueden acompañar el aprendizaje?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Motivando a los estudiantes a completar misiones y retos.</li>
                <li>Revisando juntos los avances y logros.</li>
                <li>Promoviendo el uso responsable de la tecnología.</li>
                <li>Consultando la sección de preguntas frecuentes o contactando soporte.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <GraduationCap className="w-7 h-7" />
            </div>
            <CardTitle className="text-blue-800 text-xl font-bold flex items-center gap-2">
              🎓 Clases Individuales de Roblox
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                ¿Tu hijo/a quiere llevar su aprendizaje al siguiente nivel? Ofrecemos
                <strong className="text-blue-600"> clases individuales personalizadas</strong>
                donde nuestros instructores expertos enseñan programación avanzada en Roblox Studio.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-3">¿Qué incluyen las clases?</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Atención personalizada y ritmo adaptado al estudiante</li>
                  <li>Proyectos avanzados: juegos completos, sistemas de inventario, IA básica</li>
                  <li>Conceptos de programación profesional: funciones, loops, eventos</li>
                  <li>Preparación para competencias y hackathons de Roblox</li>
                  <li>Certificados de progreso y portafolio de proyectos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Beneficios para el futuro:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Desarrollo de habilidades técnicas valoradas en el mercado laboral</li>
                  <li>Experiencia práctica en desarrollo de videojuegos</li>
                  <li>Posibilidad de monetizar creaciones en Roblox</li>
                  <li>Preparación para carreras en tecnología y gaming</li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-gray-600 mb-4">
                  <strong className="text-blue-600">¡Consulta nuestros planes y horarios!</strong>
                </p>
                <Link href="/contacto">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-2 mx-auto"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Ir a la página de contacto
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

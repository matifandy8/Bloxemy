"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PadresEducadoresPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <Badge
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4"
          >
            Zona de Padres y Educadores
          </Badge>
          <h1
            className="text-4xl font-bold text-gray-800 mb-2"
          >
            Información para Padres y Educadores
          </h1>
          <p className="text-lg text-gray-600">
            CodemyBlox es una plataforma segura y educativa para que niños y
            adolescentes aprendan programación en Roblox Studio de forma
            divertida y responsable.
          </p>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              ¿Por qué es seguro CodemyBlox?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className="list-disc pl-6 text-gray-700 space-y-2"
            >
              <li>
                No hay chat ni interacción con desconocidos.
              </li>
              <li>No se recopilan datos personales.</li>
              <li>
                Todo el contenido es 100% educativo y apropiado.
              </li>
              <li>No hay compras ni publicidad externa.</li>
              <li>
                El progreso se guarda localmente en el navegador.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              Beneficios de Aprender Programación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className="list-disc pl-6 text-gray-700 space-y-2"
            >
              <li>
                Desarrolla el pensamiento lógico y la creatividad.
              </li>
              <li>
                Mejora la resolución de problemas y la autonomía.
              </li>
              <li>
                Prepara para carreras del futuro en tecnología.
              </li>
              <li>
                Fomenta el aprendizaje autodidacta y la perseverancia.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              ¿Cómo pueden acompañar el aprendizaje?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className="list-disc pl-6 text-gray-700 space-y-2"
            >
              <li>
                Motivando a los estudiantes a completar misiones y retos.
              </li>
              <li>Revisando juntos los avances y logros.</li>
              <li>
                Promoviendo el uso responsable de la tecnología.
              </li>
              <li>
                Consultando la sección de preguntas frecuentes o contactando
                soporte si tienen dudas.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

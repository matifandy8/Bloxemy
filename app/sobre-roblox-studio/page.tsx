"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SobreRobloxStudioPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <Badge
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4"
          >
            ¿Qué es Roblox Studio?
          </Badge>
          <h1
            className="text-4xl font-bold text-gray-800 mb-2"
          >
            Descubre Roblox Studio
          </h1>
          <p className="text-lg text-gray-600">
            Roblox Studio es la herramienta oficial para crear juegos y
            experiencias interactivas en la plataforma Roblox. Es gratuita,
            potente y perfecta para aprender programación desde cero.
          </p>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              ¿Qué puedes hacer con Roblox Studio?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className="list-disc pl-6 text-gray-700 space-y-2"
            >
              <li>
                Crear tus propios juegos en 3D y experiencias interactivas.
              </li>
              <li>
                Aprender a programar usando Lua, un lenguaje sencillo y
                poderoso.
              </li>
              <li>
                Publicar tus creaciones y compartirlas con millones de
                jugadores.
              </li>
              <li>
                Colaborar con otros desarrolladores y aprender en comunidad.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              Ventajas educativas de Roblox Studio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className="list-disc pl-6 text-gray-700 space-y-2"
            >
              <li>
                Fomenta la creatividad y el pensamiento lógico.
              </li>
              <li>
                Permite aprender programación de forma práctica y divertida.
              </li>
              <li>
                Desarrolla habilidades de resolución de problemas y trabajo en
                equipo.
              </li>
              <li>
                Ofrece recursos y tutoriales para todos los niveles.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              ¿Por qué es ideal para aprender?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className="list-disc pl-6 text-gray-700 space-y-2"
            >
              <li>
                Interfaz intuitiva y amigable para principiantes.
              </li>
              <li>
                Gran comunidad de apoyo y recursos gratuitos.
              </li>
              <li>
                Posibilidad de ver resultados inmediatos y motivadores.
              </li>
              <li>
                Es totalmente gratis y accesible desde cualquier computadora.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

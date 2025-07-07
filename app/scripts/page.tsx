"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";
import { useState } from "react";

const scripts = [
  {
    title: "Hola Mundo",
    description: "Imprime un mensaje en la consola de Roblox Studio.",
    code: `print("¡Hola, mundo de Roblox!")`,
  },
  {
    title: "Crear Parte Básica",
    description: "Crea un bloque (Part) en el Workspace.",
    code: `local part = Instance.new("Part")
part.Size = Vector3.new(4, 1, 2)
part.Position = Vector3.new(0, 5, 0)
part.BrickColor = BrickColor.new("Bright blue")
part.Parent = workspace`,
  },
  {
    title: "Mensaje en pantalla",
    description: "Muestra un mensaje en la pantalla del jugador.",
    code: `game.StarterGui:SetCore("SendNotification", {
  Title = "¡Bienvenido!",
  Text = "Este es un mensaje en pantalla.",
  Duration = 5
})`,
  },
  {
    title: "Loop de colores",
    description: "Cambia el color de una parte cada segundo.",
    code: `local part = workspace.Part -- Cambia 'Part' por el nombre de tu parte
local colores = {"Bright red", "Bright blue", "Bright green"}
local i = 1
while true do
  part.BrickColor = BrickColor.new(colores[i])
  i = i % #colores + 1
  wait(1)
end`,
  },
];

export default function ScriptsPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4"
          >
            Scripts Roblox
          </Badge>
          <h1
            className="text-4xl font-bold text-gray-800 mb-2"
          >
            Galería de Scripts para Roblox Studio
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Copia y pega estos scripts en Roblox Studio para experimentar y
            aprender. ¡Recuerda siempre probar en un lugar seguro!
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {scripts.map((script, idx) => (
            <Card key={idx} className="relative group">
              <CardHeader>
                <CardTitle
                  className="text-lg flex items-center gap-2"
                >
                  {script.title}
                  <Button
                    size="icon"
                    variant="outline"
                    className="ml-2"
                    onClick={() => handleCopy(script.code, idx)}
                    aria-label="Copiar código"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  {copiedIdx === idx && (
                    <span
                      className="ml-2 text-green-600 text-xs font-semibold"
                    >
                      ¡Copiado!
                    </span>
                  )}
                </CardTitle>
                <CardDescription>
                  {script.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre
                  className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"
                >
                  <code>{script.code}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

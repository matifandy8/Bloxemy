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
import { Copy, Info } from "lucide-react";
import { useState } from "react";
import scripts from "@/lib/scriptsData";


export default function ScriptsPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [expandedScript, setExpandedScript] = useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const toggleExpanded = (idx: number) => {
    setExpandedScript(expandedScript === idx ? null : idx);
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
              <CardContent className="space-y-4">
                <pre
                  className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"
                >
                  <code>{script.code}</code>
                </pre>
                
                {script.howToUse && (
                  <div className="border-t pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(idx)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Info className="w-4 h-4" />
                      {expandedScript === idx ? "Ocultar" : "Cómo usar"}
                    </Button>
                    
                    {expandedScript === idx && (
                      <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="prose prose-sm max-w-none">
                          <div className="whitespace-pre-line text-sm text-gray-700">
                            {script.howToUse}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import missionsData from "@/lib/missionsData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function MisionesPage() {
  const [progress, setProgress] = useState<{
    [key: string]: { completed: boolean };
  }>({});

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("codemyblox-progress") || "{}",
    );
    setProgress(stored);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 text-base px-6 py-3 shadow-lg font-medium"
          >
            🎯 Centro de Misiones
          </Badge>
          <h1
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Todas las 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Misiones</span>
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explora y completa las misiones para dominar la programación en Roblox
            paso a paso. Tu progreso se guarda automáticamente y puedes continuar
            donde lo dejaste. ¡Cada misión completada te acerca más a ser un maestro programador!
          </p>
        </div>
        
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(missionsData).map(([id, mission]) => (
            <Card 
              key={id} 
              className="relative group glass border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden" 
            >
              {progress[id]?.completed && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <CardTitle
                  className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {mission.title}
                  {progress[id]?.completed && (
                    <Badge
                      className="ml-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center gap-2 text-sm px-3 py-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Completada
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {mission.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <Link href={`/mision/${id}`}>
                  <Button
                    className={`w-full font-bold py-6 text-lg rounded-xl transition-all duration-300 ${
                      progress[id]?.completed 
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl" 
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-glow"
                    } hover:scale-105`}
                  >
                    <Play className="w-5 h-5 mr-3" />
                    {progress[id]?.completed ? "Revisar Misión" : "Comenzar Misión"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

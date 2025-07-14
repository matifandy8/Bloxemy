"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Lightbulb,
  Target,
  Code,
} from "lucide-react";
import Link from "next/link";
import missionsData from "@/lib/missionsData";
import { runMissionCode } from "@/lib/services/missionService";
import EditorWrapper from "@/components/EditorWrapper";


export default function MissionPage() {
  const params = useParams();
  const missionId = params.id as string;
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [successMessage, setSuccessMessage] = useState("")

  const missionData = missionsData[missionId as keyof typeof missionsData];
  const mission = missionData
    ? {
      ...missionData,
      id: missionId,
      difficulty: "Principiante",
      category: "Básico",
    }
    : null;

    useEffect(() => {
      if (mission) {
        const progress = JSON.parse(
          localStorage.getItem("Bloxemy-progress") || "{}"
        );
        const savedCode = progress[missionId]?.code;
        setUserCode(savedCode ?? mission.challenge.starterCode);
        const completed = localStorage.getItem("completed")
          ? JSON.parse(localStorage.getItem("completed") || "{}")
          : {};
        const isMissionCompleted = completed[missionId];
        if (isMissionCompleted) {
          setIsCompleted(true);
        }

      }
    }, [mission, missionId]);

  if (!mission) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-2 border-dashed border-red-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Misión no encontrada</h2>
          <p className="text-gray-600 mb-4 text-center max-w-md">
            La misión que buscas no existe o el enlace es incorrecto.<br/>
            Por favor, revisa la URL o elige otra misión para continuar aprendiendo.
          </p>
          <Link href="/misiones">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" /> Volver a misiones
            </Button>
          </Link>
        </div>
      </div>
    );
  }


  const handleCodeChange = (newCode: string | undefined) => {
    const updatedCode = newCode ?? "";
    setUserCode(updatedCode);
  
    const progress = JSON.parse(
      localStorage.getItem("Bloxemy-progress") || "{}"
    );
    progress[missionId] = {
      ...progress[missionId],
      code: updatedCode,
    };
    localStorage.setItem("Bloxemy-progress", JSON.stringify(progress));
  };

  const progress = JSON.parse(localStorage.getItem("Bloxemy-progress") || "{}");

  const handleRunCode = () => {
    runMissionCode(userCode, mission, (output) => {
      setOutput(output);
      if (output.includes("¡Código ejecutado correctamente!")) {
        setSuccessMessage("Mision Completada")
      }
    });
  };
  
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <header
        className="bg-white shadow-sm border-b-2 border-blue-200"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/misiones">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1
                  className="text-2xl font-bold text-gray-800"
                >
                  {mission.title}
                </h1>
                <p className="text-gray-600">
                  {mission.description}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
            {progress[missionId]?.completed && (
                    <Badge
                      className="ml-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center gap-2 text-sm px-3 py-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Completada
                    </Badge>
                  )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tutorial" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="tutorial"
              className="flex items-center space-x-2"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Tutorial</span>
            </TabsTrigger>
            <TabsTrigger
              value="challenge"
              className="flex items-center space-x-2"
            >
              <Target className="w-4 h-4" />
              <span>Reto</span>
            </TabsTrigger>
            <TabsTrigger
              value="lab"
              className="flex items-center space-x-2"
            >
              <Code className="w-4 h-4" />
              <span>Laboratorio</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutorial">
            <Card>
              <CardHeader>
                <CardTitle>
                  📚 Tutorial: {mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <div
                    className="whitespace-pre-line text-gray-700"
                  >
                    {mission.tutorial.content}
                  </div>
                </div>

                {mission.tutorial.code && (
                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        💻 Código de Ejemplo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre
                        className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto"
                      >
                        <code>{mission.tutorial.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                )}

               {mission.tutorial.explanation && (
                 <div className="bg-blue-50 p-4 rounded-lg">
                 <div
                   className="whitespace-pre-line text-gray-700"
                 >
                   {mission.tutorial.explanation}
                 </div>
               </div>
               )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenge">
            <Card>
              <CardHeader>
                <CardTitle
                  className="flex items-center space-x-2"
                >
                  <Target
                    className="w-6 h-6 text-orange-500"
                  />

                  <span>{mission.challenge.title}</span>
                </CardTitle>
                <CardDescription>
                  {mission.challenge.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card
                  className="bg-yellow-50 border-yellow-200"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      🎯 Tu Misión
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre
                      className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto"
                    >
                      <code>
                        {mission.challenge.starterCode}
                      </code>
                    </pre>
                  </CardContent>
                </Card>

                <div className="flex space-x-4">
                  <Button
                    onClick={() => setShowHint(!showHint)}
                    variant="outline"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    {showHint ? "Ocultar Pista" : "Ver Pista"}
                  </Button>
                </div>

                {showHint && (
                  <Card
                    className="bg-blue-50 border-blue-200"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">
                        💡 Pista
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        {mission.challenge.hint}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lab">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle
                    className="flex items-center space-x-2"
                  >
                    <Code
                      className="w-6 h-6 text-blue-500"
                    />

                    <span>Laboratorio de Scripts</span>
                  </CardTitle>
                  <CardDescription>
                    Escribe y prueba tu código aquí
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <EditorWrapper
                      height="300px"
                      language="lua"
                      value={userCode}
                      onChange={handleCodeChange}
                    />
                  </div>
                  <Button
                    onClick={handleRunCode}
                    className="mt-2 w-full"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ejecutar Código
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle
                    className="flex items-center space-x-2"
                  >
                    <Play
                      className="w-6 h-6 text-green-500"
                    />

                    <span>Mundo de Prueba</span>
                  </CardTitle>
                  <CardDescription>
                    Resultados de tu código
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="bg-black text-green-400 p-4 rounded-lg min-h-[300px] font-mono text-sm"
                  >
                    {output ||
                      '> Presiona "Ejecutar Código" para ver los resultados...'}
                  </div>
                  {successMessage && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg border border-emerald-200">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-white animate-pulse" />
                        <div>
                          <h3 className="text-white font-semibold text-lg">
                            ¡Misión Completada!
                          </h3>
                          <p className="text-emerald-100 text-sm">
                            Has superado este desafío con éxito
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

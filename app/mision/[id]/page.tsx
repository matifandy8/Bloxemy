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
import {
  runMissionCode as runCode,
  completeMissionWithValidation as completeMission,
} from "@/lib/services/missionService";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[300px] bg-gray-100 animate-pulse rounded flex items-center justify-center"
      >
        Cargando editor...
      </div>
    ),
  },
) as typeof import("@monaco-editor/react").default;

export default function MissionPage() {
  const params = useParams();
  const missionId = params.id as string;
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);

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
      setUserCode(mission.challenge.starterCode);
      const progress = JSON.parse(
        localStorage.getItem("codemyblox-progress") || "{}",
      );
      setIsCompleted(progress[missionId]?.completed || false);
    }
  }, [mission, missionId]);

  if (!mission) {
    return <div>Misión no encontrada</div>;
  }

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
            {isCompleted && (
              <Badge className="bg-green-500 text-white">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completada
              </Badge>
            )}
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

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div
                    className="whitespace-pre-line text-gray-700"
                  >
                    {mission.tutorial.explanation}
                  </div>
                </div>
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
                  {!isCompleted && (
                    <Button
                      onClick={() =>
                        completeMission(
                          userCode,
                          mission,
                          setOutput,
                          setIsCompleted,
                        )
                      }
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <CheckCircle
                        className="w-4 h-4 mr-2"
                      />
                      Marcar como Completada
                    </Button>
                  )}
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
                    <MonacoEditor
                      height="300px"
                      language="lua"
                      theme="vs-dark"
                      defaultValue={userCode}
                      onChange={(value) => setUserCode(value ?? "")}
                      options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        wordWrap: "on",
                        fontFamily: "Fira Mono, monospace",
                        readOnly: false,
                        automaticLayout: true,
                      }}
                    />
                  </div>
                  <Button
                    onClick={() => runCode(userCode, mission, setOutput)}
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

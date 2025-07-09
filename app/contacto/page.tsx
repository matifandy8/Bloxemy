"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactoForm } from "@/hooks/useContactoForm";

export default function ContactoPage() {
  const {
    formData,
    handleChange,
    handleSubmit,
    sent,
    loading,
  } = useContactoForm({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-10">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
            Contacto
          </Badge>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Contáctanos</h1>
          <p className="text-lg text-gray-600">
            ¿Tienes dudas, sugerencias o necesitas ayuda? ¡Escríbenos!
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            {sent ? (
              <div className="text-green-600 text-center font-semibold py-8">
                ¡Gracias por tu mensaje! Te responderemos pronto.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-1">Nombre</label>
                  <Input
                    required
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Mensaje</label>
                  <Textarea
                    required
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    className="min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
            <div className="mt-8 text-center text-gray-500 text-sm">
              También puedes escribirnos a{" "}
              <a
                href="mailto:soporte@Bloxemy.com"
                className="underline text-blue-600"
              >
                soporte@Bloxemy.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

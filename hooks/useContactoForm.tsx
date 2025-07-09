// hooks/useContactoForm.ts
import { useState } from "react";

export function useContactoForm(defaults: {
  nombre?: string;
  email?: string;
  mensaje?: string;
  edad?: string;
}) {
  const [formData, setFormData] = useState({
    nombre: defaults.nombre || "",
    email: defaults.email || "",
    mensaje: defaults.mensaje || "",
    edad: defaults.edad || "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error en el envío");

      setSent(true);
      setFormData({ nombre: "", email: "", mensaje: "", edad: "" });
    } catch (err) {
      alert("❌ Ocurrió un error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    sent,
    loading,
    handleChange,
    handleSubmit,
  };
}

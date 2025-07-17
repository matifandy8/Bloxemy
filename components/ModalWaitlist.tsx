import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ModalWaitlist({ open, onClose, missionTitle, missionId }: { open: boolean, onClose: () => void, missionTitle: string, missionId: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    setError("");
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Por favor, ingresa un email válido.");
      inputRef.current?.focus();
      return;
    }
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, missionTitle, missionId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Error al enviar el email.");
        return;
      }
      setSent(true);
    } catch (e) {
      setError("Error de red al enviar el email.");
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full flex flex-col items-center border-2 border-blue-200 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl">×</button>
        <span className="text-5xl mb-2">🔒</span>
        <h2 className="text-xl font-bold mb-2 text-gray-800">¡Misión próximamente disponible!</h2>
        <p className="text-gray-600 mb-4 text-center">La misión <b>{missionTitle}</b> aún no está habilitada.<br/>¿Quieres enterarte antes que nadie? ¡Déjanos tu email!</p>
        {sent ? (
          <div className="text-green-600 font-semibold text-center">¡Gracias! Te avisaremos cuando la misión esté lista 🚀</div>
        ) : (
          <>
            <input
              ref={inputRef}
              type="email"
              className="border rounded px-3 py-2 w-full mb-2"
              placeholder="Tu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={sent}
            />
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <Button className="w-full" onClick={handleSend} disabled={sent}>Avisarme</Button>
          </>
        )}
      </div>
    </div>
  );
} 
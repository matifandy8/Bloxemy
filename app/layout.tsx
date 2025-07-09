import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bloxemy - Tu Academia de Programación Roblox",
  description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
  keywords: "programación, roblox, lua, scripting, juegos, educación, coding, desarrollo",
  authors: [{ name: "Bloxemy" }],
  creator: "Bloxemy",
  publisher: "Bloxemy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://Bloxemy.com",
    title: "Bloxemy - Tu Academia de Programación Roblox",
    description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
    siteName: "Bloxemy",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Bloxemy - Academia de Programación Roblox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloxemy - Tu Academia de Programación Roblox",
    description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
    images: ["/placeholder-logo.png"],
    creator: "@Bloxemy",
    site: "@Bloxemy",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

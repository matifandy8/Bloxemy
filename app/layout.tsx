import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CodemyBlox - Tu Academia de Programación Roblox",
  description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
  keywords: "programación, roblox, lua, scripting, juegos, educación, coding, desarrollo",
  authors: [{ name: "CodemyBlox" }],
  creator: "CodemyBlox",
  publisher: "CodemyBlox",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://codemyblox.com",
    title: "CodemyBlox - Tu Academia de Programación Roblox",
    description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
    siteName: "CodemyBlox",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "CodemyBlox - Academia de Programación Roblox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodemyBlox - Tu Academia de Programación Roblox",
    description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
    images: ["/placeholder-logo.png"],
    creator: "@codemyblox",
    site: "@codemyblox",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  manifest: "/manifest.json",
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

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Bloxemy - Tu Academia de Programación Roblox",
  description: "Aprende a programar en Roblox Studio de forma divertida y gamificada. Completa misiones, desbloquea logros y conviértete en un maestro del scripting en Lua.",
  keywords: "programación, roblox, lua, scripting, juegos, educación, coding, desarrollo",
  authors: [{ name: "Bloxemy" }],
  creator: "Bloxemy",
  publisher: "Bloxemy",
  robots: "index, follow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesList = await cookies();
  const nonce = (await headers()).get('x-nonce') || undefined

      return (
      <html lang="es">
        <head nonce={nonce}>
          <meta name="csp-nonce" content={nonce} />
          <Script
          src="https://www.googletagmanager.com/gtag/js"
          strategy="afterInteractive"
          nonce={nonce}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

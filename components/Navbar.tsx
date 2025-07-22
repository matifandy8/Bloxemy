"use client";

import Link from "next/link";
import { Trophy, Play, Menu } from "lucide-react";
import { useState } from "react";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavigationLinkProps {
  href: string;
  label: string;
  icon: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

function NavigationLink({ href, label, icon, variant, onClick, className }: NavigationLinkProps) {
  const baseClasses = "font-medium px-3 py-2 rounded-lg transition-all duration-300";
  
  if (variant === "primary") {
    return (
      <Link href={href} onClick={onClick}>
        <button className={cn(
          baseClasses,
          "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
          "shadow-lg hover:shadow-glow hover:scale-105 text-white font-bold",
          "flex items-center"
        )}>
          <Play className="w-4 h-4 mr-2" />
          {label}
        </button>
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link href={href} onClick={onClick}>
        <button className={cn(
          baseClasses,
          "bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-50 hover:to-purple-50",
          "text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md hover:scale-105",
          "font-semibold flex items-center border border-gray-200"
        )}>
          <Play className="w-4 h-4 mr-2" />
          {label}
        </button>
      </Link>
    );
  }

  return (
    <Link href={href} onClick={onClick}>
      <button className={cn(
        baseClasses,
        "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
        className
      )}>
        {label}
      </button>
    </Link>
  );
}

function MobileNavigationLink({ href, label, icon, variant, onClick }: NavigationLinkProps) {
  const baseClasses = "block py-4 px-4 text-lg rounded-xl transition-all duration-300 font-medium";
  
  if (variant === "primary") {
    return (
      <Link href={href} onClick={onClick}>
        <span className={cn(
          baseClasses,
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
          "hover:from-blue-600 hover:to-purple-700 text-center"
        )}>
          {icon} {label}
        </span>
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link href={href} onClick={onClick}>
        <span className={cn(
          baseClasses,
          "bg-white/10 text-white hover:bg-white/20"
        )}>
          {icon} {label}
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} onClick={onClick}>
      <span className={cn(
        baseClasses,
        "text-white hover:bg-white/10"
      )}>
        {icon} {label}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 glass border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <Link href="/">
                <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
                  Bloxemy
                </span>
              </Link>
              <p className="text-gray-600 text-sm font-medium">
                🚀 Tu Academia de Programación Roblox
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            {NAVIGATION.links.map((link) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                variant={(link as any).variant}
              />
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Abrir menú"
              className="p-2 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <Menu className="w-7 h-7 text-blue-700" />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-md"
          onClick={handleMobileMenuClose}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-blue-600 to-purple-700 shadow-2xl p-8 flex flex-col gap-6 border-l border-white/20 z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Menú</h2>
              <button
                className="p-2 rounded-xl hover:bg-white/10 text-white transition-colors duration-300"
                onClick={handleMobileMenuClose}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {NAVIGATION.links.map((link) => (
              <MobileNavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                variant={(link as any).variant}
                onClick={handleMobileMenuClose}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export const THEME = {
  colors: {
    primary: {
      blue: "#3b82f6",
      purple: "#8b5cf6",
      indigo: "#6366f1",
      emerald: "#10b981",
      teal: "#14b8a6",
      orange: "#f97316",
      red: "#ef4444",
      pink: "#ec4899",
      rose: "#f43f5e",
    },
    gradients: {
      primary: "from-blue-500 to-purple-600",
      secondary: "from-emerald-500 to-teal-600",
      accent: "from-orange-400 to-red-500",
      success: "from-green-500 to-emerald-600",
      warning: "from-yellow-500 to-orange-500",
      error: "from-red-500 to-pink-500",
    },
    backgrounds: {
      light: "from-slate-50 via-blue-50 to-indigo-100",
      dark: "from-gray-900 via-blue-900 to-purple-900",
      glass: "bg-white/10 backdrop-blur-md",
    },
  },
  spacing: {
    container: "container mx-auto px-4",
    section: "py-12",
    card: "p-6",
  },
  animations: {
    hover: "hover:scale-105 transition-transform duration-300",
    button: "hover:shadow-glow hover:scale-105 transition-all duration-300",
    card: "hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
  },
} as const;

export const NAVIGATION = {
  links: [
    {
      href: "/padres-educadores",
      label: "Padres/Educadores",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      href: "/sobre-roblox-studio",
      label: "¿Qué es Roblox Studio?",
      icon: "🎮",
    },
    {
      href: "/contacto",
      label: "Contacto",
      icon: "📧",
    },
    {
      href: "/scripts",
      label: "Ver Scripts",
      icon: "📝",
      variant: "secondary",
    },
    {
      href: "/misiones",
      label: "Comenzar Misiones",
      icon: "🚀",
      variant: "primary",
    },
  ],
} as const;

export const LEARNING_PATH = [
  {
    id: "fundamentals",
    title: "Poder de la Creación",
    color: "from-emerald-400 to-teal-600",
    description: "Fundamentos básicos",
    icon: "Zap",
  },
  {
    id: "variables",
    title: "Lenguaje de Objetos",
    color: "from-blue-400 to-indigo-600",
    description: "Variables y tipos",
    icon: "Code",
  },
  {
    id: "logic",
    title: "Pulso del Juego",
    color: "from-purple-400 to-violet-600",
    description: "Lógica de juego",
    icon: "Gamepad2",
  },
  {
    id: "functions",
    title: "Maestro Funciones",
    color: "from-orange-400 to-red-500",
    description: "Funciones avanzadas",
    icon: "Play",
  },
  {
    id: "loops",
    title: "Ciclos Infinitos",
    color: "from-pink-400 to-rose-600",
    description: "Bucles y repetición",
    icon: "ArrowRight",
  },
] as const;

export const STORAGE_KEYS = {
  PROGRESS: "Bloxemy-progress",
  COMPLETED: "completed",
} as const;

export const ANIMATIONS = {
  float: "animate-float",
  pulse: "animate-pulse-slow",
  glow: "hover:shadow-glow",
} as const; 
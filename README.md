# Bloxemy - Plataforma Educativa de Roblox

Bloxemy es una plataforma educativa divertida e interactiva diseñada para enseñar programación en Lua y Roblox Studio a través de misiones gamificadas, tutoriales y un laboratorio de scripts. ¡Perfecta para estudiantes, educadores y cualquier persona interesada en aprender a programar creando juegos!

## Características
- **Misiones Gamificadas:** Avanza a través de desafíos interactivos de programación y desbloquea logros.
- **Laboratorio de Scripts:** Escribe y prueba código Lua en un editor en tiempo real.
- **Zona Educadores:** Recursos especiales para docentes y padres que quieren guiar el aprendizaje.
- **Tutoriales Paso a Paso:** Explicaciones claras y ejemplos prácticos para cada concepto.
- **Seguimiento de Progreso:** Gana puntos, insignias y sigue tu camino de aprendizaje.

## Tecnologías Utilizadas
- **Frontend:** React, TypeScript, Tailwind CSS
- **Ruteo:** React Router
- **Gestión de Estado:** React Context API

## Primeros Pasos

### Requisitos Previos
- Node.js (recomendado v16 o superior)
- npm

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Bloxemy.git
   cd Bloxemy
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador y ve a `http://localhost:5173` (o el puerto que indique tu terminal).

## Estructura del Proyecto
```
roblox/
  ├── src/
  │   ├── components/      # Componentes reutilizables de UI
  │   ├── contexts/        # Proveedores de Contexto de React
  │   ├── data/            # Datos estáticos (misiones, etc.)
  │   ├── pages/           # Componentes de página para el ruteo
  │   ├── types/           # Tipos de TypeScript
  │   └── index.css        # Estilos globales
  ├── public/              # Recursos estáticos
  ├── package.json         # Metadatos y scripts del proyecto
  └── README.md            # Documentación del proyecto
```

## Contribuir
1. Haz un fork de este repositorio
2. Crea una nueva rama (`git checkout -b feature/tu-feature`)
3. Realiza tus cambios
4. Haz commit y push (`git commit -am 'Agrega nueva funcionalidad' && git push`)
5. Abre un Pull Request

## Licencia
MIT

---

Hecho con ❤️ para la próxima generación de programadores Roblox.

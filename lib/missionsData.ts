const missionsData = {
    "poder-creacion": {
      title: "Poder de la Creación",
      description: "Introducción a Roblox Studio, objetos y print()",
      tutorial: {
        content: `¡Bienvenido a tu primera misión, joven programador!
  
  En Roblox Studio, todo lo que ves son **objetos**. Una pared es un objeto, un personaje es un objeto, ¡incluso la luz es un objeto!
  
  El comando más importante que aprenderás hoy es \`print()\`. Es como darle una voz a tu código para que te hable.
  
  **¿Qué hace print()?**
  - Muestra mensajes en la consola de Roblox Studio
  - Te ayuda a entender qué está pasando en tu código
  - Es perfecto para saludar al mundo de la programación
  - Los desarrolladores profesionales lo usan para depurar código
  
  **Reglas importantes:**
  - El texto debe ir entre comillas: "mi texto"
  - Los números no necesitan comillas: 123
  - Cada print() debe terminar con punto y coma (opcional pero recomendado)`,
        code: `-- Mi primer script en Roblox!
  print("¡Hola, mundo de Roblox!")
  print("Soy un programador en entrenamiento")
  print("Mi nombre es SuperCoder")
  
  -- También puedes imprimir números
  print(2024)
  print(10 + 5)
  print("El resultado es:", 10 + 5)
  
  -- Comentarios te ayudan a recordar qué hace tu código
  -- Todo lo que empiece con -- es un comentario`,
        explanation: `**¿Qué está pasando aquí?**
  
  1. **Comentarios**: Las líneas que empiezan con \`--\` son notas para ti
  2. **Texto**: \`print("texto")\` muestra palabras entre comillas
  3. **Números**: \`print(123)\` muestra números sin comillas
  4. **Matemáticas**: Puedes hacer cálculos dentro de print()
  5. **Múltiples valores**: Puedes imprimir texto y números juntos`,
      },
      challenge: {
        title: "Reto: Tu Primer Saludo Completo",
        description:
          "Crea un script que imprima exactamente 3 mensajes: tu nombre, tu edad y tu juego favorito de Roblox. Cada mensaje debe ser diferente.",
        starterCode: `-- Completa este código con tu información personal
  -- Debes tener exactamente 3 print() diferentes
  
  print("Mi nombre es: ")
  print("Tengo años")
  print("Mi juego favorito de Roblox es: ")`,
        solution: `-- Ejemplo de solución correcta
  print("Mi nombre es: Alex")
  print("Tengo 12 años")
  print("Mi juego favorito de Roblox es: Adopt Me!")`,
        hint: "🔍 Pista: Debes completar cada print() con tu información real. Asegúrate de que cada mensaje sea diferente y contenga las palabras clave: 'nombre', 'años', 'juego'.",
        validation: {
          requiredPrints: 3,
          mustContain: ["nombre", "años", "juego"],
          customValidation: (code: string) => {
            const prints = code.match(/print\s*$$[^)]+$$/g) || []
            const hasEmptyPrints = prints.some((p) => p.includes('""') || p.includes("''"))
            if (hasEmptyPrints) {
              return {
                isValid: false,
                message: "❌ No dejes prints vacíos\n💡 Cada print() debe tener información real, no cadenas vacías",
              }
            }
            return { isValid: true, message: "" }
          },
        },
      },
    },
    "lenguaje-objetos": {
      title: "El Lenguaje de los Objetos",
      description: "Variables y propiedades básicas",
      tutorial: {
        content: `¡Excelente trabajo en tu primera misión! Ahora aprenderás sobre las **variables**.
  
  Las variables son como **cajas mágicas** donde puedes guardar información. En Lua, crear una variable es súper fácil, pero muy poderoso.
  
  **¿Por qué usar variables?**
  - Guardan información que puedes usar después
  - Hacen tu código más organizado y fácil de leer
  - Te permiten cambiar valores fácilmente
  - Son la base de toda programación
  
  **Tipos de datos en Lua:**
  - **String (texto)**: Palabras entre comillas "Hola"
  - **Number (números)**: Para matemáticas y contadores 123
  - **Boolean**: true o false (verdadero o falso)
  - **Nil**: Valor vacío (como una caja sin nada)
  
  **Reglas para nombres de variables:**
  - Deben empezar con letra o guión bajo
  - No pueden tener espacios (usa guión bajo: mi_variable)
  - No pueden ser palabras reservadas de Lua`,
        code: `-- Creando variables con local
  local nombreJugador = "SuperCoder123"
  local edad = 12
  local tieneRobux = true
  local puntaje = 0
  local nivelFavorito = nil
  
  -- Usando las variables con concatenación (..)
  print("=== PERFIL DE JUGADOR ===")
  print("Jugador: " .. nombreJugador)
  print("Edad: " .. edad)
  print("Puntaje actual: " .. puntaje)
  print("Tiene Robux: " .. tostring(tieneRobux))
  
  -- Cambiando valores de variables
  puntaje = puntaje + 100
  edad = edad + 1
  
  print("\\n=== DESPUÉS DE JUGAR ===")
  print("Nuevo puntaje: " .. puntaje)
  print("Nueva edad: " .. edad)`,
        explanation: `**Conceptos importantes:**
  
  1. **local**: Crea una variable nueva (siempre usa local)
  2. **=**: Asigna un valor a la variable
  3. **..**: Une (concatena) texto con variables
  4. **tostring()**: Convierte boolean a texto para mostrarlo
  5. **\\n**: Crea una nueva línea en el output
  6. **Reasignación**: Puedes cambiar el valor después: puntaje = puntaje + 100`,
      },
      challenge: {
        title: "Reto: Perfil de Jugador Completo",
        description:
          "Crea 4 variables diferentes para un perfil de jugador y muéstralas usando print() con concatenación. Debes usar todos los tipos de datos.",
        starterCode: `-- Crea tu perfil de jugador completo
  -- Necesitas exactamente 4 variables con local
  
  local nombreUsuario = 
  local nivelActual = 
  local juegoFavorito = 
  local esVIP = 
  
  -- Muestra tu perfil usando concatenación (..)
  print("=== PERFIL DE JUGADOR ===")
  -- Agrega aquí 4 prints que muestren cada variable`,
        solution: `-- Ejemplo de solución completa
  local nombreUsuario = "RobloxMaster"
  local nivelActual = 25
  local juegoFavorito = "Brookhaven"
  local esVIP = true
  
  print("=== PERFIL DE JUGADOR ===")
  print("Usuario: " .. nombreUsuario)
  print("Nivel: " .. nivelActual)
  print("Juego favorito: " .. juegoFavorito)
  print("VIP: " .. tostring(esVIP))`,
        hint: "🔍 Pista: Usa 'local' para cada variable, asigna valores reales, y usa '..' para concatenar en print(). Para boolean usa tostring().",
        validation: {
          requiredVariables: ["nombreUsuario", "nivelActual", "juegoFavorito", "esVIP"],
          requiredPrints: 4,
          mustContain: ["local", "print", ".."],
          customValidation: (code: string) => {
            const prints = code.match(/print\s*$$[^)]+$$/g) || []
            const hasConcatenation = prints.some((p) => p.includes(".."))
            if (!hasConcatenation) {
              return {
                isValid: false,
                message: "❌ Debes usar concatenación (..)\n💡 Ejemplo: print('Nombre: ' .. nombreUsuario)",
              }
            }
  
            if (!code.includes("tostring")) {
              return {
                isValid: false,
                message: "❌ Usa tostring() para mostrar valores boolean\n💡 Ejemplo: print('VIP: ' .. tostring(esVIP))",
              }
            }
  
            return { isValid: true, message: "" }
          },
        },
      },
    },
    "pulso-juego": {
      title: "El Pulso del Juego",
      description: "Eventos y condicionales",
      tutorial: {
        content: `¡Felicidades por llegar hasta aquí! Ahora aprenderás sobre **condicionales** - la lógica que hace que los juegos sean inteligentes.
  
  Los condicionales son como preguntas que tu código se hace a sí mismo: "¿Si esto es verdad, entonces qué hago?"
  
  **Palabras mágicas:**
  - \`if\` = "si"
  - \`then\` = "entonces"
  - \`else\` = "si no"
  - \`end\` = "fin"
  
  En Roblox, los condicionales controlan todo: desde abrir puertas hasta dar puntos.`,
        code: `-- Ejemplo: Sistema de puntos
  local puntaje = 150
  local nivel = 1
  
  -- Verificar nivel basado en puntaje
  if puntaje >= 100 then
      nivel = 2
      print("¡Felicidades! Subiste al nivel 2")
  else
      print("Necesitas más puntos para subir de nivel")
  end
  
  -- Verificar logros
  if puntaje >= 200 then
      print("🏆 ¡Logro desbloqueado: Maestro!")
  elseif puntaje >= 100 then
      print("⭐ ¡Logro desbloqueado: Principiante!")
  else
      print("Sigue jugando para desbloquear logros")
  end`,
        explanation: `**Operadores de comparación:**
  - \`==\` igual a
  - \`>=\` mayor o igual que
  - \`<=\` menor o igual que
  - \`>\` mayor que
  - \`<\` menor que
  - \`~=\` diferente de`,
      },
      challenge: {
        title: "Reto: Sistema de Acceso VIP",
        description:
          "Crea un sistema que verifique si un jugador puede acceder a áreas VIP basado en su nivel y estado VIP.",
        starterCode: `-- Sistema de acceso VIP
  local nivelJugador = 15
  local esVIP = true
  local tienePase = false
  
  -- Tu código aquí
  -- Verifica si puede acceder a:
  -- Área Normal: nivel >= 5
  -- Área VIP: nivel >= 10 Y esVIP = true
  -- Área Exclusiva: nivel >= 20 Y tienePase = true`,
        solution: `-- Sistema de acceso VIP
  local nivelJugador = 15
  local esVIP = true
  local tienePase = false
  
  print("=== SISTEMA DE ACCESO ===")
  
  if nivelJugador >= 5 then
      print("✅ Acceso a Área Normal concedido")
  else
      print("❌ Necesitas nivel 5 para el Área Normal")
  end
  
  if nivelJugador >= 10 and esVIP then
      print("✅ Acceso a Área VIP concedido")
  else
      print("❌ Necesitas nivel 10 y ser VIP")
  end
  
  if nivelJugador >= 20 and tienePase then
      print("✅ Acceso a Área Exclusiva concedido")
  else
      print("❌ Necesitas nivel 20 y pase especial")
  end`,
        hint: 'Usa "and" para verificar múltiples condiciones. Recuerda usar >= para "mayor o igual".',
        validation: {
          requiredKeywords: ["if", "then", "end", "and"],
          requiredPrints: 3,
          mustContain: [">=", "and"],
        },
      },
    },
    "maestro-funciones": {
      title: "El Maestro de las Funciones",
      description: "Creando y usando funciones",
      tutorial: {
        content: `¡Bienvenido al mundo de las **funciones**! Las funciones son como **máquinas mágicas** que toman información, la procesan y devuelven un resultado.
  
  **¿Qué son las funciones?**
  - Son bloques de código reutilizable
  - Pueden recibir información (parámetros)
  - Pueden devolver resultados (return)
  - Hacen tu código más organizado y eficiente
  
  **¿Por qué usar funciones?**
  - **DRY**: Don't Repeat Yourself (No te repitas)
  - Facilitan encontrar y arreglar errores
  - Hacen el código más legible
  - Permiten trabajar en equipo más fácilmente
  
  **Anatomía de una función:**
  \`\`\`lua
  function nombreFuncion(parametro1, parametro2)
      -- código de la función
      local resultado = parametro1 + parametro2
      return resultado  -- devuelve el resultado
  end
  \`\`\`
  
  **Conceptos clave:**
  - **function**: palabra clave para crear funciones
  - **parámetros**: información que recibe la función
  - **return**: valor que devuelve la función
  - **llamada**: usar la función con su nombre()`,
        code: `-- Función simple sin parámetros
  function saludar()
      print("¡Hola, programador!")
      print("¡Bienvenido al mundo de las funciones!")
  end
  
  -- Función con parámetros y return
  function calcularDaño(ataque, defensa)
      local daño = ataque - defensa
      if daño < 0 then
          daño = 0  -- No puede haber daño negativo
      end
      return daño
  end
  
  -- Función para crear personajes
  function crearPersonaje(nombre, nivel, clase)
      print("=== NUEVO PERSONAJE CREADO ===")
      print("Nombre: " .. nombre)
      print("Nivel: " .. nivel)
      print("Clase: " .. clase)
      print("¡Personaje listo para la aventura!")
      return true  -- indica que se creó exitosamente
  end
  
  -- Usando las funciones (llamadas)
  saludar()
  
  local dañoFinal = calcularDaño(50, 20)
  print("Daño causado: " .. dañoFinal)
  
  local personajeCreado = crearPersonaje("DragonSlayer", 25, "Guerrero")
  print("Personaje creado: " .. tostring(personajeCreado))`,
        explanation: `**Conceptos importantes:**
  
  1. **Declaración**: \`function nombre()\` crea la función
  2. **Parámetros**: Variables que recibe la función
  3. **Return**: Devuelve un valor al código que llamó la función
  4. **Llamada**: \`nombreFuncion()\` ejecuta la función
  5. **Scope**: Variables dentro de funciones son locales
  6. **Reutilización**: Una función se puede llamar muchas veces`,
      },
      challenge: {
        title: "Reto: Sistema de Experiencia para Roblox",
        description:
          "Crea 3 funciones específicas para un sistema de experiencia: calcular XP ganado, determinar nivel, y mostrar estadísticas. Cada función debe tener parámetros y return.",
        starterCode: `-- Sistema de experiencia para juegos de Roblox
  -- Debes crear exactamente 3 funciones:
  
  -- 1. calcularXP(enemigosVencidos, dificultad)
  --    Debe retornar: enemigosVencidos * dificultad * 10
  
  -- 2. calcularNivel(xpTotal)
  --    Debe retornar: xpTotal dividido entre 100 (sin decimales)
  
  -- 3. mostrarEstadisticas(nombre, xp, nivel)
  --    Debe imprimir las estadísticas del jugador
  
  -- Escribe tus funciones aquí:
  
  
  -- Prueba tus funciones (NO BORRES ESTA PARTE):
  local xpGanado = calcularXP(5, 3)
  local nivelActual = calcularNivel(xpGanado)
  mostrarEstadisticas("SuperGamer", xpGanado, nivelActual)`,
        solution: `-- Sistema de experiencia para juegos de Roblox
  
  function calcularXP(enemigosVencidos, dificultad)
      return enemigosVencidos * dificultad * 10
  end
  
  function calcularNivel(xpTotal)
      return math.floor(xpTotal / 100)
  end
  
  function mostrarEstadisticas(nombre, xp, nivel)
      print("=== ESTADÍSTICAS DEL JUGADOR ===")
      print("Nombre: " .. nombre)
      print("XP Total: " .. xp)
      print("Nivel: " .. nivel)
      print("¡Sigue así, campeón!")
  end
  
  -- Prueba de las funciones
  local xpGanado = calcularXP(5, 3)
  local nivelActual = calcularNivel(xpGanado)
  mostrarEstadisticas("SuperGamer", xpGanado, nivelActual)`,
        hint: "🔍 Pista: Cada función debe tener 'function nombre()' y 'end'. Las que calculan deben usar 'return'. Usa math.floor() para quitar decimales.",
        validation: {
          requiredFunctions: ["calcularXP", "calcularNivel", "mostrarEstadisticas"],
          requiredKeywords: ["function", "return", "end"],
          mustContain: ["function", "return"],
          requireReturn: true,
          customValidation: (code: string) => {
            if (!code.includes("enemigosVencidos * dificultad * 10")) {
              return {
                isValid: false,
                message: "❌ calcularXP debe usar la fórmula: enemigosVencidos * dificultad * 10",
              }
            }
  
            if (!code.includes("math.floor")) {
              return {
                isValid: false,
                message:
                  "❌ calcularNivel debe usar math.floor() para quitar decimales\n💡 Ejemplo: return math.floor(xpTotal / 100)",
              }
            }
  
            const funcMatch = code.match(/function\s+mostrarEstadisticas[\s\S]*?end/i)
            if (funcMatch && !funcMatch[0].includes("print")) {
              return {
                isValid: false,
                message: "❌ mostrarEstadisticas debe tener comandos print()\n💡 Debe mostrar nombre, xp y nivel",
              }
            }
  
            return { isValid: true, message: "" }
          },
        },
      },
    },
    "ciclos-infinitos": {
      title: "Los Ciclos Infinitos",
      description: "Loops y repeticiones",
      tutorial: {
        content: `¡Llegaste a la misión más poderosa! Los **loops** (ciclos) te permiten repetir código automáticamente. ¡Es como tener un ejército de robots haciendo trabajo por ti!
  
  **¿Qué son los loops?**
  - Estructuras que repiten código múltiples veces
  - Evitan escribir el mismo código una y otra vez
  - Son fundamentales en la programación de juegos
  - Permiten crear efectos, animaciones y sistemas complejos
  
  **Tipos de loops en Lua:**
  
  **1. FOR Loop Básico:**
  \`\`\`lua
  for i = 1, 5 do
      print("Número: " .. i)
  end
  \`\`\`
  
  **2. FOR Loop con Incremento:**
  \`\`\`lua
  for i = 0, 10, 2 do  -- de 0 a 10, de 2 en 2
      print("Par: " .. i)
  end
  \`\`\`
  
  **3. WHILE Loop:**
  \`\`\`lua
  local contador = 1
  while contador <= 5 do
      print("Vuelta: " .. contador)
      contador = contador + 1
  end
  \`\`\`
  
  **¿Cuándo usar loops?**
  - Crear múltiples objetos (enemigos, monedas, etc.)
  - Procesar listas de jugadores
  - Animaciones y efectos visuales
  - Sistemas de puntuación y estadísticas`,
        code: `-- Loop FOR básico - Cuenta del 1 al 5
  print("=== CONTEO BÁSICO ===")
  for i = 1, 5 do
      print("Número: " .. i)
  end
  
  -- Loop FOR con incremento personalizado
  print("\\n=== NÚMEROS PARES ===")
  for i = 2, 10, 2 do
      print("Par: " .. i)
  end
  
  -- Loop WHILE con condición
  print("\\n=== SIMULACIÓN DE COMBATE ===")
  local vida = 100
  local turno = 1
  
  while vida > 0 do
      print("Turno " .. turno .. " - Vida restante: " .. vida)
      vida = vida - 25  -- Pierde 25 de vida cada turno
      turno = turno + 1
      
      if turno > 10 then  -- Evitar loop infinito
          break
      end
  end
  print("¡Combate terminado!")
  
  -- Loops anidados - Crear una cuadrícula
  print("\\n=== CREANDO MAPA 3x3 ===")
  for fila = 1, 3 do
      for columna = 1, 3 do
          print("Posición [" .. fila .. "," .. columna .. "] creada")
      end
      print("--- Fila " .. fila .. " completada ---")
  end`,
        explanation: `**Sintaxis importante:**
  
  1. **for i = inicio, fin do**: Loop básico
  2. **for i = inicio, fin, paso do**: Loop con incremento personalizado  
  3. **while condición do**: Loop que continúa mientras la condición sea verdadera
  4. **do...end**: Delimita el código que se repite
  5. **break**: Sale del loop inmediatamente
  6. **Loops anidados**: Un loop dentro de otro loop
  7. **Variables de control**: i, fila, columna son variables que cambian en cada iteración`,
      },
      challenge: {
        title: "Reto: Generador de Oleadas de Enemigos",
        description:
          "Crea un sistema que genere 3 oleadas de enemigos usando loops anidados. Cada oleada debe tener más enemigos que la anterior (2, 4, 6 enemigos respectivamente).",
        starterCode: `-- Generador de oleadas de enemigos para Roblox
  -- Debes crear un sistema que:
  -- 1. Genere exactamente 3 oleadas (usa for i = 1, 3)
  -- 2. Cada oleada tenga más enemigos: Oleada 1=2, Oleada 2=4, Oleada 3=6
  -- 3. Use loops anidados (un for dentro de otro for)
  -- 4. Muestre información de cada enemigo
  
  print("=== INICIANDO INVASIÓN ===")
  
  -- Tu código aquí:
  -- Usa: for oleada = 1, 3 do
  --   Dentro usa: for enemigo = 1, numEnemigos do
  
  
  print("\\n🏆 ¡INVASIÓN COMPLETADA!")`,
        solution: `-- Generador de oleadas de enemigos para Roblox
  
  print("=== INICIANDO INVASIÓN ===")
  
  for oleada = 1, 3 do
      print("\\n🌊 OLEADA " .. oleada .. " COMENZANDO!")
      
      local numEnemigos = oleada * 2  -- 2, 4, 6 enemigos
      print("Preparando " .. numEnemigos .. " enemigos...")
      
      for enemigo = 1, numEnemigos do
          print("👹 Enemigo " .. enemigo .. " de la oleada " .. oleada)
          print("   Vida: " .. (50 + oleada * 20))
          print("   Ataque: " .. (10 + oleada * 5))
          print("   Velocidad: " .. (5 + oleada * 2))
          print("   ---")
      end
      
      print("✅ Oleada " .. oleada .. " completada!")
      print("Enemigos derrotados: " .. numEnemigos)
  end
  
  print("\\n🏆 ¡INVASIÓN COMPLETADA!")
  print("¡Eres un verdadero héroe!")`,
        hint: "🔍 Pista: Usa 'for oleada = 1, 3 do' para las oleadas, y dentro 'for enemigo = 1, numEnemigos do'. Calcula numEnemigos = oleada * 2.",
        validation: {
          requiredKeywords: ["for", "do", "end"],
          nestedLoops: true,
          requiredPrints: 8,
          mustContain: ["for", "do", "end"],
          customValidation: (code: string) => {
            if (!code.includes("oleada") || !code.includes("enemigo")) {
              return {
                isValid: false,
                message:
                  "❌ Debes usar variables 'oleada' y 'enemigo' en tus loops\n💡 for oleada = 1, 3 do\n    for enemigo = 1, numEnemigos do",
              }
            }
  
            if (!code.includes("oleada * 2") && !code.includes("2 * oleada")) {
              return {
                isValid: false,
                message: "❌ Debes calcular numEnemigos = oleada * 2\n💡 Esto da 2, 4, 6 enemigos para cada oleada",
              }
            }
  
            const printCount = (code.match(/print\s*\(/g) || []).length
            if (printCount < 8) {
              return {
                isValid: false,
                message:
                  "❌ Necesitas más prints para mostrar información detallada\n💡 Muestra información de oleadas y enemigos",
              }
            }
  
            return { isValid: true, message: "" }
          },
        },
      },
    },
  }

export default missionsData; 
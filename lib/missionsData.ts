const missionsData: Record<string, any> = {
  "hola-roblox": {
    title: "¡Hola, Roblox! (print y comentarios)",
    description: "Aprende a mostrar mensajes en la consola y a usar comentarios.",
    tutorial: {
      content: `En programación, los comentarios sirven para dejar notas o aclaraciones en el código, y la función print() te permite mostrar mensajes en la consola para ver resultados o depurar tu script. Usar comentarios y print es fundamental para entender y mejorar tu código.`,
      code: `-- Este es un comentario
print("¡Hola, Roblox!")
print("Mi primer script")
-- Puedes escribir lo que quieras aquí`,
      explanation: `- print() muestra mensajes en la consola
- Los comentarios empiezan con -- y no se ejecutan`
    },
    challenge: {
      title: "Reto: Tu primer saludo",
      description: "Imprime tu color favorito y una meta de aprendizaje usando print(). Agrega al menos un comentario.",
      starterCode: `-- Escribe tu código aquí
`,
      solution: `-- Mi meta en Roblox
print("Mi color favorito es el verde")
print("Quiero aprender a crear juegos")`,
      hint: "Usa print() y al menos un comentario. No repitas los textos del ejemplo.",
      validation: {
        requiredPrints: 2,
        mustContain: ["print"],
        customValidation: (code: string) => {
          const tutorialCode = `-- Este es un comentario\nprint(\"¡Hola, Roblox!\")\nprint(\"Mi primer script\")\n-- Puedes escribir lo que quieras aquí`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "No copies el ejemplo del tutorial. Escribe tus propios mensajes." };
          }
          return { isValid: true, message: "" };
        },
      },
    },
  },
  "variables-basicas": {
    title: "Variables y Tipos Básicos",
    description: "Declara variables de diferentes tipos y muéstralas.",
    tutorial: {
      content: `Las variables son espacios donde puedes guardar información para usarla después. En Lua puedes guardar texto (string), números (number) y valores lógicos (booleanos: true/false). Aprender a declarar y usar variables es clave para cualquier programa.`,
      code: `local mascota = "Perro"
local puntos = 50
local tieneChip = true
print(mascota)
print(puntos)
print(tieneChip)`,
      explanation: `- Usa local para declarar variables
- Puedes imprimir variables con print()`
    },
    challenge: {
      title: "Reto: Declara y muestra variables",
      description: "Crea una variable string, una number y una boolean. Imprímelas con print(). Usa valores diferentes al ejemplo.",
      starterCode: `-- Declara tus variables aquí
`,
      solution: `local animal = "Gato"
local edadMascota = 5
local tieneCollar = false
print(animal)
print(edadMascota)
print(tieneCollar)`,
      hint: "Usa nombres y valores distintos al ejemplo del tutorial.",
      validation: {
        requiredPrints: 3,
        mustContain: ["local", "print"],
        customValidation: (code: string) => {
          const tutorialCode = `local mascota = \"Perro\"\nlocal puntos = 50\nlocal tieneChip = true\nprint(mascota)\nprint(puntos)\nprint(tieneChip)`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "No copies el ejemplo del tutorial. Usa tus propios nombres y valores." };
          }
          const hasBoolean = /\b(true|false)\b/.test(code);
          const hasNumber = /\b\d+\b/.test(code);
          const hasString = /"[^"]*"|'[^']*'/.test(code);
          if (!hasBoolean) {
            return { isValid: false, message: "Debes declarar al menos un booleano (true o false)." };
          }
          if (!hasNumber) {
            return { isValid: false, message: "Debes declarar al menos un número." };
          }
          if (!hasString) {
            return { isValid: false, message: "Debes declarar al menos un string (texto entre comillas)." };
          }
          return { isValid: true, message: "" };
        },
      },
    },
  },
  "condicionales-zona": {
    title: "Condicionales: Acceso a Zona Especial",
    description: "Usa if/then/else para tomar decisiones según condiciones.",
    tutorial: {
      content: `Los condicionales permiten que tu código tome decisiones. Con if, then, else y end puedes ejecutar diferentes acciones según si una condición se cumple o no. Esto es esencial para crear lógica y reglas en cualquier programa o juego.`,
      code: `local tieneLlave = false
if tieneLlave then
    print("¡Puerta abierta!")
else
    print("Necesitas la llave para entrar")
end`,
      explanation: `¿Qué es un condicional?\nUn condicional es una forma de que tu código \"pregunte\" algo y actúe según la respuesta.\n\n- if: pregunta una condición (por ejemplo, ¿tieneLlave?)\n- then: indica qué hacer si la respuesta es SÍ (verdadero)\n- else: indica qué hacer si la respuesta es NO (falso)\n- end: marca el final del bloque condicional\n\nEjemplo:\nSi tieneLlave es true, se muestra \"¡Puerta abierta!\".\nSi tieneLlave es false, se muestra \"Necesitas la llave para entrar\".\n\nEsto es útil para crear reglas y caminos diferentes en tus juegos.`
    },
    challenge: {
      title: "Reto: Acceso VIP",
      description: "Si el jugador es VIP, imprime '¡Bienvenido al área secreta!'. Si no, imprime 'Acceso restringido'. Usa nombres y mensajes distintos al ejemplo.",
      starterCode: `local tienePase = true
-- Tu código aquí
`,
      solution: `local tienePase = true
if tienePase then
    print("¡Bienvenido al área secreta!")
else
    print("Acceso restringido")
end`,
      hint: "No uses los mismos nombres ni mensajes del tutorial.",
      validation: {
        requiredKeywords: ["if", "then", "else", "end"],
        requiredPrints: 2,
        mustContain: ["if", "then", "else", "end"],
        customValidation: (code: string) => {
          const tutorialCode = `local tieneLlave = false\nif tieneLlave then\n    print(\"¡Puerta abierta!\")\nelse\n    print(\"Necesitas la llave para entrar\")\nend`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "No copies el ejemplo del tutorial. Usa nombres y mensajes diferentes." };
          }
          return { isValid: true, message: "" };
        },
      },
    },
  },
  "funcion-saludo": {
    title: "Funciones: Saludo Personalizado",
    description: "Crea y usa funciones simples para saludar a un jugador.",
    tutorial: {
      content: `Las funciones te permiten agrupar instrucciones y reutilizarlas. Puedes pasarles información (parámetros) y hacer que realicen tareas específicas. Usar funciones hace tu código más ordenado y fácil de mantener.`,
      code: `function bienvenida(nombre)
    print("¡Bienvenida, " .. nombre .. "!")
end
bienvenida("Luna")`,
      explanation: `- function crea una función
- .. concatena texto y variables
- Llama la función con su nombre y un valor entre paréntesis`
    },
    challenge: {
      title: "Reto: Saludo personalizado",
      description: "Crea una función que reciba un apodo y lo salude con un mensaje diferente al ejemplo. Llama la función con tu apodo.",
      starterCode: `-- Escribe tu función aquí
`,
      solution: `function saludar(apodo)
    print("¡Saludos, " .. apodo .. "! ¿Listo para jugar?")
end
saludar("Coder")`,
      hint: "Usa un apodo y un mensaje distinto al ejemplo.",
      validation: {
        requiredKeywords: ["function", "end", ".."],
        requiredPrints: 1,
        mustContain: ["function", ".."],
        customValidation: (code: string) => {
          const tutorialCode = `function bienvenida(nombre)\n    print(\"¡Bienvenida, " .. nombre .. "!\")\nend\nbienvenida(\"Luna\")`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "No copies el ejemplo del tutorial. Usa un apodo y mensaje diferente." };
          }
          // Validar que haya una función definida y llamada con un string
          const funcDefMatch = code.match(/function\s+(\w+)\s*\((\w+)\)/);
          if (!funcDefMatch) {
            return { isValid: false, message: "Debes definir una función que reciba un apodo." };
          }
          const funcName = funcDefMatch[1];
          const callMatch = code.match(new RegExp(funcName + "\\s*\\((['\"])(.*?)\\1\\)"));
          if (!callMatch) {
            return { isValid: false, message: `Debes llamar a la función '${funcName}' con un apodo entre comillas y entre paréntesis.` };
          }
          const calledWith = callMatch[2];
          if (!calledWith || calledWith.length < 3) {
            return { isValid: false, message: "Debes llamar la función con un apodo válido (mínimo 3 caracteres)." };
          }
          return { isValid: true, message: "" };
        },
      },
    },
  },
  "bucles-basico": {
    title: "Bucles (básico): Contador de Monedas",
    description: "Utiliza un bucle for para imprimir 'Moneda recogida' cinco veces, numerando cada una.",
    tutorial: {
      content: `Los bucles for te permiten repetir acciones varias veces de forma automática. Son muy útiles para recorrer listas, contar elementos o realizar tareas repetitivas sin escribir el mismo código muchas veces.`,
      code: `for k = 1, 5 do
    print("Punto ganado: " .. k)
end`,
      explanation: `- for k = 1, 5 do repite 5 veces
- .. concatena texto y variables`
    },
    challenge: {
      title: "Reto: Contador de monedas",
      description: "Imprime 'Moneda obtenida: X' cinco veces usando un for. Usa un texto diferente al ejemplo.",
      starterCode: `-- Tu código aquí
`,
      solution: `for j = 1, 5 do
    print("Moneda obtenida: " .. j)
end`,
      hint: "Cambia el texto y la variable respecto al ejemplo.",
      validation: {
        requiredKeywords: ["for", "do", "end"],
        requiredPrints: 5,
        mustContain: ["for", "print"],
        customValidation: (code: string) => {
          const tutorialCode = `for k = 1, 5 do\n    print(\"Punto ganado: " .. k)\nend`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "No copies el ejemplo del tutorial. Cambia el texto y la variable." };
          }
          return { isValid: true, message: "" };
        },
      },
    },
  },
  "mini-juego-monedas": {
    title: "Mini Juego: Recolecta Monedas y Gana Premio",
    description: "Integra variables, bucles y condicionales para simular la recolección de monedas. Si el jugador recoge 5 monedas, imprime '¡Premio desbloqueado!'.",
    tutorial: {
      content: `En muchos juegos, los bucles y condicionales se usan para repetir acciones y tomar decisiones. Por ejemplo, recolectar ítems, sumar puntos o verificar si se ganó un premio. Aprender a combinar estas estructuras es clave para crear lógica divertida y dinámica.`,
      code: `local estrellas = 0
for i = 1, 5 do
    estrellas = estrellas + 1
    print("Estrella conseguida: " .. estrellas)
end
if estrellas == 5 then
    print("¡Logro desbloqueado!")
end`,
      explanation: `- Usa una variable para contar estrellas
- Usa un bucle for para recolectar
- Usa un if para verificar si se ganó el premio`
    },
    challenge: {
      title: "Reto: Mini juego de monedas",
      description: "Cuenta hasta 5 monedas usando un for y muestra un mensaje de premio si se logran todas. Usa nombres y mensajes distintos al ejemplo.",
      starterCode: `local monedas = 0
-- Tu código aquí
`,
      solution: `local monedas = 0
for i = 1, 5 do
    monedas = monedas + 1
    print("Moneda conseguida: " .. monedas)
end
if monedas == 5 then
    print("¡Premio desbloqueado!")
end`,
      hint: "Usa siempre 'moneda' en los mensajes y variables. No copies el ejemplo de estrellas.",
      validation: {
        requiredKeywords: ["for", "if", "then", "end"],
        requiredPrints: 2,
        mustContain: ["moneda", "for", "if"],
        customValidation: (code: string) => {
          const tutorialCode = `local estrellas = 0\nfor i = 1, 5 do\n    estrellas = estrellas + 1\n    print(\"Estrella conseguida: " .. estrellas)\nend\nif estrellas == 5 then\n    print(\"¡Logro desbloqueado!\")\nend`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "No copies el ejemplo del tutorial. Usa nombres y mensajes diferentes." };
          }
          if (!/moneda/i.test(code)) {
            return { isValid: false, message: "Tu código debe mencionar 'moneda' al menos una vez." };
          }
          return { isValid: true, message: "" };
        },
      },
    },
  },
  "desafio-final": {
    title: "Desafío Final: Juego de Aventuras y Tesoros",
    description: "Crea un script inspirado en un minijuego de aventuras: apodo, función de bienvenida, bucle de gemas, condicional de pase dorado y mensaje de cofre dorado.",
    tutorial: {
      content: `En un juego de aventuras, es común combinar variables, funciones, bucles y condicionales para crear desafíos complejos. Pensar en cómo se relacionan estos conceptos te ayudará a resolver problemas y a crear scripts más interesantes y completos.\n\nPara completar este desafío, tu script debe cumplir con:\n\n- Crear una variable con el apodo de tu jugador.\n- Crear una variable booleana (true/false) que indique si el jugador tiene un “pase dorado”.\n- Crear una variable para contar cuántas “gemas” recolecta el jugador.\n- Escribir una función que reciba el apodo y muestre un mensaje de bienvenida al juego.\n- Llamar esa función con el apodo de tu jugador.\n- Usar un bucle for para simular que el jugador recolecta 3 gemas y mostrar un mensaje por cada una.\n- Usar un condicional if para verificar si el jugador tiene el pase dorado:\n   - Si lo tiene: mostrar un mensaje de que abrió el cofre dorado y ganó un premio.\n   - Si no lo tiene: mostrar un mensaje que diga que necesita el pase dorado para abrir el cofre.\n- Usar en los mensajes las palabras “gema”, “cofre” y “dorado”.\n\n¡Usá tu creatividad y no repitas los nombres ni mensajes de los ejemplos anteriores!`,
    },
    challenge: {
      title: "Reto: Desafío final",
      description: "Crea un script que combine: variable de apodo, función de bienvenida, bucle de gemas, condicional de pase dorado y mensaje de cofre dorado. Usa nombres y mensajes inspirados en un juego de aventuras.",
      starterCode: `-- Escribe aquí tu desafío final
`,
      hint: "Recordá: usá apodo, función, bucle, condicional, gema, cofre y dorado. Podés repasar las misiones anteriores si te trabás.",
      validation: {
        requiredKeywords: ["function", "for", "if", "else", "then", "end"],
        requiredPrints: 4,
        mustContain: ["gema", "cofre", "dorado"],
        customValidation: (code: string) => {
          const tutorialCode = `local nombre = \"PixelHero\"\nlocal esVIP = true\nlocal monedas = 0\nfunction saludar(nombre)\n    print(\"¡Bienvenido, " .. nombre .. "!\")\nend\nsaludar(nombre)\nfor i = 1, 3 do\n    monedas = monedas + 1\n    print(\"Moneda recogida: " .. monedas)\nend\nif esVIP then\n    print(\"Acceso VIP concedido\")\nelse\n    print(\"No eres VIP\")\nend`;
          const normalize = (str: string) => str.replace(/\s/g, "").toLowerCase();
          if (normalize(code) === normalize(tutorialCode)) {
            return { isValid: false, message: "Inventá tus propios nombres y mensajes." };
          }
          if (!/gema/i.test(code)) {
            return { isValid: false, message: "Tu código debe mencionar 'gema' al menos una vez." };
          }
          if (!/cofre/i.test(code)) {
            return { isValid: false, message: "Tu código debe mencionar 'cofre' al menos una vez." };
          }
          if (!/dorado/i.test(code) && !/gold/i.test(code)) {
            return { isValid: false, message: "Tu código debe mencionar 'dorado' o 'gold' al menos una vez." };
          }
          return { isValid: true, message: "" };
        }
      }
    }
  },
  "gui-basico": {
    title: "🧪 Próximamente: Interfaz con GUI",
    description: "Aprenderás a mostrar botones y pantallas personalizadas.",
    available: false,
    tutorial: {
      content: "Esta misión estará disponible pronto. ¡Prepárate para crear interfaces increíbles!",
    },
    challenge: {
      title: "Desafío GUI",
      description: "Próximamente disponible.",
      starterCode: `-- 🚧 Esta misión está en construcción.`,
      hint: "Mientras tanto, podés practicar con las misiones anteriores.",
      validation: {
        customValidation: () => ({
          isValid: false,
          message: "La misión aún no está disponible. ¡Volvé pronto!",
        }),
      },
    },
  },
  "scripts-avanzados": {
    title: "🧪 Próximamente: Scripts Avanzados",
    description: "Explora técnicas avanzadas de scripting y lógica compleja.",
    available: false,
    tutorial: {
      content: "Esta misión estará disponible pronto. ¡Vas a poder llevar tus habilidades al siguiente nivel!",
    },
    challenge: {
      title: "Desafío Avanzado",
      description: "Próximamente disponible.",
      starterCode: `-- 🚧 Esta misión está en construcción.`,
      hint: "Repasá las misiones anteriores para estar listo cuando se habilite este desafío.",
      validation: {
        customValidation: () => ({
          isValid: false,
          message: "La misión aún no está disponible. ¡Volvé pronto!",
        }),
      },
    },
  },
}

export default missionsData; 

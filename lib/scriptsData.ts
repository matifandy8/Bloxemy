const scripts = [
    {
      title: "Hola Mundo",
      description: "Imprime un mensaje en la consola de Roblox Studio.",
      code: `print("¡Hola, mundo de Roblox!")`,
      howToUse: `Cómo usar:
1. Abre Roblox Studio
2. Crea un nuevo Script en ServerScriptService
3. Pega este código
4. Presiona Play (▶️)
5. Ve a la pestaña "Output" para ver el mensaje

¿Dónde ver el resultado?
- En la pestaña "Output" de Roblox Studio
- El mensaje aparecerá cuando ejecutes el juego`,
    },
    {
      title: "Crear Parte Básica",
      description: "Crea un bloque (Part) en el Workspace.",
      code: `local part = Instance.new("Part")
part.Size = Vector3.new(4, 1, 2)
part.Position = Vector3.new(0, 5, 0)
part.BrickColor = BrickColor.new("Bright blue")
part.Parent = workspace`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. El bloque aparecerá en el Workspace

¿Qué hace cada línea?
- Instance.new("Part"): Crea un nuevo bloque
- Size: Define el tamaño (ancho, alto, largo)
- Position: Define la posición (X, Y, Z)
- BrickColor: Define el color
- Parent = workspace: Lo coloca en el mundo

Puedes cambiar:
- Los números en Size y Position
- El color en BrickColor.new()`,
    },
    {
      title: "Mensaje en pantalla",
      description: "Muestra un mensaje en la pantalla del jugador.",
      code: `game.StarterGui:SetCore("SendNotification", {
    Title = "¡Bienvenido!",
    Text = "Este es un mensaje en pantalla.",
    Duration = 5
})`,
      howToUse: `Cómo usar:
1. Crea un LocalScript en StarterPlayerScripts
2. Pega este código
3. Presiona Play
4. El mensaje aparecerá en la pantalla

¿Por qué LocalScript?
- LocalScript se ejecuta en la computadora del jugador
- Solo así puede mostrar mensajes en pantalla

Puedes cambiar:
- Title: El título del mensaje
- Text: El texto del mensaje
- Duration: Cuántos segundos dura (en segundos)`,
    },
    {
      title: "Loop de colores",
      description: "Cambia el color de una parte cada segundo.",
      code: `local part = workspace.Part -- Cambia 'Part' por el nombre de tu parte
local colores = {"Bright red", "Bright blue", "Bright green"}
local i = 1
while true do
    part.BrickColor = BrickColor.new(colores[i])
    i = i % #colores + 1
    wait(1)
end`,
      howToUse: `Cómo usar:
1. Primero crea una parte en el Workspace
2. Dale un nombre (ejemplo: "MiParte")
3. Crea un Script en ServerScriptService
4. Cambia 'Part' por el nombre de tu parte
5. Pega el código y presiona Play

¿Qué hace?
- Cambia el color cada segundo
- Cicla entre rojo, azul y verde
- Se ejecuta infinitamente

Puedes cambiar:
- Los colores en la tabla "colores"
- El tiempo en wait(1) - 1 = 1 segundo
- El nombre de la parte`,
    },
    {
      title: "Crear múltiples bloques",
      description: "Crea varios bloques en diferentes posiciones.",
      code: `for i = 1, 5 do
    local part = Instance.new("Part")
    part.Size = Vector3.new(2, 2, 2)
    part.Position = Vector3.new(i * 3, 5, 0)
    part.BrickColor = BrickColor.new("Bright yellow")
    part.Parent = workspace
end`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Se crearán 5 bloques amarillos

¿Qué hace el loop?
- for i = 1, 5: Se repite 5 veces
- i * 3: Cada bloque está 3 unidades más lejos
- Crea bloques en línea horizontal

Puedes cambiar:
- El número 5 para más o menos bloques
- El número 3 para cambiar la distancia
- El color "Bright yellow"
- El tamaño Vector3.new(2, 2, 2)`,
    },
    {
      title: "Script de teletransporte",
      description: "Teletransporta al jugador a una posición específica.",
      code: `local player = game.Players.LocalPlayer
local character = player.Character
if character then
    local humanoidRootPart = character:FindFirstChild("HumanoidRootPart")
    if humanoidRootPart then
        humanoidRootPart.CFrame = CFrame.new(0, 10, 0)
    end
end`,
      howToUse: `Cómo usar:
1. Crea un LocalScript en StarterPlayerScripts
2. Pega este código
3. Presiona Play
4. El jugador se teletransportará

¿Qué hace?
- LocalPlayer: Obtiene el jugador actual
- Character: Obtiene el personaje del jugador
- HumanoidRootPart: La parte que controla la posición
- CFrame.new(0, 10, 0): Nueva posición (X=0, Y=10, Z=0)

Puedes cambiar:
- Los números en CFrame.new(X, Y, Z)
- X: izquierda/derecha
- Y: arriba/abajo
- Z: adelante/atrás`,
    },
    {
      title: "Contador de jugadores",
      description: "Cuenta cuántos jugadores hay en el juego.",
      code: `local numJugadores = #game.Players:GetPlayers()
print("Hay " .. numJugadores .. " jugadores en el juego")

-- También puedes usar:
-- game.Players.NumPlayers`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Ve a Output para ver el resultado

¿Cuándo se ejecuta?
- Cada vez que se ejecuta el script
- Útil para saber cuántos jugadores hay

Puedes usar:
- #game.Players:GetPlayers(): Cuenta jugadores actuales
- game.Players.NumPlayers: También cuenta jugadores

Para actualizar automáticamente:
- Usa un loop con wait()`,
    },
    {
      title: "Crear plataforma flotante",
      description: "Crea una plataforma que flota en el aire.",
      code: `local plataforma = Instance.new("Part")
plataforma.Name = "PlataformaFloating"
plataforma.Size = Vector3.new(10, 1, 10)
plataforma.Position = Vector3.new(0, 20, 0)
plataforma.Anchored = true
plataforma.BrickColor = BrickColor.new("Bright green")
plataforma.Material = Enum.Material.Neon
plataforma.Parent = workspace`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Aparecerá una plataforma verde flotante

¿Qué hace cada línea?
- Name: Le da un nombre a la plataforma
- Size: Tamaño (10x1x10 = muy ancha y plana)
- Position: Posición en el aire (Y=20)
- Anchored = true: No se mueve con la gravedad
- Material = Neon: Brilla en la oscuridad

Puedes cambiar:
- El tamaño en Size
- La altura en Position (Y)
- El color en BrickColor
- El material (Plastic, Wood, etc.)`,
    },
    {
      title: "Script de velocidad",
      description: "Cambia la velocidad de caminar del jugador.",
      code: `local player = game.Players.LocalPlayer
local character = player.Character
if character then
    local humanoid = character:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.WalkSpeed = 50 -- Velocidad normal es 16
        print("¡Velocidad aumentada!")
    end
end`,
      howToUse: `Cómo usar:
1. Crea un LocalScript en StarterPlayerScripts
2. Pega este código
3. Presiona Play
4. El jugador caminará más rápido

¿Qué hace?
- Obtiene el Humanoid del jugador
- Cambia WalkSpeed (velocidad de caminar)
- Velocidad normal: 16
- Este script: 50 (más rápido)

Puedes cambiar:
- WalkSpeed = 50: Cambia el número
- Valores típicos: 16 (normal), 25 (rápido), 50 (muy rápido)

Para que sea permanente:
- Pon este código en un LocalScript que se ejecute al spawn`,
    },
    {
      title: "Crear pared invisible",
      description: "Crea una pared que no se puede ver pero bloquea el paso.",
      code: `local pared = Instance.new("Part")
pared.Name = "ParedInvisible"
pared.Size = Vector3.new(1, 10, 20)
pared.Position = Vector3.new(0, 5, 0)
pared.Anchored = true
pared.Transparency = 1 -- Completamente transparente
pared.CanCollide = true -- Pero aún bloquea
pared.Parent = workspace`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Aparecerá una pared invisible

¿Qué hace?
- Transparency = 1: Completamente transparente
- CanCollide = true: Aún bloquea el paso
- Útil para crear barreras invisibles

Puedes cambiar:
- Transparency: 0 = visible, 1 = invisible
- CanCollide: true = bloquea, false = no bloquea
- Size: Tamaño de la pared
- Position: Dónde aparece

Usos comunes:
- Barreras en laberintos
- Límites de mapas
- Obstáculos secretos`,
    },
    {
      title: "Script de salto alto",
      description: "Aumenta la altura del salto del jugador.",
      code: `local player = game.Players.LocalPlayer
local character = player.Character
if character then
    local humanoid = character:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.JumpPower = 100 -- Salto normal es 50
        print("¡Salto aumentado!")
    end
end`,
      howToUse: `Cómo usar:
1. Crea un LocalScript en StarterPlayerScripts
2. Pega este código
3. Presiona Play
4. El jugador saltará más alto

¿Qué hace?
- Obtiene el Humanoid del jugador
- Cambia JumpPower (fuerza del salto)
- Salto normal: 50
- Este script: 100 (doble de alto)

Puedes cambiar:
- JumpPower = 100: Cambia el número
- Valores típicos: 50 (normal), 75 (alto), 100 (muy alto)

Para que sea permanente:
- Pon este código en un LocalScript que se ejecute al spawn`,
    },
    {
      title: "Crear monedas",
      description: "Crea monedas que el jugador puede recolectar.",
      code: `for i = 1, 10 do
    local moneda = Instance.new("Part")
    moneda.Name = "Moneda"
    moneda.Size = Vector3.new(1, 1, 1)
    moneda.Position = Vector3.new(math.random(-20, 20), 2, math.random(-20, 20))
    moneda.Shape = Enum.PartType.Ball
    moneda.BrickColor = BrickColor.new("Bright yellow")
    moneda.Material = Enum.Material.Neon
    moneda.Anchored = false
    moneda.Parent = workspace
end`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Aparecerán 10 monedas amarillas

¿Qué hace?
- Crea 10 monedas esféricas
- math.random(-20, 20): Posición aleatoria
- Shape = Ball: Forma de esfera
- Anchored = false: Pueden caer

Puedes cambiar:
- El número 10 para más o menos monedas
- Los números en math.random() para el área
- El color "Bright yellow"
- Anchored = true para que no caigan

Para hacerlas recolectables:
- Necesitas un script adicional que detecte cuando el jugador las toca`,
    },
    {
      title: "Script de gravedad",
      description: "Cambia la gravedad del juego.",
      code: `workspace.Gravity = 50 -- Gravedad normal es 196.2
print("¡Gravedad reducida!")`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. La gravedad cambiará para todos

¿Qué hace?
- Cambia la gravedad de todo el juego
- Gravedad normal: 196.2
- Este script: 50 (más ligero)

Puedes cambiar:
- workspace.Gravity = 50: Cambia el número
- 196.2: Gravedad normal
- 50: Gravedad baja (como la luna)
- 300: Gravedad alta

Efectos:
- Gravedad baja: Saltos más altos, caída lenta
- Gravedad alta: Saltos bajos, caída rápida`,
    },
    {
      title: "Crear puerta",
      description: "Crea una puerta que se puede abrir y cerrar.",
      code: `local puerta = Instance.new("Part")
puerta.Name = "Puerta"
puerta.Size = Vector3.new(1, 6, 4)
puerta.Position = Vector3.new(0, 3, 0)
puerta.Anchored = true
puerta.BrickColor = BrickColor.new("Brown")
puerta.Parent = workspace

-- Para abrir la puerta:
-- puerta.CFrame = puerta.CFrame * CFrame.Angles(0, math.rad(90), 0)`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Aparecerá una puerta marrón

¿Qué hace?
- Crea una puerta rectangular
- Anchored = true: No se mueve
- Size: 1x6x4 (delgada, alta, ancha)

Para hacerla funcional:
- Necesitas un script adicional que detecte clicks
- Usa el código comentado para abrirla
- Crea un ClickDetector en la puerta

Puedes cambiar:
- El tamaño en Size
- El color en BrickColor
- La posición en Position

Para hacerla interactiva:
- Agrega un ClickDetector a la puerta
- Crea un script que responda al click`,
    },
    {
      title: "Script de vida",
      description: "Cambia la vida máxima del jugador.",
      code: `local player = game.Players.LocalPlayer
local character = player.Character
if character then
    local humanoid = character:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.MaxHealth = 200 -- Vida normal es 100
        humanoid.Health = 200
        print("¡Vida aumentada!")
    end
end`,
      howToUse: `Cómo usar:
1. Crea un LocalScript en StarterPlayerScripts
2. Pega este código
3. Presiona Play
4. El jugador tendrá más vida

¿Qué hace?
- MaxHealth = 200: Vida máxima
- Health = 200: Vida actual
- Vida normal: 100
- Este script: 200 (doble de vida)

Puedes cambiar:
- MaxHealth = 200: Cambia la vida máxima
- Health = 200: Cambia la vida actual
- Valores típicos: 100 (normal), 200 (doble), 500 (mucha)

Para que sea permanente:
- Pon este código en un LocalScript que se ejecute al spawn

Nota:
- MaxHealth debe ser mayor o igual a Health`,
    },
    {
      title: "Crear escalera",
      description: "Crea una escalera con múltiples escalones.",
      code: `for i = 1, 10 do
    local escalon = Instance.new("Part")
    escalon.Name = "Escalon" .. i
    escalon.Size = Vector3.new(3, 0.5, 1)
    escalon.Position = Vector3.new(0, i * 0.5, i * 1.5)
    escalon.Anchored = true
    escalon.BrickColor = BrickColor.new("Medium stone grey")
    escalon.Parent = workspace
end`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Aparecerá una escalera de 10 escalones

¿Qué hace?
- Crea 10 escalones
- Cada escalón está más alto y adelante
- i * 0.5: Sube 0.5 unidades cada escalón
- i * 1.5: Avanza 1.5 unidades cada escalón

Puedes cambiar:
- El número 10 para más o menos escalones
- 0.5 y 1.5 para cambiar la inclinación
- El color "Medium stone grey"
- El tamaño de cada escalón

Para hacerla funcional:
- Los jugadores pueden subir normalmente
- Anchored = true evita que se mueva`,
    },
    {
      title: "Script de tiempo",
      description: "Muestra la hora actual en el juego.",
      code: `local tiempo = tick()
local minutos = math.floor(tiempo / 60)
local segundos = math.floor(tiempo % 60)
print("Tiempo transcurrido: " .. minutos .. " minutos y " .. segundos .. " segundos")`,
      howToUse: `Cómo usar:
1. Crea un Script en ServerScriptService
2. Pega este código
3. Presiona Play
4. Ve a Output para ver el tiempo

¿Qué hace?
- tick(): Obtiene el tiempo desde que se inició el juego
- math.floor(): Quita los decimales
- % 60: Obtiene solo los segundos (0-59)

Para actualizar constantemente:
- Pon el código en un loop con wait()

Ejemplo con loop:
while true do
    local tiempo = tick()
    local minutos = math.floor(tiempo / 60)
    local segundos = math.floor(tiempo % 60)
    print("Tiempo: " .. minutos .. "m " .. segundos .. "s")
    wait(1)
end

Puedes usar:
- Para cronómetros
- Para temporizadores
- Para mostrar tiempo de juego`,
    },
  ];

  export default scripts;
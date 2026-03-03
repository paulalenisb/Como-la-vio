# Plataforma de Highlights Deportivos: Arquitectura y Experiencia de Usuario

Documento estructurado de la arquitectura de información y estrategia de producto para la plataforma automatizada de highlights deportivos.

---

## PARTE 1 — ARQUITECTURA DE INFORMACIÓN

### Estructura de Navegación

```text
Home
 └── Torneos
      └── Partidos (dentro de cada torneo)
```

### Propósito e Intención del Usuario

1. **Home**
   - **Propósito:** Conversión y adquisición. Comunicar claramente la propuesta de valor tecnológica y guiar al usuario hacia el contenido.
   - **Intención del Usuario:** Entender qué hace la plataforma, cómo funciona y encontrar rápidamente la puerta de entrada a sus videos.
2. **Torneos**
   - **Propósito:** Directorio y filtrado. Mostrar la oferta completa de competiciones agrupadas por estado.
   - **Intención del Usuario:** Encontrar su liga o torneo específico de manera eficiente entre múltiples opciones.
3. **Partidos (Dentro de Torneos `/tournaments/[id]`)**
   - **Propósito:** Visualización de contenido. Entregar los videos de forma inmersiva y cronológica.
   - **Intención del Usuario:** Consumir sus highlights (y los de sus rivales), revivir momentos clave y compartir el contenido.

### Comportamiento de Navegación
- **Breadcrumbs:** Esenciales a partir del nivel de Torneos (`Inicio > Torneos > [Nombre del Torneo]`).
- **Navegación hacia atrás:** Botón nativo y persistente en UI móvil/desktop para retroceder rápidamente al directorio sin perder los filtros aplicados.
- **Estructura URLs:** Semántica, predecible y amigable para SEO (`/tournaments/liga-estelar-2026/date/2026-03-15`).

---

## PARTE 2 — PÁGINA DE INICIO (ESTRUCTURA DE LANDING)

La página de inicio ("Home") debe funcionar como una landing page enfocada en la conversión, respondiendo cuatro preguntas clave: ¿Qué hace? ¿Cómo funciona? ¿Por qué es diferente? ¿Por qué usarla?

### 1️⃣ SECCIÓN HERO
- **Titular de alto impacto (Propuesta de Valor):** "Tus mejores jugadas, listas al sonar el silbato."
- **Subtítulo:** "Goles, atajadas y momentos clave registrados automáticamente. Cero edición manual."
- **CTA Principal:** "Ver Torneos"
- **CTA Secundario:** "Cómo funciona"
- **Tono:** Moderno, enérgico, premium y confiable.

### 2️⃣ ¿CÓMO FUNCIONA? (4 PASOS)
Estructura visual secuencial (`Paso 1 → Paso 2 → Paso 3 → Paso 4`):
1. **Grabación Continua:** Las cámaras capturan el partido completo.
2. **Detección Automática:** El sistema identifica inmediatamente goles, atajadas y jugadas clave.
3. **Generación Instantánea:** ~20 videos cortos (22 segundos) se generan por partido sin intervención manual.
4. **Visualización On-Demand:** Disponibles minutos después del partido. Selecciona tu fecha y revive la acción (con opción de narración profesional).

### 3️⃣ SECCIÓN DE PROPUESTA DE VALOR
Beneficios enfocados en el usuario (No "features"):
- **Acceso instantáneo a tus mejores jugadas:** Revive el partido antes de salir del vestuario.
- **Cero edición, cero espera:** La tecnología hace el trabajo pesado por ti.
- **Momentos listos para compartir:** Clips perfectos para tus redes sociales.
- **Organización total:** Encuentra rápidamente tu partido por fecha y torneo.

### 4️⃣ PRUEBA SOCIAL / CONFIANZA
Construcción de credibilidad a través de datos:
- **X+** Partidos procesados esta semana.
- **Y+** Highlights generados.
- *Placeholder para testimonios de jugadores/ligas.*
- *Logos de torneos asociados.*

### 5️⃣ SECCIÓN CTA FINAL
- **Mensaje:** "Explora tu torneo y revive tus mejores momentos."
- **CTA:** "Buscar mi Torneo"

---

## PARTE 3 — PÁGINA DE TORNEOS

Esta página permite a los usuarios buscar y navegar entre los diferentes torneos disponibles.

### Estructura
1. **Cabecera:** Directorio de Torneos (Título claro y cantidad disponible).
2. **Buscador Universal:** Búsqueda rápida por nombre de la liga/torneo o complejo deportivo.
3. **Filtros Clave:**
   - **Estado:** Activos / Próximos / Finalizados.
   - **Rango de Fechas.**
   - **Deporte** (Si la plataforma escala más allá de fútbol).
4. **Tarjetas de Torneo (Cards):**
   - Nombre del torneo.
   - Rango de fechas (Inicio / Fin).
   - Etiqueta de estado (Badge).
   - CTA secundario: "Ver Partidos".

### Razonamiento UX (Agrupación y Filtrado)
- Agrupar por `Activos`, `Próximos` y `Finalizados` reduce  el ruido visual. El 90% de los usuarios busca competiciones activas.
- El buscador reduce el tiempo de interacción (*time-to-find*) a segundos para usuarios recurrentes.

---

## PARTE 4 — PÁGINA DE PARTIDOS (DENTRO DEL TORNEO)

La vista principal de consumo.

**Estructura de URL:** `/tournaments/[id]`

### Estructura de la Interfaz
1. **Cabecera del Torneo:**
   - Nombre del torneo (Ej. *Liga Estelar - Apertura 2026*).
   - Total de partidos jugados.
   - Resumen del torneo.
2. **Barra de Filtros (Fija o pegajosa "Sticky"):**
   - Búsqueda por equipo (Auto-completado).
   - Selector de Fecha en formato Calendario (Crítico: el usuario recuerda *cuándo* jugó).
   - Estado del partido (Jugado / Próximos).
3. **Partidos agrupados cronológicamente:**

```text
=== 15 de Marzo, 2026 ===
Equipo A vs Equipo B [ 4  -  2 ] [ Botón: Ver Highlights ]

=== 16 de Marzo, 2026 ===
Equipo C vs Equipo D [ 1  -  1 ] [ Botón: Ver Highlights ]
```

Cada tarjeta (match card) es clickeable y lleva directamente a la experiencia de video.

---

## EXPERIENCIA DE VIDEO

Una vez que el usuario ingresa a un partido completo.

### Estructura UI
- **Reproductor principal (Top):** Video inmersivo, ocupando el ancho máximo del contenedor principal (tipo YouTube/Twitch).
- **Control de Lista de Reproducción (Below/Sidebar):** Cuadrícula o lista vertical con los demás clips (goles, faltas, tiros) del mismo partido.

### Navegación y Controles
- Botón **"Siguiente Partido"** y **"Partido Anterior"** (Dentro de la misma fecha).
- **Toggle "Auto-reproducción":** Activado por defecto para el siguiente clip del *mismo* partido.

### Comportamiento UX y Estrategia de Producto
- **Comportamiento UX:** Flujo sin fricciones ("Lean-back experience"). El reproductor nunca se cierra al cambiar de clip.
- **Estrategia de Retención:** Al terminar todos los clips de un partido, el sistema debe sugerir automáticamente el partido más destacado de esa misma fecha antes de detener la reproducción.
- **Estrategia de Engagement:** Integración profunda del botón de "Compartir" en el reproductor superpuesto (Overlay) durante los primeros 3 segundos y al pausar.

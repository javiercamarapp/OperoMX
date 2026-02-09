
# Plan: Estabilizar Layout para Evitar Movimiento de Botones

## Problema Detectado
Los botones se siguen moviendo cuando el texto animado cambia entre palabras de diferente longitud ("complicaciones", "retrasos", "preocupaciones"). La palabra "preocupaciones" es la más larga y causa un comportamiento de reflow diferente.

## Solución Propuesta

### Cambios en `src/components/ui/background-paths.tsx`

1. **Fijar altura absoluta del contenedor del título**
   - Cambiar `min-h-[140px]` a `h-[140px]` (altura fija en lugar de mínima)
   - Esto garantiza que el espacio reservado para el título sea siempre el mismo

2. **Agregar `overflow-hidden` al contenedor**
   - Previene que cualquier desbordamiento de texto afecte el layout exterior

3. **Establecer ancho fijo para la palabra animada**
   - Agregar `min-w-[320px]` al span de la palabra animada en móvil
   - Usar `text-center` para centrar las palabras más cortas

4. **Opcional: Reducir ligeramente el tamaño de fuente en móvil**
   - Si "preocupaciones" sigue siendo muy larga, reducir de `text-5xl` a `text-4xl` solo en móvil

## Código Propuesto

```tsx
{/* Main Heading - Two lines on mobile */}
<div className="h-[140px] sm:h-auto sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] mb-4 sm:mb-6 overflow-hidden flex flex-col justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-hero-foreground">
    <span className="block sm:inline">Tu reparto sin</span>{" "}
    <span className="text-hero-accent block sm:inline min-w-[280px] sm:min-w-0 text-center sm:text-left">
      <Typewriter
        text={["complicaciones", "retrasos", "preocupaciones"]}
        speed={80}
        cursor="|"
        loop={true}
        delay={2000}
        deleteSpeed={40}
      />
    </span>
  </h1>
</div>
```

## Detalles Técnicos

| Cambio | Propósito |
|--------|-----------|
| `h-[140px]` | Altura fija para el contenedor del título en móvil |
| `sm:h-auto` | En pantallas más grandes, permite altura automática |
| `overflow-hidden` | Evita que el contenido desbordado afecte el layout |
| `flex flex-col justify-center` | Centra verticalmente el contenido dentro del contenedor fijo |
| `text-4xl` (móvil) | Ligeramente más pequeño para que "preocupaciones" quepa mejor |
| `min-w-[280px]` + `text-center` | Reserva espacio y centra palabras más cortas |

## Resultado Esperado
- Los botones "Empezar ahora" y "Más información" permanecerán en la misma posición vertical sin importar qué palabra se muestre
- El texto animado cambiará dentro de un espacio reservado sin afectar el resto del layout
- La experiencia en móvil será fluida y sin saltos visuales


## Corregir el header y las cards en móvil

### Problemas detectados

1. El contenedor del header tiene `z-[200]` y `bg-background` que lo hacen parecer un bloque blanco flotante incluso sin ser sticky en movil.
2. Las cards siguen usando `sticky` en movil (el componente `CardSticky` aplica `sticky` en todas las resoluciones), lo que causa apilamiento innecesario.

### Cambios propuestos

**Archivo: `src/components/ServiciosSection.tsx`**

- Quitar `z-[200]` y `bg-background` del header en movil, aplicandolos solo en desktop:
  - Cambiar `z-[200] bg-background` a `lg:z-[200] lg:bg-background`

**Archivo: `src/components/ui/cards-stack.tsx`**

- Hacer que `CardSticky` solo sea `sticky` en desktop (lg+):
  - Cambiar la clase de `sticky` a usar logica condicional: aplicar `lg:sticky` en lugar de `sticky`, de modo que en movil las cards fluyan normalmente sin apilarse.

### Resultado esperado

- En movil: el header es un bloque normal que fluye con el contenido, sin fondo blanco flotante. Las cards se muestran una debajo de otra de forma natural.
- En desktop: todo sigue igual — header sticky, cards apilables con scroll.

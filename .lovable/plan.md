

## Cambiar el color de acento naranja a #f95655

El color de acento actual (`--hero-accent`) se define como variable CSS, por lo que el cambio principal es en un solo lugar. Sin embargo, hay un color hardcodeado en la seccion de FAQ que tambien necesita actualizarse.

### Cambios

**1. `src/index.css`** - Actualizar las variables CSS:
- `--hero-accent`: de `8 100% 64%` a `0 94% 65%`
- `--hero-paths`: de `8 100% 64%` a `0 94% 65%`

**2. `src/components/FAQSection.tsx`** - Actualizar el color hardcodeado:
- Cambiar `hsl(11, 80%, 62%)` a `hsl(0, 94%, 65%)` para que coincida con el nuevo color de acento

Estos dos cambios propagaran el nuevo color #f95655 a todos los componentes que usan `hero-accent`: la seccion de precios, el footer, la seccion de servicios, la animacion de entrega, la seccion de FAQ y la seccion de contacto.



## Mejorar las olas de la seccion naranja (OperoCtaSection)

Se mejoraran las olas superior e inferior para que sean mas organicas, fluidas y visualmente atractivas. Los cambios incluyen:

### Cambios

1. **Olas mas altas y pronunciadas** - Aumentar el viewBox y la altura visible de 80px a 120px, y la clase CSS de `h-[40px] md:h-[80px]` a `h-[60px] md:h-[120px]` para darles mas presencia visual.

2. **Trazados con curvas multiples** - Reemplazar los paths actuales (que tienen solo 2-3 curvas simples) por trazados con multiples puntos de control que crean ondulaciones mas naturales y organicas, con varias crestas y valles.

3. **Ola superior** - Path nuevo con 3-4 ondulaciones suaves que transicionan desde el fondo blanco hacia el naranja.

4. **Ola inferior** - Path nuevo con un patron de ondulacion diferente al superior para que no se vean identicas (espejadas), creando una sensacion mas natural.

### Detalles tecnicos

Archivo a modificar: `src/components/OperoCtaSection.tsx`

- Cambiar `viewBox="0 0 1440 80"` a `viewBox="0 0 1440 120"` en ambos SVGs
- Cambiar clases de altura a `h-[60px] md:h-[120px]`
- Nuevos paths con curvas bezier mas complejas y organicas

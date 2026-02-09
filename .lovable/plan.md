
## Agregar sombra sutil al recuadro naranja

Se agregara una clase de sombra al `div` naranja en `OperoCtaSection.tsx` para darle profundidad visual.

### Cambio

En `src/components/OperoCtaSection.tsx`, agregar `shadow-2xl` al div con `bg-hero-accent rounded-3xl`, resultando en:

```tsx
<div className="mx-auto max-w-6xl bg-hero-accent rounded-3xl px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 shadow-2xl">
```

Esto aplicara una sombra grande y difusa que le dara un efecto de elevacion natural al recuadro naranja sobre el fondo blanco.

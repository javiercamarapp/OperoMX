
## Ajustar separacion de cards en movil

**Problema:** Las tarjetas de servicios siguen chocando con el encabezado sticky (titulo + animacion) en la vista movil.

**Solucion:** Aumentar el valor de `baseTopMobile` de 440 a 500 en `ServiciosSection.tsx` para que las cards comiencen mas abajo y no se superpongan con el header sticky.

---

### Detalles tecnicos

**Archivo:** `src/components/ServiciosSection.tsx`

- Cambiar `baseTopMobile={440}` a `baseTopMobile={500}` en el componente `CardSticky`
- Tambien agregar un margin-top mayor al `ContainerScroll` en movil, cambiando `mt-64` a `mt-72` para dar mas espacio inicial antes de que las cards aparezcan

Esto asegura que:
1. Las cards sticky comienzan en una posicion mas baja (500px desde el top)
2. Hay mas espacio de scroll antes de que las cards entren en vista



## Plan: Arreglar el efecto de apilamiento de cards en la sección Servicios

### Problema identificado
Las cards sticky no se ven apiladas correctamente porque cada card tiene la misma altura y oculta completamente a las anteriores. Además, el z-index del menú es menor que el de las cards, causando que el menú quede debajo.

### Solución

**1. Ajustar el z-index del navbar**
- Archivo: `src/components/ui/tubelight-navbar.tsx`
- Cambiar el z-index del navbar de `z-50` a `z-[200]` para que siempre esté por encima de las cards

**2. Reducir el incremento vertical entre cards**
- Archivo: `src/components/ServiciosSection.tsx`
- Cambiar `incrementY={10}` a `incrementY={20}` para que las cards muestren más espacio visible entre ellas al apilarse

**3. Aumentar el baseTop de las cards**
- Cambiar `baseTop={128}` a `baseTop={140}` para dar más espacio debajo del menú

**4. Ajustar el spacer final**
- Aumentar la altura del spacer para permitir que las últimas cards alcancen su posición sticky

### Resultado esperado
- El menú siempre visible por encima de las cards
- Cada card muestra un borde de la anterior creando el efecto "stack"
- Las 8 cards se agrupan correctamente al final del scroll


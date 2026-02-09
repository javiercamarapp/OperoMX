
## Eliminar espacios vacíos en móvil

El gran espacio blanco que se ve después de las tarjetas es causado por un div espaciador al final de la sección de servicios. Este espaciador (`h-[60vh] lg:h-[80vh]`) era necesario cuando el header era sticky en móvil para que las tarjetas pudieran apilarse correctamente, pero ahora que el header ya no es sticky en móvil, ese espacio sobra.

### Cambio a realizar

**Archivo:** `src/components/ServiciosSection.tsx`

- Cambiar el espaciador para que solo aplique en desktop (donde sí se necesita porque el header es sticky)
- En móvil, reducirlo a `h-0` o eliminarlo por completo
- Clase actualizada: `hidden lg:block lg:h-[80vh]`

Esto eliminará el espacio blanco vacío en móvil mientras mantiene el comportamiento correcto de las tarjetas apiladas en desktop.

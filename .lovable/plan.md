
## Reducir altura del header en movil

El header de la seccion de servicios ocupa demasiado espacio vertical en movil debido a los paddings y margenes. Se ajustaran las clases para hacerlo mas compacto.

### Cambios en `src/components/ServiciosSection.tsx`

1. **Reducir padding vertical del contenedor**: Cambiar `pt-4 pb-2` a `pt-2 pb-1` en movil
2. **Ocultar la animacion de la moto en movil**: La `DeliveryAnimation` ocupa espacio significativo; se envolvera con `hidden lg:block` para mostrarla solo en desktop
3. **Reducir margen del parrafo descriptivo**: Mantener `mb-1` en movil (ya esta compacto)

Estos cambios haran que el header sea mucho mas corto en movil, dejando mas espacio visible para las tarjetas de servicios.

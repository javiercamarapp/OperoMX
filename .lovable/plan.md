
## Ajustar baseTopMobile de las cards

Ahora que el header de servicios ya no es sticky en movil, las cards no necesitan un offset tan grande para evitarlo. El valor actual `baseTopMobile={340}` era alto para compensar el header sticky; se puede reducir significativamente.

### Cambio en `src/components/ServiciosSection.tsx`

- Cambiar `baseTopMobile={340}` a `baseTopMobile={20}` (un valor bajo, ya que en movil las cards simplemente fluyen debajo del header sin necesidad de esquivarlo)

Esto eliminara el espacio excesivo en la parte superior de las cards en movil.

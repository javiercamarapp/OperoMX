
## Fix: Cards overlapping with sticky header on mobile

**Problem**: On mobile, the stacking cards collide with the sticky header area (title, subtitle, and delivery animation) because `baseTopMobile` is set to 280px, which isn't enough to clear all the sticky content.

**Solution**: Increase the `baseTopMobile` value in `CardSticky` so the cards begin stacking below the full sticky header (including the animation).

### Technical details

**File: `src/components/ServiciosSection.tsx`**
- Change `baseTopMobile` from `280` to `340` on the `CardSticky` component. This pushes the card stacking start point further down, clearing the title, subtitle, and motorcycle animation completely.
- Reduce `incrementY` on mobile or keep it at 20 to ensure cards don't stack too far down the screen.

This is a single-line change — just updating the `baseTopMobile` prop value.

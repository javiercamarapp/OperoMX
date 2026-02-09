import { BlurredStagger } from "@/components/ui/blurred-stagger-text";

export function GuaranteeSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <BlurredStagger
          text="✅ Garantía sin riesgo"
          className="text-3xl md:text-4xl lg:text-5xl text-foreground"
        />
        <BlurredStagger
          text="Prueba Opero en tu operación real."
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
        />
        <BlurredStagger
          text="Si después de realizar al menos 10 envíos durante tus primeros 30 días no estás 100% satisfecho, te devolvemos tu dinero."
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
        />
        <BlurredStagger
          text="Sin penalizaciones. Sin letras chiquitas. Solo resultados reales."
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground"
        />
      </div>
    </section>
  );
}

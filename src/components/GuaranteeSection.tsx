import { MagicText } from "@/components/ui/magic-text";

const GUARANTEE_TEXT =
  "✅ Garantía sin riesgo. Prueba Opero en tu operación real. Si después de realizar al menos 10 envíos durante tus primeros 30 días no estás 100% satisfecho, te devolvemos tu dinero. Sin penalizaciones. Sin letras chiquitas. Solo resultados reales.";

export function GuaranteeSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <MagicText text={GUARANTEE_TEXT} />
      </div>
    </section>
  );
}

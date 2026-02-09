import { BlurredStagger } from "@/components/ui/blurred-stagger-text";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 150 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="mt-4 bg-hero-accent hover:bg-hero-accent/90 text-white font-bold text-lg md:text-xl px-10 md:px-14 h-14 md:h-16 rounded-2xl shadow-lg shadow-hero-accent/30">
              Quiero comenzar ahora
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
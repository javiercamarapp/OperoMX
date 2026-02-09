import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const COSTO_OPERO = 55;
const MEMBRESIA = 2000;

export function CalculatorSection() {
  const [entregas, setEntregas] = useState(100);
  const [precio, setPrecio] = useState(50);

  const numEntregas = entregas;
  const numPrecio = precio;
  const showResult = numEntregas > 0 && numPrecio > 0;

  const result = useMemo(() => {
    if (!showResult) return null;
    const subsidioPorEnvio = Math.max(0, COSTO_OPERO - numPrecio);
    const gananciaPorEnvio = Math.max(0, numPrecio - COSTO_OPERO);
    const costoSubsidioTotal = subsidioPorEnvio * numEntregas;
    const gananciaTotal = gananciaPorEnvio * numEntregas;
    const totalMensual = MEMBRESIA + costoSubsidioTotal;
    const esGanancia = numPrecio >= COSTO_OPERO;
    return { subsidioPorEnvio, gananciaPorEnvio, gananciaTotal, totalMensual, esGanancia };
  }, [numEntregas, numPrecio, showResult]);

  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div
        data-bg-accent
        className="mx-auto max-w-6xl bg-hero-accent rounded-3xl px-6 py-12 md:px-16 md:py-20 shadow-2xl"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Descubre cuánto te costaría operar con Opero al mes 🚀
          </h2>
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto">
            Descubre en segundos si Opero es más eficiente que operar una flotilla propia.
          </p>
        </div>

        <div className="mx-auto max-w-2xl bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          {/* Entregas por mes */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-foreground font-semibold text-base md:text-lg mb-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-hero-accent/15 text-hero-accent text-xs font-bold">
                1
              </span>
              Entregas por mes
            </label>
            <div className="flex items-center gap-4">
              <Slider
                value={[entregas]}
                onValueChange={(val) => setEntregas(val[0])}
                min={10}
                max={10000}
                step={10}
                className="flex-1 [&_[role=slider]]:bg-hero-accent [&_[role=slider]]:border-hero-accent [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:bg-hero-accent"
              />
              <span className="min-w-[60px] text-center text-xl font-bold text-hero-accent bg-hero-accent/10 rounded-lg px-3 py-2">
                {entregas}
              </span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>10</span>
              <span>10,000</span>
            </div>
          </div>

          {/* Precio por envío */}
          <div>
            <label className="flex items-center gap-2 text-foreground font-semibold text-base md:text-lg mb-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-hero-accent/15 text-hero-accent text-xs font-bold">
                2
              </span>
              ¿Cuánto cobras a tus clientes por envío?
            </label>
            <div className="flex items-center gap-4">
              <Slider
                value={[precio]}
                onValueChange={(val) => setPrecio(val[0])}
                min={0}
                max={150}
                step={5}
                className="flex-1 [&_[role=slider]]:bg-hero-accent [&_[role=slider]]:border-hero-accent [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:bg-hero-accent"
              />
              <span className="min-w-[70px] text-center text-xl font-bold text-hero-accent bg-hero-accent/10 rounded-lg px-3 py-2">
                ${precio}
              </span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>$0</span>
              <span>$150</span>
            </div>
            <p className="mt-2 text-muted-foreground text-sm italic">
              💡 Te recomendamos cobrar al menos $35 pesos por envío.
            </p>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence>
          {showResult && result && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto max-w-2xl bg-white rounded-2xl p-6 md:p-10 shadow-lg mt-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-4xl mb-4"
              >
                🚴‍♂️
              </motion.div>

              {result.esGanancia ? (
                <>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-foreground text-base md:text-lg mb-2">
                    ¡Sí! Tus envíos ya te generan ganancia adicional 🤑
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-muted-foreground text-sm md:text-base mb-6">
                    Tu cliente pagará <span className="font-bold text-foreground">${numPrecio}</span> por envío
                    y tú ganarás <span className="font-bold text-hero-accent">${result.gananciaPorEnvio}</span> extra por cada entrega.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                    className="text-hero-accent text-5xl md:text-6xl font-bold mb-1"
                  >
                    ${result.gananciaTotal.toLocaleString("es-MX")}
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-sm mb-2">de ganancia extra por mes</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="text-muted-foreground text-xs mb-6">
                    Membresía mensual: ${MEMBRESIA.toLocaleString("es-MX")} MXN
                  </motion.p>
                </>
              ) : (
                <>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-foreground text-base md:text-lg mb-2">
                    Esto es lo que pagarías con Opero por mes, considerando la membresía y el costo de los envíos.
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-muted-foreground text-sm md:text-base mb-2">
                    Opero tiene una tarifa fija de <span className="font-bold text-foreground">$55</span> por cada envío.
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="text-muted-foreground text-sm md:text-base mb-6">
                    Tu cliente pagará <span className="font-bold text-foreground">${numPrecio}</span> por envío
                    y tú estarás subsidiando <span className="font-bold text-hero-accent">${result.subsidioPorEnvio}</span> por cada
                    entrega para hacerlo más atractivo.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                    className="text-hero-accent text-5xl md:text-6xl font-bold mb-1"
                  >
                    ${result.totalMensual.toLocaleString("es-MX")}
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-sm mb-6">por mes</motion.p>
                </>
              )}

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-border pt-6">
                <p className="text-foreground font-semibold text-base md:text-lg">
                  ¿Te gustaría escalar tus envíos y tener acceso inmediato a capacidad de reparto bajo demanda, sin contratar ni gestionar repartidores?
                </p>
                <Button className="mt-4 bg-hero-accent hover:bg-hero-accent/90 text-white font-semibold px-8 h-12 text-base rounded-xl">
                  Agendar demo
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

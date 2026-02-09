import { useState } from "react";
import { Input } from "@/components/ui/input";

export function CalculatorSection() {
  const [entregas, setEntregas] = useState("");
  const [precio, setPrecio] = useState("");

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
            <Input
              type="number"
              placeholder="Ej. 200"
              value={entregas}
              onChange={(e) => setEntregas(e.target.value)}
              className="h-14 text-lg rounded-xl border-border bg-muted/30 focus:ring-hero-accent focus:border-hero-accent"
            />
          </div>

          {/* Precio por envío */}
          <div>
            <label className="flex items-center gap-2 text-foreground font-semibold text-base md:text-lg mb-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-hero-accent/15 text-hero-accent text-xs font-bold">
                2
              </span>
              ¿Cuánto cobras a tus clientes por envío?
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg font-medium">
                $
              </span>
              <Input
                type="number"
                placeholder="50"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="h-14 text-lg rounded-xl border-border bg-muted/30 pl-9 pr-16 focus:ring-hero-accent focus:border-hero-accent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                MXN
              </span>
            </div>
            <p className="mt-2 text-muted-foreground text-sm italic">
              💡 Te recomendamos cobrar al menos $35 pesos por envío.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

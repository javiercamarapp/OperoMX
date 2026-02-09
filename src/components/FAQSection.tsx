import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "📍 ¿Qué es Opero?",
    a: "Opero es una plataforma diseñada para negocios que realizan envíos diarios y necesitan una operación rápida, ordenada y sin fricción. Centraliza tus entregas, asigna repartidores automáticamente y te da control total en tiempo real.",
  },
  {
    q: "🚚 ¿Qué tipo de envíos puedo hacer con Opero?",
    a: "Opero está pensado para entregas locales de última milla, ideales para restaurantes, dark kitchens, farmacias, refaccionarias, tiendas, ecommerce y cualquier negocio con entregas recurrentes durante el día.",
  },
  {
    q: "⚡ ¿Qué tan rápido puedo pedir una recolección?",
    a: "En segundos. Entras a Opero, eliges origen, destino y tipo de envío, y el sistema se encarga del resto. Sin llamadas, sin coordinar por WhatsApp y sin perder tiempo.",
  },
  {
    q: "📦 ¿Tengo que cambiar la forma en la que vendo?",
    a: "No. Sigues vendiendo por WhatsApp, Instagram, llamadas, marketplace o tu tienda online. Opero se adapta a tu operación actual; no te obliga a cambiar tu canal de ventas.",
  },
  {
    q: "📍 ¿Puedo rastrear mis envíos en tiempo real?",
    a: "Sí. Tú y tu cliente reciben actualizaciones en tiempo real: recolección, en camino, entrega y comprobante. Menos \"¿dónde viene?\" y más confianza.",
  },
  {
    q: "✅ ¿Cómo se valida la entrega?",
    a: "Cada entrega se confirma con evidencia (foto, firma o comprobante), asegurando transparencia y control en toda tu operación.",
  },
  {
    q: "🧠 ¿Opero asigna automáticamente a los repartidores?",
    a: "Sí. El sistema asigna al repartidor ideal según zona, urgencia, capacidad y tipo de envío. Tú no buscas repartidores: Opero lo resuelve.",
  },
  {
    q: "🏪 ¿Opero es solo para empresas grandes?",
    a: "No. Opero funciona para negocios de cualquier tamaño, desde operaciones pequeñas que quieren orden, hasta empresas en crecimiento que necesitan escalar sin caos.",
  },
  {
    q: "📊 ¿Puedo controlar todos mis envíos desde un solo lugar?",
    a: "Sí. Desde un solo panel puedes ver tus pedidos, estatus, tiempos, incidencias y desempeño de tu operación diaria.",
  },
  {
    q: "🚀 ¿Cómo ayuda Opero a crecer mi negocio?",
    a: "Al eliminar fricción operativa, reducir errores y acelerar entregas, Opero te permite enfocarte en vender más, atender mejor a tus clientes y escalar sin perder control.",
  },
  {
    q: "📍 ¿En qué ciudades está disponible Opero?",
    a: "Opero inicia en ciudades clave de México y continúa expandiéndose conforme crece la demanda. Puedes registrarte y validar cobertura en tu zona.",
  },
  {
    q: "📝 ¿Cómo empiezo a usar Opero?",
    a: "Regístrate gratis, configura tu operación y comienza a enviar el mismo día. Sin contratos largos ni procesos complicados.",
  },
];

function SpiralBackground() {
  const spiralRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spiralRef.current) return;

    const SIZE = 560;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = 600;
    const DOT = 1.8;
    const CENTER = SIZE / 2;
    const MAX_R = CENTER - 4 - DOT;
    const DURATION = 3;
    // Use hero-accent orange color
    const COLOR = "hsl(11, 80%, 62%)";

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", COLOR);
      c.setAttribute("opacity", "0.6");

      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute("values", `${DOT * 0.5};${DOT * 1.4};${DOT * 0.5}`);
      animR.setAttribute("dur", `${DURATION}s`);
      animR.setAttribute("begin", `${(frac * DURATION).toFixed(3)}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animR);

      const animO = document.createElementNS(svgNS, "animate");
      animO.setAttribute("attributeName", "opacity");
      animO.setAttribute("values", "0.25;0.9;0.25");
      animO.setAttribute("dur", `${DURATION}s`);
      animO.setAttribute("begin", `${(frac * DURATION).toFixed(3)}s`);
      animO.setAttribute("repeatCount", "indefinite");
      animO.setAttribute("calcMode", "spline");
      animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animO);

      svg.appendChild(c);
    }

    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
      <div ref={spiralRef} className="w-[560px] h-[560px]" />
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left py-4 md:py-5 gap-3"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-hero-accent/60 font-mono text-xs md:text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-foreground">
            {q}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-hero-accent text-xl md:text-2xl font-light shrink-0"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed pb-4 pl-8 md:pl-12 pr-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-px bg-border/50" />
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20 overflow-hidden">
      <SpiralBackground />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-hero-accent font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            FAQ
          </h2>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border p-4 md:p-8 lg:p-12 shadow-lg">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

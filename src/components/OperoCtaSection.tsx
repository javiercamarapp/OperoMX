import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function OperoCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text =
    "Opero es la manera de llevar tu negocio al siguiente nivel, profesionalizando tu reparto diario con tecnología, control y una operación diseñada para crecer contigo.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative">
      {/* Top wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[120px] -mb-px"
      >
        <path
          d="M0,120 C120,80 240,100 360,60 C480,20 600,90 720,50 C840,10 960,70 1080,40 C1200,10 1320,60 1440,30 L1440,120 L0,120 Z"
          fill="hsl(var(--hero-accent))"
        />
      </svg>

      {/* Content — tight padding around text only */}
      <div className="bg-hero-accent px-6 py-10 md:py-16">
        <p className="mx-auto max-w-4xl flex flex-wrap text-2xl font-bold text-white/20 md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <RevealWord key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </RevealWord>
            );
          })}
        </p>
      </div>

      {/* Bottom wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[120px] -mt-px"
      >
        <path
          d="M0,0 C180,90 300,30 480,80 C660,110 780,20 960,70 C1140,100 1260,30 1440,50 L1440,0 L0,0 Z"
          fill="hsl(var(--hero-accent))"
        />
      </svg>
    </section>
  );
}

function RevealWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-white"
      >
        {children}
      </motion.span>
    </span>
  );
}

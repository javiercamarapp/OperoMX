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
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[80px] -mb-px"
      >
        <path
          d="M0,80 C360,0 720,70 1080,10 C1260,0 1380,30 1440,20 L1440,80 L0,80 Z"
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
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[80px] -mt-px"
      >
        <path
          d="M0,0 C360,80 720,10 1080,70 C1260,80 1380,50 1440,60 L1440,0 L0,0 Z"
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

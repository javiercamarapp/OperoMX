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
    <section ref={containerRef} className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="mx-auto max-w-6xl bg-hero-accent rounded-3xl px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
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

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
        <motion.path
          d="M0,120 C180,85 360,75 540,80 C720,85 900,70 1080,75 C1260,80 1380,70 1440,75 L1440,120 L0,120 Z"
          fill="hsl(var(--hero-accent))"
          animate={{
            d: [
              "M0,120 C180,85 360,75 540,80 C720,85 900,70 1080,75 C1260,80 1380,70 1440,75 L1440,120 L0,120 Z",
              "M0,120 C180,75 360,85 540,70 C720,75 900,85 1080,70 C1260,75 1380,80 1440,70 L1440,120 L0,120 Z",
              "M0,120 C180,85 360,75 540,80 C720,85 900,70 1080,75 C1260,80 1380,70 1440,75 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
        <motion.path
          d="M0,0 C180,35 360,45 540,40 C720,35 900,50 1080,45 C1260,40 1380,50 1440,45 L1440,0 L0,0 Z"
          fill="hsl(var(--hero-accent))"
          animate={{
            d: [
              "M0,0 C180,35 360,45 540,40 C720,35 900,50 1080,45 C1260,40 1380,50 1440,45 L1440,0 L0,0 Z",
              "M0,0 C180,45 360,35 540,50 C720,45 900,35 1080,50 C1260,45 1380,40 1440,50 L1440,0 L0,0 Z",
              "M0,0 C180,35 360,45 540,40 C720,35 900,50 1080,45 C1260,40 1380,50 1440,45 L1440,0 L0,0 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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

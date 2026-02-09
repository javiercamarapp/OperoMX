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
          d="M0,120 C180,70 360,55 540,65 C720,75 900,50 1080,60 C1260,70 1380,55 1440,60 L1440,120 L0,120 Z"
          fill="hsl(var(--hero-accent))"
          animate={{
            d: [
              "M0,120 C180,70 360,55 540,65 C720,75 900,50 1080,60 C1260,70 1380,55 1440,60 L1440,120 L0,120 Z",
              "M0,120 C180,55 360,70 540,50 C720,60 900,75 1080,55 C1260,60 1380,70 1440,55 L1440,120 L0,120 Z",
              "M0,120 C180,70 360,55 540,65 C720,75 900,50 1080,60 C1260,70 1380,55 1440,60 L1440,120 L0,120 Z",
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
          d="M0,0 C180,50 360,65 540,55 C720,45 900,65 1080,55 C1260,50 1380,65 1440,55 L1440,0 L0,0 Z"
          fill="hsl(var(--hero-accent))"
          animate={{
            d: [
              "M0,0 C180,50 360,65 540,55 C720,45 900,65 1080,55 C1260,50 1380,65 1440,55 L1440,0 L0,0 Z",
              "M0,0 C180,65 360,50 540,65 C720,60 900,45 1080,65 C1260,55 1380,50 1440,65 L1440,0 L0,0 Z",
              "M0,0 C180,50 360,65 540,55 C720,45 900,65 1080,55 C1260,50 1380,65 1440,55 L1440,0 L0,0 Z",
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

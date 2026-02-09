import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function OperoCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 0.2"],
  });

  const text =
    "Opero es la manera de llevar tu negocio al siguiente nivel, profesionalizando tu reparto diario con tecnología, control y una operación diseñada para crecer contigo.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20 min-h-[120vh] md:min-h-0 flex items-start md:items-center">
      <div data-bg-accent className="mx-auto max-w-6xl w-full bg-hero-accent rounded-3xl px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 shadow-2xl sticky top-24 md:static">
        <p className="mx-auto max-w-4xl flex flex-wrap text-2xl font-bold text-white/20 md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          {words.map((word, i) =>
            isMobile ? (
              <ScrollWord key={i} progress={scrollYProgress} index={i} total={words.length}>
                {word}
              </ScrollWord>
            ) : (
              <span key={i} className="relative mx-1 lg:mx-2.5">
                <span className="opacity-30">{word}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="absolute inset-0 text-white"
                >
                  {word}
                </motion.span>
              </span>
            )
          )}
        </p>
      </div>
    </section>
  );
}

function ScrollWord({
  children,
  progress,
  index,
  total,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = Math.min(start + 1.5 / total, 1);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <span className="relative mx-1">
      <span className="opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 text-white">
        {children}
      </motion.span>
    </span>
  );
}

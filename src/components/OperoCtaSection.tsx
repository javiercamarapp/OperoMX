import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function OperoCtaSection() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileCta /> : <DesktopCta />;
}

function DesktopCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const text =
    "Opero es la manera de llevar tu negocio al siguiente nivel, profesionalizando tu reparto diario con tecnología, control y una operación diseñada para crecer contigo.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div data-bg-accent className="mx-auto max-w-6xl bg-hero-accent rounded-3xl px-12 py-20 lg:px-16 lg:py-24 shadow-2xl">
        <p className="mx-auto max-w-4xl flex flex-wrap text-3xl font-bold text-white/20 lg:text-4xl xl:text-5xl leading-tight">
          {words.map((word, i) => (
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
          ))}
        </p>
      </div>
    </section>
  );
}

function MobileCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "center 0.6"],
  });

  const text =
    "Opero es la manera de llevar tu negocio al siguiente nivel, profesionalizando tu reparto diario con tecnología, control y una operación diseñada para crecer contigo.";
  const words = text.split(" ");
  const splitIndex = Math.floor(words.length * 0.75);

  return (
    <section ref={sectionRef} className="relative px-4 py-12">
      <div data-bg-accent className="mx-auto bg-hero-accent rounded-3xl px-8 py-16 shadow-2xl">
        <p className="flex flex-wrap text-2xl font-bold text-white/20 leading-tight">
          {words.map((word, i) => {
            if (i < splitIndex) {
              // First 75%: animate on view (no scroll needed)
              return (
                <span key={i} className="relative mx-1">
                  <span className="opacity-30">{word}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="absolute inset-0 text-white"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            }
            // Last 25%: animate on scroll
            const scrollI = i - splitIndex;
            const scrollTotal = words.length - splitIndex;
            const start = (scrollI / scrollTotal) * 0.9;
            const end = ((scrollI + 1) / scrollTotal) * 0.9;
            return <MobileWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</MobileWord>;
          })}
        </p>
      </div>
    </section>
  );
}

function MobileWord({
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
    <span className="relative mx-1">
      <span className="opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 text-white">
        {children}
      </motion.span>
    </span>
  );
}

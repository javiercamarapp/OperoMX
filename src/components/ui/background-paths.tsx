import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter-text";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="hsl(var(--hero-paths))"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.025}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-hero-foreground">
            <Typewriter
              text="Tu reparto sin complicaciones"
              speed={80}
              cursor="|"
              loop={false}
            />
          </h1>

          <div
            className="inline-block group relative p-px rounded-2xl backdrop-blur-lg 
            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300
            bg-gradient-to-b from-hero-accent/20 to-hero-foreground/10"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
              bg-hero/95 hover:bg-hero/100 text-hero-foreground transition-all duration-300 
              group-hover:-translate-y-0.5 border border-hero-foreground/10
              hover:shadow-md"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Descubre más
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                transition-all duration-300"
              >
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

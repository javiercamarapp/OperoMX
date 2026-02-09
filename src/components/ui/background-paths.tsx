import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Star } from "lucide-react";
import motoImage from "@/assets/moto.png";

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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-hero pt-32 md:pt-40">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hero-accent/10 border border-hero-accent/20 mb-8">
            <Star className="w-4 h-4 text-hero-accent" />
            <span className="text-hero-foreground/80 text-sm font-medium">
              Respaldado por líderes de la industria
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-hero-foreground whitespace-nowrap">
            Tu reparto sin{" "}
            <span className="text-hero-accent">
              <Typewriter
                text={["complicaciones", "retrasos", "preocupaciones"]}
                speed={80}
                cursor="|"
                loop={true}
                delay={2000}
                deleteSpeed={40}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-hero-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Centraliza, controla y escala tus envíos diarios desde un solo lugar, con visibilidad total y una operación diseñada para crecer contigo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="ghost"
              className="rounded-2xl px-8 py-6 text-lg font-semibold 
              bg-hero-accent hover:bg-hero-accent/90 text-white transition-all duration-300 
              hover:scale-105 border-none shadow-lg shadow-hero-accent/25"
            >
              <span>Empezar ahora</span>
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="ghost"
              className="rounded-2xl px-8 py-6 text-lg font-semibold 
              bg-hero-foreground/5 hover:bg-hero-foreground/10 text-hero-foreground border border-hero-foreground/20 
              backdrop-blur-xl transition-all duration-300"
            >
              Más información
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-hero-foreground">1M+</p>
              <p className="text-hero-foreground/50 text-sm">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-hero-foreground">50+</p>
              <p className="text-hero-foreground/50 text-sm">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-hero-foreground">24/7</p>
              <p className="text-hero-foreground/50 text-sm">Support</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Motorcycles - Full Width */}
      <div className="relative z-10 w-screen overflow-hidden h-16 md:h-20 flex items-center mb-8">
        <motion.div
          className="flex items-center gap-12 md:gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* Motos suficientes para cubrir todo el ancho sin espacios */}
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-12 md:h-16 w-auto" />
        </motion.div>
      </div>
    </div>
  );
}

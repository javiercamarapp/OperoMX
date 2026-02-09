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
    <div className="absolute inset-0 pointer-events-none top-[30%] sm:top-0 -left-[10%] -right-[10%] sm:left-0 sm:right-0 w-[120%] sm:w-full">
      <svg
        className="w-full h-full scale-[1.2] sm:scale-100 origin-center"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
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
    <div className="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-hero pt-16 sm:pt-20 md:pt-28 pb-2 px-4">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-hero-accent/10 border border-hero-accent/20 mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-hero-accent" />
            <span className="text-hero-foreground/80 text-xs sm:text-sm font-medium">
              Respaldado por líderes de la industria
            </span>
          </div>

          {/* Main Heading - Two lines on mobile */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tighter text-hero-foreground">
            <span className="block sm:inline">Tu reparto sin</span>{" "}
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
          <p className="text-sm sm:text-base md:text-lg text-hero-foreground/60 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Centraliza, controla y escala tus envíos diarios desde un solo lugar, con visibilidad total y una operación diseñada para crecer contigo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10">
            <Button
              variant="ghost"
              className="rounded-2xl px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold 
              bg-hero-accent hover:bg-hero-accent/90 text-white transition-all duration-300 
              hover:scale-105 border-none shadow-lg shadow-hero-accent/25"
            >
              <span>Empezar ahora</span>
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="ghost"
              className="rounded-2xl px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold 
              bg-hero-foreground/5 hover:bg-hero-foreground/10 text-hero-foreground border border-hero-foreground/20 
              backdrop-blur-xl transition-all duration-300"
            >
              Más información
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-md mx-auto">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-hero-foreground">1M+</p>
              <p className="text-hero-foreground/50 text-xs sm:text-sm">Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-hero-foreground">50+</p>
              <p className="text-hero-foreground/50 text-xs sm:text-sm">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-hero-foreground">24/7</p>
              <p className="text-hero-foreground/50 text-xs sm:text-sm">Support</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Motorcycles - Full Width */}
      <div className="relative z-10 w-screen overflow-hidden h-12 sm:h-14 md:h-20 flex items-center">
        <motion.div
          className="flex items-center gap-8 sm:gap-12 md:gap-20"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* Motos suficientes para cubrir todo el ancho sin espacios */}
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
          <img src={motoImage} alt="Moto" className="h-8 sm:h-12 md:h-16 w-auto" />
        </motion.div>
      </div>
    </div>
  );
}

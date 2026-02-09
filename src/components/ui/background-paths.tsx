import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Beams } from "@/components/ui/ethereal-beams";
import { Star } from "lucide-react";

export function BackgroundPaths() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#FF5B48"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <Star className="w-4 h-4 text-hero-accent" />
            <span className="text-white/90 text-sm font-medium">
              Respaldado por líderes de la industria
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
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
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transforma tu logística con nuestra plataforma de vanguardia. Diseñada para negocios, construida para rendimiento, creada para la excelencia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="ghost"
              className="rounded-full px-8 py-6 text-lg font-semibold 
              bg-hero-accent hover:bg-hero-accent/90 text-white transition-all duration-300 
              hover:scale-105 border-none shadow-lg shadow-hero-accent/25"
            >
              <span>Empezar ahora</span>
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-8 py-6 text-lg font-semibold 
              bg-white/5 hover:bg-white/10 text-white border border-white/20 
              backdrop-blur-xl transition-all duration-300"
            >
              Más información
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">1M+</p>
              <p className="text-white/60 text-sm">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-white/60 text-sm">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
              <p className="text-white/60 text-sm">Support</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none z-[1]" />
    </div>
  );
}

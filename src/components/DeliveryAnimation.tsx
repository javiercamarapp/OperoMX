import { motion } from "framer-motion";
import { Store } from "lucide-react";
import motoImage from "@/assets/moto.png";

export function DeliveryAnimation() {
  return (
    <div className="relative w-full h-40 mt-8">
      {/* Road line */}
      <div className="absolute bottom-6 left-0 right-0 h-0.5 bg-muted-foreground/30" />

      {/* Store icon - fixed position on the right */}
      <div className="absolute right-0 bottom-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-lg bg-hero-accent/10 flex items-center justify-center border-2 border-hero-accent">
            <Store className="w-7 h-7 text-hero-accent" />
          </div>
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-hero-accent"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Motorcycle animation - ida y vuelta */}
      <motion.div
        className="absolute bottom-8 left-0"
        animate={{
          left: ["0%", "calc(100% - 160px)", "0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src={motoImage}
          alt="Moto de delivery"
          className="w-24 h-auto origin-center"
          animate={{ 
            y: [0, -2, 0],
            scaleX: [1, 1, -1, -1, 1],
          }}
          transition={{
            y: {
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scaleX: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.49, 0.50, 0.99, 1],
            },
          }}
        />
      </motion.div>

      {/* Motion trail */}
      <motion.div
        className="absolute bottom-7 left-0 h-0.5 bg-gradient-to-r from-transparent via-hero-accent/50 to-transparent rounded-full"
        animate={{
          width: ["0%", "30%", "0%", "30%", "0%"],
          left: ["0%", "35%", "65%", "30%", "0%"],
          opacity: [0, 0.6, 0, 0.6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
import { motion } from "framer-motion";
import { Store } from "lucide-react";
import motoImage from "@/assets/moto.png";

export function DeliveryAnimation() {
  return (
    <div className="relative w-full h-40 mt-8 overflow-hidden">
      {/* Road line */}
      <div className="absolute bottom-10 left-0 right-0 h-0.5 bg-muted-foreground/20" />

      {/* Store icon - fixed position */}
      <div className="absolute right-8 bottom-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-lg bg-hero-accent/10 flex items-center justify-center border-2 border-hero-accent">
            <Store className="w-8 h-8 text-hero-accent" />
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
        className="absolute bottom-2"
        animate={{
          x: ["0%", "calc(100% - 140px)", "0%"],
          scaleX: [1, 1, -1, -1, 1],
        }}
        transition={{
          x: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 1],
          },
          scaleX: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.44, 0.46, 0.99, 1],
          },
        }}
      >
        <motion.img
          src={motoImage}
          alt="Moto de delivery"
          className="w-20 h-auto"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Motion trail */}
      <motion.div
        className="absolute bottom-8 h-1 bg-gradient-to-r from-transparent via-hero-accent/40 to-transparent rounded-full"
        animate={{
          width: ["0%", "30%", "0%", "30%", "0%"],
          x: ["0%", "50%", "70%", "20%", "0%"],
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
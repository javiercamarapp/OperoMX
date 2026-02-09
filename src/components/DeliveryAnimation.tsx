import { motion } from "framer-motion";
import { Store } from "lucide-react";

export function DeliveryAnimation() {
  return (
    <div className="relative w-full h-32 mt-8 overflow-hidden">
      {/* Road line */}
      <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-muted-foreground/20" />
      
      {/* Dashed road markings */}
      <div className="absolute bottom-8 left-0 right-0 flex gap-4">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-8 h-0.5 bg-muted-foreground/30"
            animate={{ x: [-20, -60] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

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

      {/* Motorcycle animation */}
      <motion.div
        className="absolute bottom-4"
        animate={{
          x: ["0%", "calc(100% - 120px)"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <motion.svg
          width="60"
          height="40"
          viewBox="0 0 60 40"
          fill="none"
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Wheel back */}
          <circle cx="12" cy="32" r="7" className="stroke-hero-accent" strokeWidth="2" fill="none" />
          <circle cx="12" cy="32" r="3" className="fill-hero-accent/30" />
          
          {/* Wheel front */}
          <circle cx="48" cy="32" r="7" className="stroke-hero-accent" strokeWidth="2" fill="none" />
          <circle cx="48" cy="32" r="3" className="fill-hero-accent/30" />
          
          {/* Body */}
          <path
            d="M12 32 L20 20 L35 18 L45 25 L48 32"
            className="stroke-hero-accent"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
          />
          
          {/* Seat */}
          <path
            d="M22 20 L30 16 L35 18"
            className="stroke-hero-accent fill-hero-accent/20"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          
          {/* Handlebar */}
          <path
            d="M42 18 L48 12 L52 14"
            className="stroke-hero-accent"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Delivery box */}
          <rect
            x="8"
            y="10"
            width="14"
            height="10"
            rx="2"
            className="fill-hero-accent stroke-hero-accent"
            strokeWidth="1"
          />
          <path
            d="M10 15 L20 15"
            stroke="white"
            strokeWidth="1.5"
          />
        </motion.svg>
      </motion.div>

      {/* Motion trail */}
      <motion.div
        className="absolute bottom-6 left-0 h-1 bg-gradient-to-r from-transparent via-hero-accent/30 to-transparent"
        animate={{
          width: ["0%", "40%", "0%"],
          x: ["0%", "20%", "60%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

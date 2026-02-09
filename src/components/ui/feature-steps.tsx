"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to current feature index
  const currentFeatureFloat = useTransform(
    scrollYProgress,
    [0, 1],
    [0, features.length - 0.01]
  );

  const [currentFeature, setCurrentFeature] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = currentFeatureFloat.on("change", (v) => {
      setCurrentFeature(Math.floor(Math.max(0, Math.min(v, features.length - 1))));
    });
    return unsubscribe;
  }, [currentFeatureFloat, features.length]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full p-8 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
              {title}
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="order-2 md:order-1 space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "flex items-start gap-6 p-4 rounded-xl transition-all duration-300",
                      index === currentFeature
                        ? "bg-hero-accent/10 opacity-100"
                        : "opacity-30"
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: index === currentFeature ? 1 : 0.3, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 mt-1 transition-colors duration-300",
                        index <= currentFeature
                          ? "bg-hero-accent border-hero-accent text-white"
                          : "border-muted-foreground"
                      )}
                    >
                      {index <= currentFeature ? (
                        <span className="text-sm font-bold">✓</span>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {index + 1}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.step}
                      </h3>
                      <p className="text-base font-medium text-foreground mb-1">
                        {feature.title}
                      </p>
                      {index === currentFeature && (
                        <motion.p
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.content}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                className={cn(
                  "order-1 md:order-2 relative overflow-hidden rounded-xl",
                  imageHeight
                )}
              >
                <AnimatePresence mode="wait">
                  {features.map(
                    (feature, index) =>
                      index === currentFeature && (
                        <motion.div
                          key={index}
                          className="absolute inset-0 rounded-xl overflow-hidden"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <img
                            src={feature.image}
                            alt={feature.title || feature.step}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

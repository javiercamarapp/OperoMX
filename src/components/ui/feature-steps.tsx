"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  const feature = features[currentFeature];

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text - Left */}
          <div className="order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <span className="text-sm font-bold text-hero-accent uppercase tracking-wider">
                  {feature.step}
                </span>
                {feature.title && (
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {feature.title}
                  </h3>
                )}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {feature.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image - Right */}
          <div
            className={cn(
              "order-1 md:order-2 relative overflow-hidden rounded-xl w-full",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
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
            </AnimatePresence>
          </div>
        </div>

        {/* Step buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {features.map((f, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden",
                index === currentFeature
                  ? "bg-hero-accent text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {/* Progress bar overlay for active button */}
              {index === currentFeature && (
                <motion.div
                  className="absolute inset-0 bg-white/20 origin-left rounded-full"
                  style={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1 }}
                />
              )}
              <span className="relative z-10">Paso {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

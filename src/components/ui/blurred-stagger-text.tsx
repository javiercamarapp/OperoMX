"use client"

import * as React from "react"
import { motion } from "motion/react";

export const BlurredStagger = ({
  text = "",
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`flex flex-wrap justify-center font-bold ${className}`}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterAnimation}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

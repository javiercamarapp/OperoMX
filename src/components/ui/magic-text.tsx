"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-2 mt-1 inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-foreground"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="flex flex-wrap text-lg md:text-xl leading-relaxed">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

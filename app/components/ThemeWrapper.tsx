"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const pageVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
    x: "-100%",
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: "0%",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    x: "100%",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme} // Trigger animation when theme changes
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`page ${theme}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeWrapper;

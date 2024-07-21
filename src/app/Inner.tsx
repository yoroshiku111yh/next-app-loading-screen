"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Inner({ children }: { children: React.ReactNode }) {
  const animate = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const slide: Variants = {
    initial: { top: "100vh", opacity: 0 },
    enter: {
      top: "100vh",
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      top: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const page: Variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const loading = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <>
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 w-[100vw] h-[100vh] bg-white"
        {...animate(slide)}
      />
      <motion.div {...animate(page)}>{children}</motion.div>
    </>
  );
}

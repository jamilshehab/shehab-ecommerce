"use client";

import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export default function MotionWrapper({
  children,
  delay = 0,
  y = 20,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

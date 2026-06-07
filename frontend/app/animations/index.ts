import { Variants } from "framer-motion";

export const scrollCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12, // small movement = safe for old devices
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

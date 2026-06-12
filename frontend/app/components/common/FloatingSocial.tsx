"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/+96181066539"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: "#25D366" }} // exact WhatsApp green
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://instagram.com/geftorashop"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        }}
      >
        <FaInstagram className="text-white text-2xl" />
      </motion.a>
    </div>
  );
}

"use client";

import { useCartStore } from "@/app/zustand/zustand";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

/* =========================
   TYPES
========================= */

type ProductModalProps = {
  selected: any;
  onClose: () => void;
};

/* =========================
   COMPONENT
========================= */

const ProductModal = ({ selected, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  // ONLY backend-driven flag
  const isOutOfStock = selected?.stock;

  /* =========================
     QUANTITY HANDLERS
  ========================= */

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addToCart({
      id: selected.id,
      title: selected.name,
      price: selected.price,
      image: selected.imageUrl,
      quantity,
    });

    onClose();
  };

  /* =========================
     ANIMATIONS
  ========================= */

  const modalBackdrop = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalCard = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  };

  const imagePop = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* MODAL */}
      <motion.div
        className="bg-white/90 backdrop-blur-xl rounded-3xl w-[95%] sm:max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
        variants={modalCard}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* IMAGE */}
          <motion.div className="relative" variants={imagePop}>
            <Image
              src={selected.imageUrl}
              alt={selected.name}
              width={1200}
              height={1200}
              className="object-cover w-full h-full"
            />

            {/* ONLY STATUS */}
            {isOutOfStock && (
              <div className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                Out of Stock
              </div>
            )}
          </motion.div>

          {/* CONTENT */}
          <div className="p-6 sm:p-8 flex flex-col justify-center relative">
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-3 cursor-pointer right-3 h-10 w-10 rounded-full bg-white/80 shadow flex items-center justify-center"
            >
              ✕
            </button>

            {/* TITLE */}
            <h3 className="text-xl sm:text-3xl font-semibold capitalize">
              {selected.name}
            </h3>

            {/* PRICE */}
            <p className="text-gray-500 mt-2 text-lg">${selected.price}</p>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              {selected.description}
            </p>

            {/* QUANTITY */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Quantity</p>

              <div className="flex items-center border rounded-full w-fit overflow-hidden">
                <button
                  onClick={decreaseQuantity}
                  className="h-10 w-10 cursor-pointer flex items-center justify-center text-xl"
                >
                  -
                </button>

                <div className="h-10 min-w-[60px] flex items-center justify-center border-x">
                  {quantity}
                </div>

                <button
                  onClick={increaseQuantity}
                  className="h-10 cursor-pointer w-10 flex items-center justify-center text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <div className="mt-8">
              <button
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 text-white disabled:opacity-40"
              >
                <FaShoppingBag />
                {isOutOfStock ? "Out Of Stock" : `Add ${quantity} To Cart`}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;

"use client";

import toast from "react-hot-toast";
import { useCartStore } from "../zustand/zustand";
import { Product } from "@/app/types";

export function useAddToCart() {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      addToCart({
        id: product._id,
        title: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1,
      });

      toast.success("Added to cart 🛒");
    } catch (err) {
      toast.error("Failed to add product");
    }
  };

  return { handleAddToCart };
}

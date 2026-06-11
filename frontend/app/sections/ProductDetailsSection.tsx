"use client";

import Image from "next/image";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useCartStore } from "@/app/zustand/zustand";

type Props = {
  product: any;
};

export default function ProductDetailsClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  // ✅ STOCK from backend ONLY
  const stock = product?.stock ?? 0;

  const isOutOfStock = stock === 0;

  const increase = () => {
    if (quantity >= stock) return;
    setQuantity((p) => p + 1);
  };

  const decrease = () => {
    setQuantity((p) => Math.max(1, p - 1));
  };

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addToCart({
      id: product._id,
      title: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity,
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />

          {/* STOCK BADGE (ONLY REAL STATE) */}
          {isOutOfStock && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold capitalize">{product.name}</h1>

          <p className="text-xl text-gray-600 mt-2">${product.price}</p>

          <p className="text-gray-500 mt-5 leading-relaxed">
            {product.description}
          </p>

          {/* QUANTITY */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Quantity</p>

            <div className="flex items-center border rounded-full w-fit overflow-hidden">
              <button
                onClick={decrease}
                className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-100"
              >
                -
              </button>

              <div className="w-14 text-center">{quantity}</div>

              <button
                onClick={increase}
                disabled={quantity >= stock}
                className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-100 disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="mt-8 flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-2xl disabled:opacity-40"
          >
            <FaShoppingBag />
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

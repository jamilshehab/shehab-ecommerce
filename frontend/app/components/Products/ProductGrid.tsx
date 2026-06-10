"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/app/types";
import ProductModal from "./Modal/ProductModal";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onQuickView={setSelected}
          />
        ))}
      </div>

      {/* GLOBAL MODAL */}
      <AnimatePresence>
        {selected && (
          <ProductModal selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

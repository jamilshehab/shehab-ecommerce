import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaShoppingBag } from "react-icons/fa";
import { scrollCardVariants } from "@/app/animations";
import { Product } from "@/app/types";
import { useAddToCart } from "@/app/hooks/addToCart";

type Props = {
  product: Product;
  onQuickView: (product: Product) => void;
};

const ProductCard = ({ product, onQuickView }: Props) => {
  const { handleAddToCart } = useAddToCart();

  const isOutOfStock = product.stock === 0;

  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isOutOfStock) return;

    handleAddToCart(product);
  };

  return (
    <motion.div variants={scrollCardVariants} className="group">
      <Link href={`/product/${product.slug}`}>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">
          {/* IMAGE */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {product.isNew && (
              <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-[11px] text-white">
                NEW
              </span>
            )}

            {/* STOCK BADGE (ONLY SIMPLE) */}
            {isOutOfStock && (
              <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-[11px] text-white">
                Sold Out
              </span>
            )}

            {/* ACTIONS */}
            <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 gap-2 opacity-0 transition group-hover:opacity-100 md:flex">
              {/* QUICK VIEW */}
              <button
                className="rounded-full bg-white p-3 shadow"
                onClick={(e) => {
                  e.preventDefault();
                  onQuickView(product);
                }}
              >
                <FaEye size={14} />
              </button>

              {/* ADD TO CART */}
              <button
                className="rounded-full bg-black p-3 text-white shadow disabled:opacity-40"
                onClick={onAdd}
                disabled={isOutOfStock}
              >
                <FaShoppingBag size={14} />
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4">
            <h3 className="line-clamp-1 text-sm font-medium">{product.name}</h3>
            <p className="text-lg font-semibold">${product.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

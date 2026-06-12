"use client";

import { useCartStore } from "@/app/zustand/zustand";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const pathname = usePathname();
  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={closeCart}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-full sm:w-[420px]
          bg-white shadow-2xl
          transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-300">
          <h2 className="text-lg font-semibold">Your Cart</h2>

          <button
            onClick={closeCart}
            className="h-9 w-9 flex border-slate-300 items-center justify-center rounded-full hover:bg-gray-100 transition"
          >
            <IoClose size={18} />
          </button>
        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 ">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty 🛒
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className="flex gap-4 items-center border-b border-slate-300 pb-4"
              >
                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="rounded-xl object-cover"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">${item.price}</p>

                  {/* QUANTITY */}
                  <div className="flex items-center border-slate-300 gap-2 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 transition"
                    >
                      -
                    </button>

                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition text-sm"
                >
                  <IoClose size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-slate-300 p-5 bg-white">
          <div className="flex justify-between mb-4">
            <span className="text-sm text-gray-500">Total</span>
            <span className="font-semibold text-lg">${total.toFixed(2)}</span>
          </div>

          <Link
            href="/cart"
            className="block text-center bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            View Cart
          </Link>

          <button
            onClick={closeCart}
            className="mt-2 w-full text-sm text-gray-500 hover:text-black transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}

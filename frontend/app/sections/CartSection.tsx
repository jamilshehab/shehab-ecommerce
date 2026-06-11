"use client";

import Image from "next/image";
import { useCartStore } from "@/app/zustand/zustand";

export default function CartSection() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* HEADER */}

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-24">
            Your cart is empty 🛒
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* =========================
                LEFT: ITEMS
            ========================= */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
                >
                  {/* IMAGE */}
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1 flex flex-col justify-between min-h-[96px]">
                    <div>
                      <h2 className="font-medium text-base line-clamp-1">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1">
                        ${item.price}
                      </p>
                    </div>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-2 mt-3">
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
                    className="text-xs text-gray-400 hover:text-red-500 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* =========================
                RIGHT: SUMMARY
            ========================= */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                </div>

                <div className="border-t my-5" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
                  Checkout
                </button>

                {/* SECONDARY ACTION */}
                <button
                  onClick={clearCart}
                  className="mt-3 w-full text-sm text-gray-400 hover:text-red-500 transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

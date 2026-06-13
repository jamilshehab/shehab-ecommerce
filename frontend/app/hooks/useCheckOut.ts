"use client";

import { useState } from "react";
import { useCartStore } from "@/app/zustand/zustand";
import toast from "react-hot-toast";

type CheckoutData = {
  fullName: string;
  phone: string;
  address: string;
};

export function useCheckout() {
  const { cart, clearCart } = useCartStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = async (data: CheckoutData, resetForm?: () => void) => {
    try {
      setLoading(true);
      setError(null);

      if (!cart.length) throw new Error("Cart is empty");

      // ✅ CLEAN ORDER PAYLOAD
      const orderPayload = {
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
        total,
        createdAt: new Date().toISOString(),
        status: "pending",
      };

      // 1️⃣ Save order to API (Sanity backend)
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      if (!res.ok) {
        toast.error("Failed to create order");
        throw new Error("Order failed");
      }

      // ✅ SUCCESS

      // 2️⃣ WhatsApp message
      const message = `
🛒 New Order

👤 Name: ${data.fullName}
📱 Phone: ${data.phone}
📍 Address: ${data.address}

📦 Items:
${cart
  .map(
    (i) =>
      `- ${i.title} x${i.quantity} = $${i.price * i.quantity}
🖼 ${i.image}`,
  )
  .join("\n\n")}

💰 Total: $${total}
      `;

      const whatsappNumber = "96181066539"; // no +

      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // 3️⃣ Clear cart
      clearCart();
      resetForm?.(); // reset inputs
      toast.success("Order placed successfully 🎉");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    placeOrder,
    loading,
    error,
    total,
  };
}

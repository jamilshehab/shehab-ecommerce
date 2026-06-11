"use client";

import { useState } from "react";
import { useCartStore } from "@/app/zustand/zustand";

type CheckoutData = {
  name: string;
  phone: string;
  address: string;
};

export function useCheckout() {
  const { cart, clearCart } = useCartStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = async (data: CheckoutData) => {
    try {
      setLoading(true);
      setError(null);

      if (!cart.length) throw new Error("Cart is empty");

      // ✅ CLEAN ORDER PAYLOAD
      const orderPayload = {
        name: data.name,
        phone: data.phone,
        address: data.address,
        items: cart.map((item) => ({
          productId: item.id,
          title: item.title,
          image: item.image, // IMPORTANT: must be URL string
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

      if (!res.ok) throw new Error("Failed to create order");

      // 2️⃣ WhatsApp message
      const message = `
🛒 New Order

👤 Name: ${data.name}
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

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
      );

      // 3️⃣ Clear cart
      clearCart();
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

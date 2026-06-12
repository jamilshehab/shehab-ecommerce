"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useCheckout } from "../hooks/useCheckOut";

export default function CheckoutForm() {
  const { placeOrder, loading, error, total } = useCheckout();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !address) return;

    await placeOrder({
      fullName,
      phone,
      address,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow space-y-4"
        >
          <h2 className="text-xl font-semibold">Checkout</h2>

          <input
            className="w-full border border-slate-300 p-3 rounded-xl"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <PhoneInput
            value={phone}
            onChange={setPhone}
            defaultCountry="LB"
            className="border border-slate-300 p-3 rounded-xl"
            placeholder="Phone number"
          />

          <textarea
            className="w-full border border-slate-300 p-3 rounded-xl"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between font-bold border-t border-slate-300 pt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

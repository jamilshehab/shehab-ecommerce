"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsAppSubscribePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-[92%] max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute cursor-pointer top-4 right-4 z-10 text-slate-600 hover:text-black transition text-lg"
        >
          ✕
        </button>

        {/* Image Side */}
        <div className="hidden md:block relative">
          <Image
            src="/instagram/2.jpg"
            fill
            alt="gift community"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-gray-400">Giftora Community</h3>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-black">
              Join our WhatsApp community 🎁
            </h2>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            Get exclusive offers, new arrivals, and curated gift ideas directly
            on WhatsApp. No spam only updates that matter.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="https://whatsapp.com/channel/0029VbCg6jr3GJP3EKKYe02R"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full  cursor-pointer bg-black px-5 hover:opacity-90 text-white py-4 rounded-xl transition disabled:opacity-50"
            >
              Join WhatsApp Channel
            </Link>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 mt-5">You can leave anytime.</p>
        </div>
      </div>
    </div>
  );
}

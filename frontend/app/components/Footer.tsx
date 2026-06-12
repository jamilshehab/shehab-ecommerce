"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-slate-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        {/* BRAND */}
        <div>
          <h3 className="text-lg font-bold">Giftora</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Thoughtful gifts for every moment. Curated products designed to turn
            everyday shopping into meaningful experiences.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
            Quick Links
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>
              <Link href="/shop" className="hover:text-black">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/featured" className="hover:text-black">
                Featured
              </Link>
            </li>
            <li>
              <Link href="/new" className="hover:text-black">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/gifts" className="hover:text-black">
                Gifts
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA (3rd COLUMN) */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
            Social
          </h4>

          <p className="mt-4 text-sm text-neutral-600">
            Stay connected for new gifts and updates.
          </p>

          <div className="mt-5 flex gap-4">
            <Link
              href="https://instagram.com/yourusername"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <FaInstagram className="text-white text-lg" />
            </Link>

            <Link
              href="https://wa.me/961XXXXXXXX"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: "#25D366" }}
            >
              <FaWhatsapp className="text-white text-lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Giftora. All rights reserved.</p>

          <p className="text-center text-md text-neutral-400 md:text-right">
            Developed by{" "}
            <Link href="mailto:shehabjamil20@gmail.com">
              <span className="font-medium text-md text-black">
                Jamil Shehab
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

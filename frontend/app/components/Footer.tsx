"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
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
            Shop
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
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
            Company
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>
              <Link href="/about" className="hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-black">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-black">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
            Stay Updated
          </h4>
          <p className="mt-4 text-sm text-neutral-600">
            Get updates on new products and special offers.
          </p>

          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-full border border-black/10 px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-r-full bg-black px-5 text-sm text-white hover:opacity-90"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Giftora. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

// import { useCartStore } from "@/app/lib/zustand/zustand";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const { cart, openCart } = useCartStore();

  // const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className={`relative flex items-center rounded-full border border-black/5 px-5 md:px-7 py-4 transition-all duration-300 ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                : "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            }`}
          >
            {/* LEFT - LOGO */}
            <div className="flex items-center">
              {/* MOBILE MENU */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden mr-3 text-black"
              >
                {menuOpen ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </button>

              <Link href="/" className="flex items-center shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="  Giftora Logo"
                  width={95}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* CENTER LINKS */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] font-medium text-neutral-700">
              <Link href="/" className="hover:opacity-60 transition">
                Home
              </Link>

              <Link href="/about" className="hover:opacity-60 transition">
                About
              </Link>

              <Link href="/shop" className="hover:opacity-60 transition">
                Shop
              </Link>

              <Link href="/careers" className="hover:opacity-60 transition">
                Careers
              </Link>

              <Link href="/franchise" className="hover:opacity-60 transition">
                Franchise
              </Link>

              <Link href="/contact" className="hover:opacity-60 transition">
                Contact
              </Link>
            </nav>

            {/* RIGHT - CART */}
            <div className="ml-auto flex items-center">
              <button
                // onClick={openCart}
                className="relative cursor-pointer text-black transition hover:opacity-60"
              >
                <AiOutlineShoppingCart className="text-[22px]" />

                {/* {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-dark-brown text-[10px] text-white">
                    {totalItems}
                  </span>
                )} */}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[88px] left-1/2 z-40 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 overflow-hidden rounded-3xl border border-black/5 bg-white/90 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6 text-[15px] font-medium text-neutral-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>

          <Link href="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>

          <Link href="/franchise" onClick={() => setMenuOpen(false)}>
            Franchise
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

"use client";

// import { useCartStore } from "@/app/lib/zustand/zustand";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "@/app/zustand/zustand";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart, openCart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-4 left-1/2 z-50 w-full -translate-x-1/2 px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className={`relative flex items-center rounded-full border border-black/5 px-5 md:px-7 py-4 transition-all duration-300 ${
              scrolled
                ? "bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
                : "bg-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            }`}
          >
            {/* LEFT - LOGO + MOBILE MENU */}
            <div className="flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="mr-3 text-black md:hidden"
              >
                {menuOpen ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </button>

              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/logo/logo.png"
                  alt="Giftora Logo"
                  width={95}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* CENTER LINKS */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[15px] font-medium text-neutral-700 md:flex">
              <Link href="/shop" className="transition hover:opacity-60">
                Shop
              </Link>

              <Link href="/featured" className="transition hover:opacity-60">
                Featured
              </Link>

              <Link href="/new" className="transition hover:opacity-60">
                New
              </Link>

              <Link href="/gifts" className="transition hover:opacity-60">
                Gifts
              </Link>
            </nav>

            {/* RIGHT - CART */}
            <div className="ml-auto flex items-center">
              <button
                onClick={openCart}
                className="relative cursor-pointer text-black transition hover:opacity-60"
              >
                <AiOutlineShoppingCart className="text-[22px]" />

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-1/2 top-[88px] z-40 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-3xl border border-black/5 bg-white/90 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6 text-[15px] font-medium text-neutral-700">
          <Link href="/shop" onClick={closeMenu}>
            Shop
          </Link>

          <Link href="/featured" onClick={closeMenu}>
            Featured
          </Link>

          <Link href="/new" onClick={closeMenu}>
            New Arrivals
          </Link>

          <Link href="/gifts" onClick={closeMenu}>
            Gifts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

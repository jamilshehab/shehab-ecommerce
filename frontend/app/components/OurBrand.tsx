"use client";

import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-slate-100 px-6 py-20 md:px-20">
      <div className="mx-auto max-w-5xl   text-center">
        {/* Small label */}
        <h3 className="text-sm font-medium my-4 tracking-wide text-black/70 uppercase">
          Giftora Experience
        </h3>

        {/* Main title */}
        <h2 className="text-3xl my-4  font-bold leading-tight md:text-5xl">
          <span className="text-primary">
            Gifts are not objects they are memories waiting to happen
          </span>
        </h2>

        {/* Body text */}
        <p className="mx-auto max-w-2xl text-base my-4  leading-7 text-black/70 md:text-lg">
          At Giftora, we believe every gift carries a story. From curated
          essentials to personalized pieces, we connect people through
          meaningful products crafted for every occasion, every emotion, and
          every moment worth remembering.
        </p>

        {/* CTA */}
        <div className="flex justify-center my-4 ">
          <Link
            href="/about"
            className="group relative px-8 py-3 rounded-full border border-black/20 overflow-hidden"
          >
            <span className="relative z-10 text-black group-hover:text-white transition">
              Discover Our Story
            </span>

            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

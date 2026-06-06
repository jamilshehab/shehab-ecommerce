"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="relative h-screen w-full group overflow-hidden">
      {/* ARROWS */}
      <div className="geftora-prev">
        <FiChevronLeft />
      </div>

      <div className="geftora-next">
        <FiChevronRight />
      </div>

      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".geftora-next",
          prevEl: ".geftora-prev",
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {/* ===================== */}
        {/* SLIDE 1 - BRAND INTRO */}
        {/* ===================== */}
        <SwiperSlide>
          <Image
            src="/slider/1.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl text-white">
              {/* LOGO */}
              <div className="flex justify-center mb-6 animate-fadeUp">
                <Image
                  src="/logo/logo.png"
                  alt="Geftora Logo"
                  width={320}
                  height={120}
                  className="
                    w-[180px]
                    sm:w-[240px]
                    md:w-[300px]
                    lg:w-[360px]
                    h-auto
                    object-contain
                    brightness-0
                    invert
                    drop-shadow-2xl
                  "
                />
              </div>

              <p className="text-lg md:text-2xl text-white/80 animate-fadeUp delay-200">
                Explore premium gifts designed to make every moment
                unforgettable.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block px-8 py-3 rounded-full bg-white text-black font-medium
                hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-lg animate-fadeUp delay-300"
              >
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ===================== */}
        {/* SLIDE 2 */}
        {/* ===================== */}
        <SwiperSlide>
          <Image
            src="/slider/2.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold md:text-6xl font-display animate-fadeUp">
                Make Every Moment Special
              </h1>

              <p className="mt-5 text-lg md:text-2xl text-white/80 animate-fadeUp delay-200">
                Premium curated gifts for birthdays, anniversaries, and
                unforgettable celebrations.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block px-8 py-3 rounded-full bg-white text-black font-medium
                hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-lg animate-fadeUp delay-300"
              >
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ===================== */}
        {/* SLIDE 3 */}
        {/* ===================== */}
        <SwiperSlide>
          <Image
            src="/slider/3.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold md:text-6xl font-display animate-fadeUp">
                Designed With Love
              </h1>

              <p className="mt-5 text-lg md:text-2xl text-white/80 animate-fadeUp delay-200">
                Unique handcrafted gifts that express emotion and meaning in
                every detail.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block px-8 py-3 rounded-full bg-white text-black font-medium
                hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-lg animate-fadeUp delay-300"
              >
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

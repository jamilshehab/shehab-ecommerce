"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Global Shopping Experience",
    subtitle: "Discover curated products from around the world",
    image: "/slider/slide-1.jpg",
    href: "/shop",
  },
  {
    id: 2,
    title: "Premium Lifestyle Picks",
    subtitle: "Quality products, simple shopping",
    image: "/slider/slider-2.jpg",
    href: "/shop",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        speed={900}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-screen w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-6xl px-6 text-white">
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 max-w-xl text-lg text-white/80">
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.href}
                    className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-white backdrop-blur hover:bg-black/70"
      >
        ←
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-white backdrop-blur hover:bg-black/70"
      >
        →
      </button>
    </section>
  );
}

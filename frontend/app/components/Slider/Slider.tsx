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
    image: "/slider/slider-4.jpg",
    href: "/shop",
  },
  {
    id: 2,
    title: "Premium Lifestyle Picks",
    subtitle: "Quality products, simple shopping",
    image: "/slider/slider-5.jpg",
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
        className="h-[80vh] md:h-screen w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[80vh] md:h-screen w-full">
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="mx-auto max-w-4xl text-center text-white">
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.href}
                    className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
                  >
                    Explore Collections
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop Navigation */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-white backdrop-blur transition hover:bg-black/70 md:block"
      >
        ←
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-white backdrop-blur transition hover:bg-black/70 md:block"
      >
        →
      </button>
    </section>
  );
}

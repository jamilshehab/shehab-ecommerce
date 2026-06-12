"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import Image from "next/image";

import { Product } from "@/app/types";
import {
  SwiperNext,
  SwiperPrev,
} from "../components/CustomArrows/CustomArrows";

type Props = {
  products: Product[];
};
export const dynamic = "force-dynamic";
export default function RelatedProducts({ products }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Related Products</h2>

          <div className="flex gap-2">
            <SwiperPrev onClick={() => swiperRef.current?.slidePrev()} />
            <SwiperNext onClick={() => swiperRef.current?.slideNext()} />
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p._id}>
              <Link href={`/product/${p.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  {/* IMAGE FIX (important) */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="text-gray-500">${p.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

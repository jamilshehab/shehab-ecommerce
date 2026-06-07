"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

 
import type { Swiper as SwiperType } from "swiper";
import { Product } from "@/app/types";
import { SwiperNext, SwiperPrev } from "../CustomArrows/CustomArrows";
import ProductCard from "../Products/ProductCard";

type Props = {
  products: Product[];
};

const FeaturedProductsClient = ({ products }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative py-16">
      {/* HEADER */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Featured Products</h2>

          <div className="flex gap-2">
            <SwiperPrev onClick={() => swiperRef.current?.slidePrev()} />
            <SwiperNext onClick={() => swiperRef.current?.slideNext()} />
          </div>
        </div>
      </div>

      {/* SWIPER */}
      <div className="container mx-auto max-w-6xl px-4 py-2">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id} className="py-4">
              <div className="px-1">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProductsClient;
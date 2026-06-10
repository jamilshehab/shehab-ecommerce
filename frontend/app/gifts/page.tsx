import { client } from "@/sanity/lib/client";
import {
  CATEGORY_QUERY,
  FEATURED_PRODUCTS_QUERY,
  GIFT_PRODUCT_QUERY,
} from "@/sanity/lib/queries";

import GiftSection from "../sections/GiftSection";

export default async function GiftPage() {
  const categoryList = await client.fetch(CATEGORY_QUERY);

  const giftProducts = await client.fetch(GIFT_PRODUCT_QUERY);
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      {/* HERO */}
      {/* <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            Collection
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Featured Products
          </h1>

          <p className="mt-4 max-w-xl text-gray-600">
            Hand-selected Lebanese crafts made with care, culture, and detail.
          </p>
        </div>
      </section> */}
      <GiftSection giftProducts={giftProducts} categoryList={categoryList} />
      {/* TOOLBAR */}
    </main>
  );
}

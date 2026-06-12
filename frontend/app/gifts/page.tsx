import { client } from "@/sanity/lib/client";
import {
  CATEGORY_QUERY,
  FEATURED_PRODUCTS_QUERY,
  GIFT_PRODUCT_QUERY,
} from "@/sanity/lib/queries";

import GiftSection from "../sections/GiftSection";
import Breadcrumb from "../components/common/Breadcrumb";

export default async function GiftPage() {
  const categoryList = await client.fetch(CATEGORY_QUERY);

  const giftProducts = await client.fetch(GIFT_PRODUCT_QUERY);
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <Breadcrumb
        items={[
          {
            label: "Gifts",
          },
        ]}
      />

      <GiftSection giftProducts={giftProducts} categoryList={categoryList} />
      {/* TOOLBAR */}
    </main>
  );
}

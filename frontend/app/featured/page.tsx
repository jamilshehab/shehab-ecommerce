import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY, FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries";

import FeaturedSection from "../sections/FeaturedSection";
import Breadcrumb from "../components/common/Breadcrumb";
export const dynamic = "force-dynamic";
export default async function FeaturedProductsPage() {
  const categoryList = await client.fetch(CATEGORY_QUERY);

  const featuredProducts = await client.fetch(FEATURED_PRODUCTS_QUERY);
  return (
    <main className="">
      <Breadcrumb items={[{ label: "Featured Products" }]} />
      <FeaturedSection
        featuredProducts={featuredProducts}
        categoryList={categoryList}
      />
      {/* TOOLBAR */}
    </main>
  );
}

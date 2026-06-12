import Breadcrumb from "@/app/components/common/Breadcrumb";
import ProductListingSection from "@/app/sections/ProductListingSection";
import { client } from "@/sanity/lib/client";
import {
  CATEGORY_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";
export const dynamic = "force-dynamic";
export default async function ProductSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const products = await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, {
    slug,
  });

  const categoryList = await client.fetch(CATEGORY_QUERY);

  return (
    <main>
      <Breadcrumb
        items={[
          {
            label: slug,
          },
        ]}
      />
      <ProductListingSection
        productList={products}
        categoryList={categoryList}
      />
    </main>
  );
}

import Breadcrumb from "@/app/components/common/Breadcrumb";
import ProductDetailsClient from "@/app/sections/ProductDetailsSection";
import RelatedProducts from "@/app/sections/RelatedProducts";
import { client } from "@/sanity/lib/client";

import {
  PRODUCT_DETAILS_QUERY,
  RELATED_PRODUCT_QUERY,
} from "@/sanity/lib/queries";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch(PRODUCT_DETAILS_QUERY, {
    slug,
  });

  // 🔥 SAFE related products (prevents crash)
  const relatedProducts = product?.category
    ? await client.fetch(RELATED_PRODUCT_QUERY, {
        catId: product.category._id,
        slug,
      })
    : [];

  return (
    <main>
      <Breadcrumb items={[{ label: product.name }]} />
      <ProductDetailsClient product={product} />
      <RelatedProducts products={relatedProducts} />
    </main>
  );
}

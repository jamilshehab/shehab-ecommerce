import ProductListingSection from "@/app/sections/ProductListingSection";
import { client } from "@/sanity/lib/client";
import {
  CATEGORY_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";

export default async function ProductSlug({
  params,
}: {
  params: { slug: string };
}) {
  const products = await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, {
    slug: params.slug,
  });
  const categoryList = await client.fetch(CATEGORY_QUERY);
  return (
    <ProductListingSection productList={products} categoryList={categoryList} />
  );
}

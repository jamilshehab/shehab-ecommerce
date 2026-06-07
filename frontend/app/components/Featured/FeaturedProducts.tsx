import { client } from "@/sanity/lib/client";
import { FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import FeaturedProductsClient from "./FeaturedProductsClient";

const FeaturedProducts = async () => {
  const featuredProducts = await client.fetch(FEATURED_PRODUCTS_QUERY);
  return <FeaturedProductsClient products={featuredProducts} />;
};

export default FeaturedProducts;

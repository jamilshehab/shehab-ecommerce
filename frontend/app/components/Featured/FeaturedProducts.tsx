import { client } from "@/sanity/lib/client";
import { HOME_FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import FeaturedProductsClient from "./FeaturedProductsClient";
import MotionWrapper from "../common/MotionWrapper";
export const dynamic = "force-dynamic";
const FeaturedProducts = async () => {
  const featuredProducts = await client.fetch(HOME_FEATURED_PRODUCTS_QUERY);
  return (
    <MotionWrapper>
      <FeaturedProductsClient products={featuredProducts} />
    </MotionWrapper>
  );
};

export default FeaturedProducts;

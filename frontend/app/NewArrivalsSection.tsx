import { client } from "@/sanity/lib/client";
import { HOME_NEW_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import NewArrivalsClient from "./components/Products/NewArrivalsClient";
import MotionWrapper from "./components/common/MotionWrapper";
export const dynamic = "force-dynamic";
const NewArrivalsSection = async () => {
  const products = await client.fetch(HOME_NEW_PRODUCTS_QUERY);
  return (
    <MotionWrapper>
      <NewArrivalsClient products={products} />
    </MotionWrapper>
  );
};

export default NewArrivalsSection;

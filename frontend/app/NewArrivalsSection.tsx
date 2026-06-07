import { client } from "@/sanity/lib/client";
import { NEW_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import NewArrivalsClient from "./components/Products/NewArrivalsClient";

const NewArrivalsSection = async () => {
  const products = await client.fetch(NEW_PRODUCTS_QUERY);
  return <NewArrivalsClient products={products} />;
};

export default NewArrivalsSection;

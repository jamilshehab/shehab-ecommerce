import { client } from "@/sanity/lib/client";
import NewSection from "../sections/NewSection";
import { CATEGORY_QUERY, NEW_PRODUCTS_QUERY } from "@/sanity/lib/queries";

export default async function NewProducts() {
  const categoryList = await client.fetch(CATEGORY_QUERY);

  const newProducts = await client.fetch(NEW_PRODUCTS_QUERY);
  return (
    <main className=" ">
      <NewSection newProducts={newProducts} categoryList={categoryList} />
    </main>
  );
}

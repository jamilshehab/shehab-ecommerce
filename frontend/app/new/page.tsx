import { client } from "@/sanity/lib/client";
import NewSection from "../sections/NewSection";
import { CATEGORY_QUERY, NEW_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import Breadcrumb from "../components/common/Breadcrumb";
export const dynamic = "force-dynamic";
export default async function NewProducts() {
  const categoryList = await client.fetch(CATEGORY_QUERY);

  const newProducts = await client.fetch(NEW_PRODUCTS_QUERY);
  return (
    <main className=" ">
      <Breadcrumb items={[{ label: "New Products" }]} />
      <NewSection newProducts={newProducts} categoryList={categoryList} />
    </main>
  );
}

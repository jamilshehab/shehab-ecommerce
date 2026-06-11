import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import CategorySection from "../sections/CategorySection";
import Breadcrumb from "../components/common/Breadcrumb";

export default async function ShopPage() {
  const categoryList = await client.fetch(CATEGORY_QUERY);
  return (
    <main>
      <Breadcrumb items={[{ label: "Shop" }]} />

      <CategorySection categories={categoryList} />
    </main>
  );
}

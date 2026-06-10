import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import CategorySection from "../sections/CategorySection";

export default async function ShopPage() {
  const categoryList = await client.fetch(CATEGORY_QUERY);
  return (
    <main>
      <CategorySection categories={categoryList} />
    </main>
  );
}

import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import CategoryHomeSection from "./CategoryHomeSection";

const CategoryMainHome = async () => {
  const categories = await client.fetch(CATEGORY_QUERY);
  return <CategoryHomeSection categories={categories} />;
};

export default CategoryMainHome;

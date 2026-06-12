import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import CategoryHomeSection from "./CategoryHomeSection";
import MotionWrapper from "../common/MotionWrapper";

const CategoryMainHome = async () => {
  const categories = await client.fetch(CATEGORY_QUERY);
  return (
    <MotionWrapper>
      <CategoryHomeSection categories={categories} />
    </MotionWrapper>
  );
};

export default CategoryMainHome;

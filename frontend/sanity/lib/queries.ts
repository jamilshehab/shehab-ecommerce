import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`
  *[_type == "category"]{
    _id,
    name,
    image,
    "slug": slug.current
  }
`;

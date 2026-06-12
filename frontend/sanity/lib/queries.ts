import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`
  *[_type == "category"]{
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

export const HOME_FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc)[0...12] {
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price,
    isFeatured
  }
`;

export const FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price,
    "category": category->{
      name,
      "slug": slug.current
    },
    isFeatured
  }
`;

export const PRODUCTS_BY_CATEGORY_QUERY = groq`
  *[_type == "product" && category->slug.current == $slug]{
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price,
    
    category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`;

export const HOME_NEW_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc)[0...12] {
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price,
    
    isNew
  }
`;
//get the latest

export const NEW_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc)  {
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price,
     "category": category->{
      name,
      "slug": slug.current
    },
    isNew
  }
`;

export const GIFT_PRODUCT_QUERY = groq`
  *[_type == "product" && isGift == true] 
  | order(_createdAt desc)  {
    _id,
    name,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price,
     "category": category->{
      name,
      "slug": slug.current
    },
    isGift
  }
`;

export const PRODUCT_DETAILS_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    stock,
    "slug": slug.current,
    category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`;
export const RELATED_PRODUCT_QUERY = groq`
  *[
    _type == "product" &&
    category._ref == $catId &&
    slug.current != $slug
  ][0...8]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

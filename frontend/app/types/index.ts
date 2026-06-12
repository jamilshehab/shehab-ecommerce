export type Category = {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

export type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  slug: string;
  price: number;
  stock: number;

  category?:
    | {
        name: string;
        slug: string;
      }
    | string; // 🔥 IMPORTANT FIX

  isFeatured?: boolean;
  isNew?: boolean;
  inStock?: boolean;
  _createdAt?: string;
};

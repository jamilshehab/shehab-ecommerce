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

  // future-ready fields
  category?: {
    name: string;
    slug: string;
  };

  isFeatured?: boolean;
  isNew?: boolean;
};

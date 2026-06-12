"use client";

import { useMemo, useState } from "react";
import { Product } from "../types";

export function useProductFilters(products: Product[] = []) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState("newest");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug],
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...(products || [])];

    // CATEGORY FILTER (FIXED FOR YOUR DATA)
    if (selectedCategories.length > 0) {
      result = result.filter((p) => {
        const categorySlug =
          typeof p.category === "string" ? p.category : p.category?.slug;

        return categorySlug && selectedCategories.includes(categorySlug);
      });
    }

    // PRICE FILTER
    result = result.filter((p) => p.price <= maxPrice);

    // STOCK FILTER
    if (inStockOnly) {
      result = result.filter((p) => p.inStock === true);
    }

    // SORT
    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "newest") {
      result = [...result].sort(
        (a, b) =>
          new Date(b._createdAt ?? 0).getTime() -
          new Date(a._createdAt ?? 0).getTime(),
      );
    }

    return result;
  }, [products, selectedCategories, sort, maxPrice, inStockOnly]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return {
    filteredProducts,
    selectedCategories,
    toggleCategory,
    sort,
    setSort,
    maxPrice,
    setMaxPrice,
    inStockOnly,
    setInStockOnly,
    paginatedProducts,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}

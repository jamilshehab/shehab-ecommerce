"use client";
import { useProductFilters } from "../hooks/useProduct";
import ProductGrid from "../components/Products/ProductGrid";
import Pagination from "../components/common/Pagination";

const ProductListingSection = ({
  productList = [],
  categoryList = [],
}: any) => {
  const {
    filteredProducts,
    selectedCategories,
    toggleCategory,
    sort,
    setSort,
    maxPrice,
    setMaxPrice,
    inStockOnly,
    setInStockOnly,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedProducts,
  } = useProductFilters(productList);
  return (
    <div>
      <section className="sticky top-0 z-10 bg-stone-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center justify-end">
          <div className="flex items-center  gap-4">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <span className="text-sm text-gray-500">
              {" "}
              {filteredProducts.length} products
            </span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          {/* FILTERS (SOFT PANEL) */}

          {/* PRODUCTS */}
          <div>
            <ProductGrid products={paginatedProducts} />

            {/* PAGINATION */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListingSection;

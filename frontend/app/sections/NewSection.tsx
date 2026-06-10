"use client";
import { useProductFilters } from "../hooks/useProduct";
import ProductGrid from "../components/Products/ProductGrid";
import Pagination from "../components/common/Pagination";

const NewSection = ({ newProducts = [], categoryList = [] }: any) => {
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
  } = useProductFilters(newProducts);
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
          <aside className="h-fit space-y-8 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                Filters
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-700">
                    Categories
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600">
                    {categoryList.map((category: any) => (
                      <label key={category._id} className="flex gap-2">
                        <input
                          type="checkbox"
                          onChange={() => toggleCategory(category.slug.current)}
                        />
                        {category.name}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-700">
                    Price
                  </h3>

                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Max price: ${maxPrice}
                  </p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                    />
                    In stock only
                  </label>
                </div>
              </div>
            </div>
          </aside>

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

export default NewSection;

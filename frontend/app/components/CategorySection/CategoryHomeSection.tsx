import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryHomeSection({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="w-full px-6 md:px-12 py-16 ">
      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Explore Our Categories
        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Find the perfect gift for every occasion with our carefully curated
          collections.
        </p>
      </div>
      {/* Grid */}
      <div className="container relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat._id}
              href={`/category/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl h-[320px] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                <h3 className="text-white text-2xl font-semibold">
                  {cat.name}
                </h3>

                {/* Shop Now Button */}
                <div className="flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white text-sm font-medium">
                    Shop Now
                  </span>
                  <span className="text-white text-lg">→</span>
                </div>
              </div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition" />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/categories"
            className="group relative px-8 py-3 rounded-full border border-black/20 overflow-hidden"
          >
            <span className="relative z-10 text-black group-hover:text-white transition">
              View All Categories
            </span>

            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
export type Category = {
  id: number;
  name: string;
  slug: string;
};

export default function CategoryNavbar({
  categories,
}: {
  categories: Category[];
}) {
  // duplicate for seamless loop
  const looped = [...categories, ...categories];

  return (
    <section className="fixed top-[88px] left-0 right-0 z-40 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl px-3 py-3 overflow-hidden">
          <div className="flex w-max gap-2 animate-scroll whitespace-nowrap">
            {looped.map((category, index) => (
              <Link
                key={`${category.id}-${index}`}
                href={`/shop/${category.slug}`}
                className="
                  flex-shrink-0
                  flex items-center justify-center
                  h-9 px-4
                  rounded-full
                  border border-primary 
                  bg-white/60 backdrop-blur-xl
                  text-xs sm:text-sm font-medium
                  text-primary
                  transition-all
                  hover:bg-primary hover:text-white
                "
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
};

export default function Breadcrumb({ items = [] }: BreadcrumbProps) {
  return (
    <nav className="bg-slate-100">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="  px-6 pt-30    flex items-center">
          <div className="flex items-center flex-wrap text-sm text-gray-500 w-full">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <div key={index} className="flex items-center">
                  <span className="mx-3 text-gray-300">/</span>

                  {isLast || !item.href ? (
                    <span className="text-black font-medium capitalize">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-black transition-colors capitalize"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

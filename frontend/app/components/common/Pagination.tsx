// components/Pagination.tsx

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  return (
    <div className="mt-12 flex justify-center gap-2 text-sm">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="rounded-full px-4 py-2 text-gray-500 hover:bg-white disabled:opacity-40"
      >
        Prev
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-full px-4 py-2 ${
              currentPage === page
                ? "bg-black text-white"
                : "hover:bg-white text-gray-700"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="rounded-full px-4 py-2 text-gray-500 hover:bg-white disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}

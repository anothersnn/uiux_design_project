import { useEffect, useState } from "react";

export default function Pagination({ maxPages, currentPage, setPage }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let startPage = currentPage - 3;
    let endPage = currentPage + 3;

    if (startPage < 1) {
      endPage -= startPage;
      startPage = 1;
    }

    if (endPage > maxPages) {
      startPage -= endPage - maxPages;
      endPage = maxPages;

      if (startPage < 1) {
        startPage = 1;
      }
    }

    let pgs = [];
    for (let i = startPage; i <= endPage; i++) {
      pgs.push(i);
    }

    setPages(pgs);
  }, [maxPages, currentPage]);

  return (
    <div className="flex justify-center mt-4 mb-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`${
            currentPage === page
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-900"
          } px-5 py-2 mx-1 rounded`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

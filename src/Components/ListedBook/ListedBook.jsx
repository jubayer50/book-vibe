import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import ListBookCard from "./ListBookCard";

const ListedBook = ({ sortBy }) => {
  const bookContext = useContext(BookContext);

  const { readListBooks } = bookContext;

  const [filterReadListBooks, setFilterReadListBooks] = useState(readListBooks);

  useEffect(() => {
    if (sortBy === "pages") {
      const sortedReadListBooks = [...readListBooks].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setFilterReadListBooks(sortedReadListBooks);
    } else if (sortBy === "rating") {
      const sortedReadListBooks = [...readListBooks].sort(
        (a, b) => a.rating - b.rating,
      );
      setFilterReadListBooks(sortedReadListBooks);
    }
  }, [sortBy, readListBooks]);

  if (filterReadListBooks.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg py-15 md:py-40 mt-4">
        <h2 className="text-lg md:text-2xl text-center">
          There is no book in the read list!
        </h2>
      </div>
    );
  }

  return (
    <div className="mt-12 space-y-6">
      {filterReadListBooks.map((filterReadListBook, i) => (
        <ListBookCard
          key={i}
          filterReadListBook={filterReadListBook}
        ></ListBookCard>
      ))}
    </div>
  );
};

export default ListedBook;

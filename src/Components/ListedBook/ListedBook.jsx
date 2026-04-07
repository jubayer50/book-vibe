import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import ListBookCard from "./ListBookCard";

const ListedBook = ({ sortBy }) => {
  const bookContext = useContext(BookContext);

  const { readListBooks } = bookContext;

  const [filteredReadListBooks, setFilteredReadListBooks] = useState([]);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "pages") {
        const sortedReadListBooks = [...readListBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadListBooks(sortedReadListBooks);
      } else if (sortBy === "rating") {
        const sortedReadListBooks = [...readListBooks].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilteredReadListBooks(sortedReadListBooks);
      }
    }
  }, [sortBy, readListBooks]);

  return (
    <div className="mt-12 space-y-6">
      {filteredReadListBooks.map((filteredReadListBook, i) => (
        <ListBookCard
          key={i}
          filteredReadListBook={filteredReadListBook}
        ></ListBookCard>
      ))}
    </div>
  );
};

export default ListedBook;

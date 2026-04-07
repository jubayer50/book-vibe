import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import WishlistBookCard from "../WishlistBookCard/WishlistBookCard";

const ListedWishBook = ({ sortBy }) => {
  const bookContext = useContext(BookContext);

  const { wishLists } = bookContext;

  const [filteredWishLists, setFilteredWishLists] = useState([]);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "pages") {
        const sortedWishLists = [...wishLists].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishLists(sortedWishLists);
      } else if (sortBy === "rating") {
        const sortedWishLists = [...wishLists].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilteredWishLists(sortedWishLists);
      }
    }
  }, [sortBy, wishLists]);

  return (
    <div className="mt-12 space-y-6">
      {filteredWishLists.map((filteredWishList, i) => (
        <WishlistBookCard
          key={i}
          filteredWishList={filteredWishList}
        ></WishlistBookCard>
      ))}
    </div>
  );
};

export default ListedWishBook;

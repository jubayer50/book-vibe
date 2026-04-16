import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import WishlistBookCard from "../WishlistBookCard/WishlistBookCard";

const ListedWishBook = ({ sortBy }) => {
  const bookContext = useContext(BookContext);

  const { wishLists } = bookContext;

  const [filteredWishLists, setFilteredWishLists] = useState(wishLists);

  useEffect(() => {
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
  }, [sortBy, wishLists]);

  if (filteredWishLists.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg py-15 md:py-40 mt-4">
        <h2 className="text-lg md:text-2xl text-center">
          There is no book in the Wish list!
        </h2>
      </div>
    );
  }

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

import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readListBooks, setReadListBooks] = useState([]);
  const [wishLists, setWishLists] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    // console.log(currentBook);

    const isExist = readListBooks.find(
      (readListBook) => readListBook.bookId == currentBook.bookId,
    );

    // console.log(isExist);

    if (isExist) {
      toast.warning(`${currentBook.bookName} is already in the book list.`);
    } else {
      setReadListBooks([...readListBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added in the List.`);
    }
  };

  const handleWishList = (currentBook) => {
    const isAlreadyInReadList = readListBooks.find(
      (readListBook) => readListBook.bookId == currentBook.bookId,
    );

    if (isAlreadyInReadList) {
      toast.warning(`${currentBook.bookName} is already in the Read List.`);
      return;
    }

    const isExistWishList = wishLists.find(
      (wishList) => wishList.bookId == currentBook.bookId,
    );

    if (isExistWishList) {
      toast.warning(`${currentBook.bookName} is already in the wish list.`);
    } else {
      setWishLists([...wishLists, currentBook]);
    }

    // console.log(wishLists);
  };

  const data = {
    readListBooks,
    setReadListBooks,
    handleMarkAsRead,
    handleWishList,
    wishLists,
    setWishLists,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;

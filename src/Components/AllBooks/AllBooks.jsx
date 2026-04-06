import React, { use } from "react";
import BooksCard from "../../UI/BooksCard/BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  // console.log(books);

  return (
    <div className="max-w-292.75 mx-auto mt-25">
      <div>
        <h2 className="font-bold text-center text-[40px] text-[#131313]">
          Books
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
          {books.map((book) => (
            <BooksCard key={book.bookId} book={book}></BooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;

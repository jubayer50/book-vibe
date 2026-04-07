import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../Context/BookContext";

const BookDetail = () => {
  const { bookId } = useParams();

  const books = useLoaderData();
  // console.log("books", books);
  // console.log(bookId);

  const targetedBook = books.find((book) => book.bookId == bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = targetedBook;
  // console.log("targetedBook", targetedBook);

  const bookContext = useContext(BookContext);

  const { handleMarkAsRead, handleWishList } = bookContext;

  return (
    <div className="max-w-292.75 mx-auto mt-12">
      <div className="flex gap-8 md:gap-12 flex-col lg:flex-row ">
        <div className=" p-10 md:p-18 bg-[#13131308] rounded-2xl flex justify-center items-center flex-1">
          <img src={image} alt={bookName} />
        </div>

        <div className="p-3 flex-1">
          <div>
            <h2 className="text-[30px] md:text-[40px] font-bold">{bookName}</h2>
            <p className="font-work font-medium text-lg md:text-xl mt-2 md:mt-4 text-[#13131380]">
              {author}
            </p>
          </div>

          <div className="mt-3 md:mt-0">
            <p className="font-work font-medium text-lg md:text-xl mt-2 md:mt-4 text-[#13131380] py-3 border-y border-[#13131320]">
              {category}
            </p>
          </div>

          <div className="mt-6 ">
            <p className=" text-[#13131370] font-work">
              <span className="text-[#131313] font-bold">Review:</span> {review}
            </p>
          </div>

          <div className="flex gap-5 items-center font-work py-6 border-b border-[#13131320]">
            <p className="font-bold">Tag</p>

            <div className=" flex gap-5 font-medium">
              {tags.map((tag, i) => (
                <p key={i} className="badge  bg-[#23BE0A08] text-[#23BE0A]">
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <div className="font-work my-6 space-y-5">
            <div className="flex gap-3">
              <span className="text-[#13131370]">Number of Pages:</span>
              <span className="text-[#131313] font-bold">{totalPages}</span>
            </div>

            <div className="flex gap-3">
              <span className="text-[#13131370]">Publisher:</span>
              <span className="text-[#131313] font-bold">{publisher}</span>
            </div>

            <div className="flex gap-3">
              <span className="text-[#13131370]">Year of Publishing:</span>
              <span className="text-[#131313] font-bold">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex gap-3">
              <span className="text-[#13131370]">Rating:</span>
              <span className="text-[#131313] font-bold">{rating}</span>
            </div>
          </div>

          <div className="font-work flex gap-5">
            <button
              className="btn border-2 border-[#13131330] bg-transparent rounded-lg"
              onClick={() => handleMarkAsRead(targetedBook)}
            >
              Mark as Read
            </button>
            <button
              className="btn bg-[#50B1C9] text-white rounded-lg"
              onClick={() => handleWishList(targetedBook)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

/**
 *{
    "bookId": 2,
    "bookName": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "image": "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 281,
    "rating": 4.8,
    "category": "Fiction",
    "tags": [
        "Drama",
        "Social Justice"
    ],
    "publisher": "J.B. Lippincott & Co.",
    "yearOfPublishing": 1960
}
 */

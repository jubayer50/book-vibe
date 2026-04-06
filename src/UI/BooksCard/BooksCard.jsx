import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BooksCard = ({ book }) => {
  return (
    <div>
      <div className="p-6 rounded-2xl border border-[#13131320]">
        <Link
          to={`/book-detail/${book.bookId}`}
          className="flex justify-center items-center py-8 bg-[#F3F3F3] rounded-2xl"
        >
          <img className="max-h-50" src={book.image} alt={book.bookName} />
        </Link>

        <div className="mt-6">
          <div className="font-work flex gap-5 font-medium">
            {book.tags.map((tag, i) => (
              <p key={i} className="badge  bg-[#23BE0A08] text-[#23BE0A]">
                {tag}
              </p>
            ))}
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold text-[#131313]">
              {book.bookName}
            </h2>
            <p className="mt-4 font-medium text-[#13131380] font-work">
              {book.author}
            </p>
          </div>

          <div className="flex items-center justify-between text-[#13131380] font-medium font-work pt-5 border-t border-dashed border-[#13131320]">
            <p>{book.category}</p>

            <p className="flex items-center gap-3">
              {book.rating} <FaRegStar></FaRegStar>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
<div>
  <h2>Book card</h2>
</div>;

/**
 {
    "bookId": 8,
    "bookName": "The Alchemist",
    "author": "Paulo Coelho",
    "image": "https://i.ibb.co.com/zS9jsdK/18144590.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 177,
    "rating": 4.6,
    "category": "Fiction",
    "tags": [
        "Philosophical",
        "Adventure"
    ],
    "publisher": "HarperCollins",
    "yearOfPublishing": 1988
}
 */

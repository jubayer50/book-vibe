import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline, IoNewspaperOutline } from "react-icons/io5";

const ListBookCard = ({ filteredReadListBook }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-6 rounded-2xl border-2 border-[#13131320] ">
      <div className="bg-[#13131308] py-8 rounded-xl h-58 w-58 flex justify-center items-center">
        <img
          className="h-40"
          src={filteredReadListBook.image}
          alt={filteredReadListBook.bookName}
        />
      </div>

      <div className="space-y-4">
        <h2 className="font-play text-2xl font-bold text-[#131313]">
          {filteredReadListBook.bookName}
        </h2>
        <p>{filteredReadListBook.author}</p>

        <div className="space-y-4">
          <div className="font-work flex flex-wrap items-center gap-5 font-medium">
            <p className="text-[#131313] font-bold">Tag</p>

            <div>
              {filteredReadListBook.tags.map((tag, i) => (
                <p
                  key={i}
                  className="badge mr-2  bg-[#23BE0A08] text-[#23BE0A]"
                >
                  {tag}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <span>
                <IoLocationOutline></IoLocationOutline>
              </span>
              <p>Year of Publishing: {filteredReadListBook.yearOfPublishing}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-7 text[#13131380]">
            <div className="flex gap-3 items-center">
              <span>
                <FaRegUser></FaRegUser>
              </span>
              <p>Publisher: {filteredReadListBook.publisher}</p>
            </div>

            <div className="flex gap-3 items-center">
              <span>
                <IoNewspaperOutline></IoNewspaperOutline>
              </span>
              <p>Page {filteredReadListBook.totalPages}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 items-center pt-4 border-t border-[#13131320] font-medium">
            <div className="px-5 py-2.5 rounded-full bg-[#328EFF20] text-[#328EFF]">
              <p>Category: {filteredReadListBook.category}</p>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#FFAC3320] text-[#FFAC33]">
              <p>Rating: {filteredReadListBook.rating}</p>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#23BE0A] text-white">
              <p>View Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;
/**
 
{
    "bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 192,
    "rating": 4.5,
    "category": "Classic",
    "tags": [
        "Fiction",
        "Romance"
    ],
    "publisher": "Scribner",
    "yearOfPublishing": 1925
}
 */

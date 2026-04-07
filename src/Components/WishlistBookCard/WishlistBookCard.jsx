import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline, IoNewspaperOutline } from "react-icons/io5";

const WishlistBookCard = ({ filteredWishList }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-6 rounded-2xl border-2 border-[#13131320] ">
      <div className="bg-[#13131308] py-8 rounded-xl h-58 w-58 flex justify-center items-center">
        <img
          className="h-40"
          src={filteredWishList.image}
          alt={filteredWishList.bookName}
        />
      </div>

      <div className="space-y-4">
        <h2 className="font-play text-2xl font-bold text-[#131313]">
          {filteredWishList.bookName}
        </h2>
        <p>{filteredWishList.author}</p>

        <div className="space-y-4">
          <div className="font-work flex flex-wrap items-center gap-5 font-medium">
            <p className="text-[#131313] font-bold">Tag</p>

            <div>
              {filteredWishList.tags.map((tag, i) => (
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
              <p>Year of Publishing: {filteredWishList.yearOfPublishing}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-7 text[#13131380]">
            <div className="flex gap-3 items-center">
              <span>
                <FaRegUser></FaRegUser>
              </span>
              <p>Publisher: {filteredWishList.publisher}</p>
            </div>

            <div className="flex gap-3 items-center">
              <span>
                <IoNewspaperOutline></IoNewspaperOutline>
              </span>
              <p>Page {filteredWishList.totalPages}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 items-center pt-4 border-t border-[#13131320] font-medium">
            <div className="px-5 py-2.5 rounded-full bg-[#328EFF20] text-[#328EFF]">
              <p>Category: {filteredWishList.category}</p>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#FFAC3320] text-[#FFAC33]">
              <p>Rating: {filteredWishList.rating}</p>
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

export default WishlistBookCard;

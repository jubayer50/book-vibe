import React from "react";
import BannerImage from "../../assets/banner_book.png";

const Banner = () => {
  return (
    <div className="max-w-292.75 mx-auto mt-12 bg-[#13131308] rounded-3xl py-12 md:py-20 px-8 md:px-30 text-center lg:text-left">
      <div className="flex flex-col-reverse gap-12 lg:flex-row justify-between items-center">
        <div>
          <h2 className="text-[38px] md:text-[56px] font-bold max-w-131.5">
            Books to freshen up your bookshelf
          </h2>
          <button className="btn mt-8 md:mt-12 rounded-lg text-white bg-[#23BE0A] font-work text-xl font-medium md:font-bold md:py-6 md:px-7">
            View The List
          </button>
        </div>

        <div>
          <img src={BannerImage} alt="book" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

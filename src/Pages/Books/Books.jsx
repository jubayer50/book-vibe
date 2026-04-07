import React, { useContext, useState } from "react";
import { BookContext } from "../../Components/Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../../Components/ListedBook/ListedBook";
import ListedWishBook from "../../Components/ListedWishBook/ListedWishBook";
import { RiArrowDropDownLine } from "react-icons/ri";

const Books = () => {
  const bookContext = useContext(BookContext);

  const { readListBooks, wishLists } = bookContext;

  const [sortBy, setSortBy] = useState("pages");
  console.log(sortBy);

  return (
    <div className="max-w-292.75 mx-auto mt-12">
      <div className="bg-[#13131308] rounded-2xl py-8">
        <h2 className="text-[#131313] font-bold text-3xl font-work text-center">
          Books
        </h2>
      </div>

      <div className="flex justify-center my-5 font-work">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-lg bg-[#23BE0A] text-white m-1"
          >
            Sort By{" "}
            <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortBy("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortBy("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Tabs className="font-work mt-8">
          <TabList>
            <Tab>Read List ({readListBooks.length})</Tab>
            <Tab>Wish List ({wishLists.length})</Tab>
          </TabList>

          <TabPanel>
            <ListedBook sortBy={sortBy}></ListedBook>
          </TabPanel>
          <TabPanel>
            <ListedWishBook sortBy={sortBy}></ListedWishBook>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;

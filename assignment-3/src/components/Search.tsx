import React, { useEffect, useState } from "react";

import searchIcon from "../assets/search-icon.svg";
import { useStateContext } from "../contexts/ContextProvider";

const Search = () => {
  const context = useStateContext();
  const books = context?.books;
  const setBookBySearch = context?.setBookBySearch;
  const setPageIndex = context?.setPageIndex;

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setBookBySearch!(books!.filter((book) => book.name.toLowerCase().includes(keyword.toLowerCase())));
    setPageIndex!(1);
  }, [keyword, books]);

  return (
    <div className="flex items-center border-2 bg-white gap-1 px-2 rounded-md overflow-hidden">
      <img className="w-4 h-4 text-gray" src={searchIcon} alt="search-icon" />
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border-none outline-none px-1 py-2"
        type="text"
        placeholder="Search books..."
      />
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";

import searchIcon from "../../assets/search-icon.svg";
import { useStateContext } from "../../contexts/ContextProvider";

const Search = () => {
  const { books, setBookBySearch } = useStateContext();

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setBookBySearch(books.filter((book) => book.name.toLowerCase().includes(keyword.toLowerCase())));
  }, [keyword]);

  return (
    <div className="flex items-center bg-white border-1 border-black gap-4 px-8 rounded-md overflow-hidden">
      <img className="w-16 h-16 text-gray" src={searchIcon} alt="search-icon" />
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border-none outline-none px-4 py-8"
        type="text"
        placeholder="Search books..."
      />
    </div>
  );
};

export default Search;

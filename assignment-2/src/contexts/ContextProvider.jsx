import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import BookReducer from "../reducer/BookReducer";
import { bookData } from "../data";
import { BOOK_PER_PAGE } from "../constants/constants";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(1);

  const [books, bookDispatch] = useReducer(
    BookReducer,
    localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : bookData
  );

  const [bookBySearch, setBookBySearch] = useState([]);
  const [booksShow, setBooksShow] = useState(
    books.slice((pageIndex - 1) * BOOK_PER_PAGE, pageIndex * BOOK_PER_PAGE)
  );

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [deleteBook, setDeleteBook] = useState({});

  useEffect(() => {
    if (localStorage.getItem("books") === null)
      localStorage.setItem("books", JSON.stringify(bookData));
  }, []);

  useEffect(() => {
    setBooksShow(bookBySearch.slice((pageIndex - 1) * BOOK_PER_PAGE, pageIndex * BOOK_PER_PAGE));
  }, [pageIndex, books, bookBySearch]);

  return (
    <StateContext.Provider
      value={{
        books,
        bookDispatch,
        pageIndex,
        setPageIndex,
        booksShow,
        setBooksShow,
        showAddDialog,
        setShowAddDialog,
        showDeleteDialog,
        setShowDeleteDialog,
        deleteBook,
        setDeleteBook,
        // keyword,
        // setKeyword,
        bookBySearch,
        setBookBySearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

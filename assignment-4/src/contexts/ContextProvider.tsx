'use client'

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
  useReducer,
  useEffect,
} from 'react'
import BookReducer from '../reducers/BookReducer'
import { Book } from '../models/Book'
import bookData from '../data/books'
import { BOOK_PER_PAGE } from '../constants/constants'

// Define the context value type
export interface ContextValue {
  books: Book[]
  bookDispatch: Dispatch<any> // You may want to define a proper type for this
  pageIndex: number
  setPageIndex: Dispatch<SetStateAction<number>>
  booksShow: Book[]
  setBooksShow: Dispatch<SetStateAction<Book[]>>
  showAddDialog: boolean
  setShowAddDialog: Dispatch<SetStateAction<boolean>>
  showDeleteDialog: boolean
  setShowDeleteDialog: Dispatch<SetStateAction<boolean>>
  deleteBook: Book
  setDeleteBook: Dispatch<SetStateAction<Book>>
  bookBySearch: Book[]
  setBookBySearch: Dispatch<SetStateAction<Book[]>>
  mode: string
  setMode: Dispatch<SetStateAction<string>>
}

interface ContextProviderProps {
  children: ReactNode
}

const initialBook: Book = { id:0, name: '', author: '', topic: { id: 0, name: '' }}

// Create the context
const StateContext = createContext<ContextValue | null>(null)

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [mode, setMode] = useState<string>(
    localStorage.getItem('mode') ? localStorage.getItem('mode')! : 'light',
  )

  const [books, bookDispatch] = useReducer(
    BookReducer,
    localStorage.getItem('books')
      ? (JSON.parse(localStorage.getItem('books')!) as Book[])
      : bookData,
  )

  const [bookBySearch, setBookBySearch] = useState<Book[]>([])
  const [booksShow, setBooksShow] = useState<Book[]>(
    books.slice((pageIndex - 1) * BOOK_PER_PAGE, pageIndex * BOOK_PER_PAGE),
  )

  const [showAddDialog, setShowAddDialog] = useState<boolean>(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false)

  const [deleteBook, setDeleteBook] = useState<Book>(initialBook)

  useEffect(() => {
    if (localStorage.getItem('books') === null)
      localStorage.setItem('books', JSON.stringify(bookData))
    if (localStorage.getItem('mode') === null)
      localStorage.setItem('mode', 'light')
  }, [])

  useEffect(() => {
    setBooksShow(
      bookBySearch.slice(
        (pageIndex - 1) * BOOK_PER_PAGE,
        pageIndex * BOOK_PER_PAGE,
      ),
    )
  }, [pageIndex, books, bookBySearch])

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

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
        bookBySearch,
        setBookBySearch,
        mode,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)

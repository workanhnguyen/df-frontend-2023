'use client'

import React, { useEffect, useState, memo } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { BOOK_PER_PAGE } from '../constants/constants'
import { Book } from '../models/Book'

const Pagination: React.FC = () => {
  const context = useStateContext()
  const books: Book[] | undefined = context?.books
  const bookBySearch: Book[] | undefined = context?.bookBySearch
  const pageIndex: number | undefined = context?.pageIndex
  const setPageIndex: React.Dispatch<React.SetStateAction<number>> | undefined =
    context?.setPageIndex

  const [bookCount, setBookCount] = useState<number>(0)

  useEffect(() => {
    setBookCount(Math.ceil(bookBySearch?.length! / BOOK_PER_PAGE))
  }, [books, bookBySearch])

  const pageNumbers = Array.from({ length: bookCount }, (_, index) => index + 1)
  return (
    <div className="w-full flex justify-end mt-10 gap-2">
      {pageNumbers.map((pageNumber) => (
        <button
          onClick={() => setPageIndex!(pageNumber)}
          className={`px-2 rounded-sm cursor-pointer ${
            pageIndex === pageNumber && 'bg-primary text-white'
          }`}
          key={pageNumber}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default memo(Pagination)

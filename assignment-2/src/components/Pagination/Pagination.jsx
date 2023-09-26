import React, { useEffect, useState, memo } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import { BOOK_PER_PAGE } from '../../constants/constants';

const Pagination = () => {
  const { books, bookBySearch, pageIndex, setPageIndex } = useStateContext();

  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    setBookCount(Math.ceil(bookBySearch.length / BOOK_PER_PAGE))
  }, [books, bookBySearch]);

  const pageNumbers = Array.from({ length: bookCount }, (_, index) => index + 1);
  return (
    <div className='w-full flex justify-end mt-10 gap-10'>
      {pageNumbers.map((pageNumber) => (
        <button onClick={() => setPageIndex(pageNumber)} className={`px-4 cursor-pointer ${pageIndex === pageNumber && 'bg-primary text-white'}`} key={pageNumber}>{pageNumber}</button>
      ))}
    </div>
  )
}

export default memo(Pagination)
'use client'
import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link'

import { Book } from '../../../models/Book'
import { useStateContext } from '../../../contexts/ContextProvider'
import { notFound } from 'next/navigation'

type BookDetailProps = {
  bookId: string
}

export default function BookDetail({
  params: { bookId },
}: {
  params: BookDetailProps
}) {

  const context = useStateContext();
  const setShowDeleteDialog = context?.setShowDeleteDialog;
  const setDeleteBook = context?.setDeleteBook;

  const [bookDetail, setBookDetail] = useState<Book | null>(null)

  const handleDeleteBook = () => {
    setShowDeleteDialog && setShowDeleteDialog(true);
    setDeleteBook && setDeleteBook(bookDetail!);
  }

  useLayoutEffect(() => {
    const books = JSON.parse(localStorage.getItem('books') as string)

    const book = books.filter((book: Book) => book.id === parseInt(bookId))[0];

    if (book !== undefined)
      setBookDetail(book);
    else
      notFound();
  }, [])

  return (
    <div className="p-4 mt-16">
      <Link href="/" className="text-primary">
        &lt; Back
      </Link>
      <div className="flex flex-col gap-2">
        <p className="my-3 text-lg font-semibold">{bookDetail?.name}</p>
        <p>
          <span className="text-base font-semibold">Author:&nbsp;</span>
          <span>{bookDetail?.author}</span>
        </p>
        <p>
          <span className="text-base font-semibold">Topic:&nbsp;</span>
          <span>{bookDetail?.topic.name}</span>
        </p>
        <p onClick={handleDeleteBook} className='text-primary underline cursor-pointer'>Delete</p>
      </div>
    </div>
  )
}

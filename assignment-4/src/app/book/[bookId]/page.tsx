'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Book } from '../../../models/Book'
import { useStateContext } from '../../../contexts/ContextProvider'

type BookDetailProps = {
  bookId: string
}

export default function BookDetail({
  params: { bookId },
}: {
  params: BookDetailProps
}) {
  const router = useRouter();
  // const params = useSearchParams()
  // console.log(params.get('j'))
  // console.log(params.get('h'))

  const context = useStateContext();
  const setShowDeleteDialog = context?.setShowDeleteDialog;
  const setDeleteBook = context?.setDeleteBook;
  const books = context?.books;

  const [bookDetail, setBookDetail] = useState<Book | null>(null)

  const handleDeleteBook = () => {
    setShowDeleteDialog && setShowDeleteDialog(true);
    setDeleteBook && setDeleteBook(bookDetail!);
  }

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books') as string)

    setBookDetail(books.filter((book: Book) => book.id === parseInt(bookId))[0])
  }, [])

  // console.log(books?.filter((book: Book) => book.id === parseInt(bookId)) === new Object());

  // useLayoutEffect(() => {
  //   if (!books?.filter((book: Book) => book.id === parseInt(bookId)))
  //     router.replace('/');
  // }, [books])

  // console.log(bookDetail)

  return (
    <div className="p-4">
      <Link href="/" className="text-primary">
        &lt; Back
      </Link>
      <div className="flex flex-col gap-2">
        <p className="my-3 text-lg font-semibold">{bookDetail?.name}</p>
        <p>
          <span className="text-base font-semibold">Author:</span>
          <span>{bookDetail?.author}</span>
        </p>
        <p>
          <span className="text-base font-semibold">Topic:</span>
          <span>{bookDetail?.topic.name}</span>
        </p>
        <p onClick={handleDeleteBook} className='text-primary underline cursor-pointer'>Delete</p>
      </div>
    </div>
  )
}

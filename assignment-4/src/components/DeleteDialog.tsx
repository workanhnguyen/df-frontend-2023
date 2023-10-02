'use client'

import React from 'react'

import { useStateContext } from '../contexts/ContextProvider'
import cancelIcon from '../assets/cancel-icon.svg'
import Button from './Button'
import { REMOVE_BOOK } from '../constants/constants'
import Image from 'next/image'

const DeleteDialog: React.FC = () => {
  const context = useStateContext()
  const showDeleteDialog = context?.showDeleteDialog
  const setShowDeleteDialog = context?.setShowDeleteDialog
  const deleteBook = context?.deleteBook
  const bookDispatch = context?.bookDispatch

  const handleDeleteBook = () => {
    bookDispatch!({ type: REMOVE_BOOK, payload: deleteBook?.id })

    const newBook = JSON.parse(localStorage.getItem('books')!).filter(
      (book) => book.id !== deleteBook?.id,
    )
    localStorage.setItem('books', JSON.stringify(newBook))

    setShowDeleteDialog!(false)
  }

  if (!showDeleteDialog) return null;
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 flex w-full h-full justify-center items-center bg-black/30 drop-shadow-md">
      <div className="w-96 flex flex-col bg-white rounded-md p-5 gap-10">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">Delete book</p>
          <Image
            onClick={() => setShowDeleteDialog!(false)}
            className="w-5 h-5 cursor-pointer"
            src={cancelIcon}
            alt="cancel"
          />
        </div>

        <div className="w-full">
          <p className="text-center">
            Do you want to delete{' '}
            <span className="font-bold">{deleteBook?.name}</span> book?
          </p>
        </div>

        <div className="w-full flex justify-evenly">
          <Button
            type="button"
            disabled={false}
            onClick={handleDeleteBook}
            text="Delete"
            color="white"
          />
          <Button
            type="button"
            disabled={false}
            onClick={() => setShowDeleteDialog!(false)}
            text="Cancel"
            color="primary"
          />
        </div>
      </div>
    </section>
  )
}

export default DeleteDialog

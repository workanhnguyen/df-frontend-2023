'use client'

import React from 'react'

import categoryData from '../data/categories'
import { useStateContext } from '../contexts/ContextProvider'
import { Book } from '../models/Book'
import Link from 'next/link'

const TableContent: React.FC = () => {
  const context = useStateContext()
  const booksShow = context?.booksShow
  const setShowDeleteDialog = context?.setShowDeleteDialog
  const setDeleteBook = context?.setDeleteBook
  const mode = context?.mode

  const handleOpenDeleteDialog = (book: Book) => {
    setDeleteBook!(book)
    setShowDeleteDialog!(true)
  }

  return (
    <div>
      <table
        className={`w-full border-collapse ${
          mode === 'light' ? 'bg-white' : 'bg-slate-500 text-white'
        }`}
      >
        <thead>
          <tr>
            <th className="border-2 border-solid border-gray-800 p-2 text-center">
              Name
            </th>
            <th className="border-2 border-solid border-gray-800 p-2 text-center">
              Author
            </th>
            <th className="border-2 border-solid border-gray-800 p-2 text-center">
              Topic
            </th>
            <th className="border-2 border-solid border-gray-800 p-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {booksShow?.map((book, index) => (
            <tr key={index}>
              <td className="border-2 border-solid border-gray-800 p-2 text-left">
                {book.name}
              </td>
              <td className="border-2 border-solid border-gray-800 p-2 text-left">
                {book.author}
              </td>
              <td className="border-2 border-solid border-gray-800 p-2 text-left">
                {book.topic.name}
              </td>
              <td className="text-primary border-2 border-solid border-gray-800 p-2 text-left cursor-pointer">
                <span className='underline' onClick={() => handleOpenDeleteDialog(book)}>Delete</span>
                &nbsp;|&nbsp;
                <Link className='underline' href={`/book/${book.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableContent

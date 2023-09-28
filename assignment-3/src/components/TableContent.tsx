import React from 'react'

import categoryData from '../data/categories'
import { useStateContext } from '../contexts/ContextProvider'
import { Book } from '../models/Book'

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
                {categoryData.find((c) => c.id === book.topic)?.name || ''}
              </td>
              <td
                onClick={() => handleOpenDeleteDialog(book)}
                className="text-red-500 underline border-2 border-solid border-gray-800 p-2 text-left cursor-pointer"
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableContent

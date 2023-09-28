import React, { useState } from 'react'

import { Button, InputWithLabel, SelectorWithLabel } from '../components'
import cancelIcon from '../assets/cancel-icon.svg'
import { useStateContext } from '../contexts/ContextProvider'
import { ADD_BOOK } from '../constants/constants'
import { Book } from '../models/Book'

const AddDialog: React.FC = () => {
  const context = useStateContext()
  const books = context?.books
  const bookDispatch = context?.bookDispatch
  const showAddDialog = context?.showAddDialog
  const setShowAddDialog = context?.setShowAddDialog

  const [name, setName] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [topicId, setTopicId] = useState<number>(1)

  const handleCreateBook = (e) => {
    e.preventDefault()

    const book: Book = {
      id:
        books!.reduce((maxId, book) => {
          return book.id > maxId ? book.id : maxId
        }, -1) + 1,
      name,
      author,
      topic: topicId,
    }

    bookDispatch!({ type: ADD_BOOK, payload: book })

    const newBook: Book[] = [
      book,
      ...JSON.parse(localStorage.getItem('books')!),
    ]
    localStorage.setItem('books', JSON.stringify(newBook))

    clearInput()
    setShowAddDialog!(false)
  }

  const validateBook = () => {
    return !(name.trim() === '' || author.trim() === '')
  }

  const clearInput = () => {
    setName('')
    setAuthor('')
    setTopicId(1)
  }

  if (!showAddDialog) return null
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 flex w-full h-full justify-center items-center bg-black/30 drop-shadow-md">
      <form
        onSubmit={handleCreateBook}
        className="w-96 flex flex-col gap-5 px-5 py-5 bg-white rounded-md"
      >
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">Add book</p>
          <img
            onClick={() => setShowAddDialog!(false)}
            className="w-5 h-5 cursor-pointer"
            src={cancelIcon}
            alt="cancel"
          />
        </div>
        <InputWithLabel
          label="Name"
          placeholder="Enter name..."
          value={name}
          onChange={setName}
        />
        <InputWithLabel
          label="Name"
          placeholder="Enter author..."
          value={author}
          onChange={setAuthor}
        />
        <SelectorWithLabel
          label="Topic"
          value={topicId}
          onSelect={setTopicId}
        />
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            text="Create"
            color="primary"
            disabled={!validateBook()}
            onClick={() => {}}
          />
        </div>
      </form>
    </section>
  )
}

export default AddDialog

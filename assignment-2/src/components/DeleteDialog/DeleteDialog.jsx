import React from "react";

import { useStateContext } from "../../contexts/ContextProvider";
import cancelIcon from "../../assets/cancel-icon.svg";
import Button from "../Button/Button";
import { REMOVE_BOOK } from "../../constants/constants";

const DeleteDialog = () => {
  const { showDeleteDialog, setShowDeleteDialog, deleteBook, bookDispatch, books } =
    useStateContext();

  const handleDeleteBook = () => {
    bookDispatch({ type: REMOVE_BOOK, payload: deleteBook.id })

    const newBook = JSON.parse(localStorage.getItem('books')).filter(book => book.id !== deleteBook.id);
    localStorage.setItem('books', JSON.stringify(newBook));
    
    setShowDeleteDialog(false);
  }

  if (showDeleteDialog)
    return (
      <section className="overlay">
        <div className="w-300 flex flex-col bg-white rounded-md px-20 py-20">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Delete book</p>
            <img
              onClick={() => setShowDeleteDialog(false)}
              className="w-20 h-20 cursor-pointer"
              src={cancelIcon}
              alt="cancel"
            />
          </div>

          <div className="w-full my-30">
            <p className="text-center">
              Do you want to delete <span className="font-bold">{deleteBook.name}</span> book?
            </p>
          </div>

          <div className="w-full flex justify-around">
            <Button onClick={handleDeleteBook} text='Delete' color='secondary' />
            <Button onClick={() => setShowDeleteDialog(false)} text='Cancel' color='primary' />
          </div>
        </div>
      </section>
    );
};

export default DeleteDialog;

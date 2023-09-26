import React, { useState } from "react";

import { Button, InputWithLabel, Selector } from "../../components";
import cancelIcon from "../../assets/cancel-icon.svg";
import { useStateContext } from "../../contexts/ContextProvider";
import { ADD_BOOK } from "../../constants/constants";

const AddDialog = () => {
  const { books, bookDispatch, showAddDialog, setShowAddDialog } =
    useStateContext();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [topicId, setTopicId] = useState(1);

  const handleCreateBook = (e) => {
    e.preventDefault();

    const book = {
      id: books.reduce((maxId, book) => { return book.id > maxId ? book.id : maxId }, -1) + 1,
      name,
      author,
      topic: topicId,
    };

    bookDispatch({ type: ADD_BOOK, payload: book });

    const newBook = [book, ...JSON.parse(localStorage.getItem("books"))];
    localStorage.setItem("books", JSON.stringify(newBook));

    clearInput();
    setShowAddDialog(false);
  };

  const validateBook = () => {
    return !(name.trim() === "" || author.trim() === "");
  };

  const clearInput = () => {
    setName("");
    setAuthor("");
    setTopicId(1);
  };

  if (showAddDialog)
    return (
      <section className="overlay">
        <form
          onSubmit={handleCreateBook}
          className="w-400 flex flex-col gap-20 px-20 py-20 bg-white rounded-md"
        >
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Add book</p>
            <img
              onClick={() => setShowAddDialog(false)}
              className="w-20 h-20 cursor-pointer"
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
          <Selector label="Topic" value={topicId} onSelect={setTopicId} />
          <div className="w-full flex justify-end">
            <Button
              type="submit"
              text="Create"
              color="primary"
              disabled={!validateBook()}
            />
          </div>
        </form>
      </section>
    );
};

export default AddDialog;

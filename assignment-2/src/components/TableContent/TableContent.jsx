import React from "react";

import { categoryData } from "../../data";
import { useStateContext } from "../../contexts/ContextProvider";

const TableContent = () => {
  const { booksShow, setShowDeleteDialog, setDeleteBook, mode } = useStateContext();

  const handleOpenDeleteDialog = (book) => {
    setDeleteBook(book);
    setShowDeleteDialog(true);
  };

  return (
    <div>
      <table className={`w-full border-collapse ${mode === 'light' ? 'bg-white' : 'bg-sub-black text-white'}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booksShow.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>
                {categoryData.find((c) => c.id === book.topic)?.name || ""}
              </td>
              <td
                onClick={() => handleOpenDeleteDialog(book)}
                className="text-danger text-underline"
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;

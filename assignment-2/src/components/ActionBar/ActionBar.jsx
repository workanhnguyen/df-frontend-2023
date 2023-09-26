import React from "react";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { useStateContext } from "../../contexts/ContextProvider";

const ActionBar = () => {
  const { setShowAddDialog } = useStateContext();

  const handleOpenAddDialog = () => {
    setShowAddDialog(true);
  }
  return (
    <section className="flex justify-between items-center py-16">
      <Search />
      <Button color="primary" text="Add book" onClick={handleOpenAddDialog} />
    </section>
  );
};

export default ActionBar;

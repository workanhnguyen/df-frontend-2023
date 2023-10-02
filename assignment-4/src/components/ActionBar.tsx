'use client'

import React from "react";
import Search from "./Search";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

const ActionBar: React.FC = () => {
  const context = useStateContext();
  const setShowAddDialog = context?.setShowAddDialog;

  const handleOpenAddDialog = () => {
    setShowAddDialog && setShowAddDialog(true);
  }
  return (
    <section className="flex justify-between items-center py-16">
      <Search />
      <Button type="button" disabled={false} color="primary" text="Add book" onClick={handleOpenAddDialog} />
    </section>
  );
};

export default ActionBar;

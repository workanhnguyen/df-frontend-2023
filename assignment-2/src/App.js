import React, { useContext, useEffect, useState } from "react";

import {
  ActionBar,
  AddDialog,
  Container,
  DeleteDialog,
  Header,
  Pagination,
  TableContent,
  Wrapper,
} from "./components";

const App = () => {
  return (
    <Wrapper>
      <Header />
      
      <Container>
        <ActionBar />
        <TableContent />
        <Pagination />
      </Container>

      <AddDialog />
      <DeleteDialog />
    </Wrapper>
  );
};

export default App;

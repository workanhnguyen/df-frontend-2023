import React from 'react'

import {
  ActionBar,
  AddDialog,
  Container,
  DeleteDialog,
  Header,
  Pagination,
  TableContent,
  Wrapper,
} from '../components'

export default function Home() {
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
  )
}

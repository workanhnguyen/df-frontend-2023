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

      <Container>
        <ActionBar />
        <TableContent />
        <Pagination />
      </Container>
    </Wrapper>
  )
}

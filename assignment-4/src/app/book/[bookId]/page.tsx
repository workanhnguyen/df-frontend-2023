'use client'
import { useSearchParams } from 'next/navigation'
import { type } from 'os'
import React from 'react'

type BookDetailProps = {
  bookId: string
}

export default function BookDetail({
  params: { bookId },
}: {
  params: BookDetailProps
}) {
    const params = useSearchParams();
    console.log(params.get('j'));
    console.log(params.get('h'));
    
  return <div>{bookId}</div>
}

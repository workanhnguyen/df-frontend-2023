import Link from 'next/link'
import React from 'react'

const BookDetail = () => {
  return (
    <>
        <div>BookDetail</div>
        <Link href='/'>
            <button className='p-4 bg-green-400'>Back</button>
        </Link>
    </>
  )
}

export default BookDetail
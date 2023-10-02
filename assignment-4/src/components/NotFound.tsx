import Link from 'next/link'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <div className='w-full flex flex-col items-center gap-4'>
        <p className="text-8xl font-bold">404</p>
        <p className='text-xl'>Page not found</p>
      </div>

      <Link href='/' replace={true} className='text-primary'>&lt; Back to home page</Link>
    </div>
  )
}

export default NotFound

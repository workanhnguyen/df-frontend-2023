import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='w-full flex flex-col items-center bg-gray'>{children}</div>
  )
}

export default Wrapper
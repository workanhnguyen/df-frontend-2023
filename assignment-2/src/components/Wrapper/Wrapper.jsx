import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider'

const Wrapper = ({ children }) => {
  const { mode } = useStateContext();
  return (
    <div className={`w-full flex flex-col items-center ${mode === 'light' ? 'bg-gray' : 'bg-dark-gray'}`}>{children}</div>
  )
}

export default Wrapper
import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider'

const Divider = () => {
  const { mode } = useStateContext();
  return (
    <div className={`w-full h-2 ${mode === 'light' ? 'bg-dark-gray' : 'bg-black'}`} />
  )
}

export default Divider
'use client'

import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Divider: React.FC = () => {
  const context = useStateContext();
  const mode = context?.mode;
  return (
    <div className={`w-full h-1 ${mode === 'light' ? 'bg-slate-500' : 'bg-black'}`} />
  )
}

export default Divider
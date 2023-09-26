import React from 'react'

import { categoryData } from '../../data'

const Selector = ({ label, value, onSelect }) => {

  return (
    <label className="w-full flex flex-col gap-4">
      {label}
      <select value={value} onChange={(e) => onSelect(parseInt(e.target.value))} className="outline-none rounded-sm px-8 py-10 border-1 border-black">
        {categoryData.map((category, index) => (
            <option key={index} value={category.id}>{category.name}</option>
        ))}
      </select>
    </label>
  )
}

export default Selector
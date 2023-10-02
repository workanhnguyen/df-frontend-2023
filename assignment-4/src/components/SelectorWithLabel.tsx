import React from 'react'

import categoryData from '../data/categories'

type SelectorWithLabelProps = {
  label: string,
  value: number,
  onSelect: (topicId: number) => void
}

const SelectorWithLabel: React.FC<SelectorWithLabelProps> = ({ label, value, onSelect }) => {
  return (
    <label className="w-full flex flex-col gap-1">
      {label}
      <select
        value={value}
        onChange={(e) => onSelect(parseInt(e.target.value))}
        className="outline-none rounded-md px-2 py-2 border-2 border-gray-300"
      >
        {categoryData.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SelectorWithLabel

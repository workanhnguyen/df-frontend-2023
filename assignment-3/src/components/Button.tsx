import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined
  color: string
  text: string
  onClick: () => void
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({
  type,
  color,
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`px-3 py-2 rounded-md ${color === 'primary' ? 'text-white' : 'text-black'} ${
        disabled ? 'bg-gray-300' : `bg-${color} `
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button

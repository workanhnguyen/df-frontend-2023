import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const context = useStateContext();
  const mode = context?.mode;
  return (
    <div
      className={`w-full flex flex-col items-center ${
        mode === 'light' ? 'bg-gray' : 'bg-dark-gray'
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;

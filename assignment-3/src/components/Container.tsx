import React from 'react';

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main className="max-sm:px-3 sm:px-10 w-full h-screen">{children}</main>;
};

export default Container;

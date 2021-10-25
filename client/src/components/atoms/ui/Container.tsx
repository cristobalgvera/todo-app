import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="p-6 rounded-2xl bg-quaternary-300 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Container;

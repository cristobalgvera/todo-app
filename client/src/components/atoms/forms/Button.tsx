import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="p-2 text-text border-primary-base border rounded transition-all duration-300 ease-out hover:text-white hover:bg-primary-base"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

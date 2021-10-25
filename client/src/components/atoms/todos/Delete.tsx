import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface RemoveProps {
  onClick: () => void;
}

const Delete = ({ onClick }: RemoveProps) => (
  <FaTrash
    onClick={onClick}
    className="transition-colors w-6 hover:text-secondary-500"
  />
);

export default Delete;

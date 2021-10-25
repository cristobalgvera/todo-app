import React from 'react';
import { FaEdit } from 'react-icons/fa';

interface EditionProps {
  onClick: () => void;
}

const Edition = ({ onClick }: EditionProps) => (
  <FaEdit
    onClick={onClick}
    data-testid="edit-todo"
    className="transition-colors w-6 hover:text-tertiary-500"
  />
);

export default Edition;

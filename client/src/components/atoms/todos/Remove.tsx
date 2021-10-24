import { FaTrash } from 'react-icons/fa';

interface RemoveProps {
  onClick: () => void;
}

const Remove = ({ onClick }: RemoveProps) => (
  <FaTrash
    onClick={onClick}
    className="transition-colors w-6 hover:text-secondary-500"
  />
);

export default Remove;

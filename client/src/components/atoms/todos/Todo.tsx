import { formatDate } from '../../../lib/dateFormat';
import { TodoItem } from '../../../types/todos/TodoItem';

import React from 'react';

interface TodoProps {
  todo: TodoItem;
  onChange: (id: number) => void;
}

const Todo = ({
  todo: { id, title, completed, creationDate },
  onChange,
}: TodoProps) => {
  const labelTooltip = `${title} (${formatDate(creationDate)})`;

  return (
    <label
      title={labelTooltip}
      className={`${
        completed && 'line-through text-gray-400'
      } text-text font-bold text-xl flex items-center pr-4 w-80 cursor-pointer`}
    >
      <input
        type="checkbox"
        className="text-primary-400 rounded"
        checked={completed}
        onChange={() => onChange(id)}
      />
      <span className="ml-2 truncate">{title}</span>
    </label>
  );
};

export default Todo;

import { TodoItem } from '../../../types/todos/TodoItem';

interface TodoProps {
  todo: TodoItem;
  onChange: (id: number) => void;
}

const Todo = ({ todo: { id, title, completed }, onChange }: TodoProps) => {
  return (
    <label
      title={title}
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

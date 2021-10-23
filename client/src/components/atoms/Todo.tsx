import { TodoItem } from '../../types/TodoItem';

interface TodoProps {
  todo: TodoItem;
  onChange: (id: number) => void;
}

const Todo = ({ todo: { id, title, completed }, onChange }: TodoProps) => {
  return (
    <label className="font-bold">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChange(id)}
      />
      <span className="ml-2 text-text">{title}</span>
    </label>
  );
};

export default Todo;

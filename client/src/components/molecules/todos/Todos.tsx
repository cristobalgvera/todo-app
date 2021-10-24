import { TodoItem } from '../../../types/TodoItem';
import Edition from '../../atoms/todos/Edition';
import Todo from '../../atoms/todos/Todo';

interface TodosProps {
  todos: TodoItem[];
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const Todos = ({ todos, onToggle, onEdit }: TodosProps) => {
  const onChange = (id: number) => onToggle(id);

  return (
    <div className="flex flex-col gap-y-2 w-80">
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center group">
          <Todo todo={todo} onChange={() => onChange(todo.id)} />
          <div>
            <Edition />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;

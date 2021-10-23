import { TodoItem } from '../../../types/TodoItem';
import Todo from '../../atoms/Todo';

interface TodosProps {
  todoItems: TodoItem[];
}

const Todos = ({ todoItems }: TodosProps) => {
  const onChange = (id: number) => {
    // TODO: Add todo item toggle
    console.log(`Todo ${id} was clicked`);
  };

  return (
    <div className="flex flex-col">
      {todoItems.map((todo) => (
        <Todo key={todo.id} todo={todo} onChange={onChange} />
      ))}
    </div>
  );
};

export default Todos;

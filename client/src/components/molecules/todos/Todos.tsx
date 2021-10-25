import { useState } from 'react';
import { TodoItem } from '../../../types/todos/TodoItem';
import Todo from '../../atoms/todos/Todo';
import TodoActions from './TodoActions';
import TodoForm from './TodoForm';

interface TodosProps {
  todos: TodoItem[];
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

const Todos = ({ todos, onToggle, onEdit, onDelete }: TodosProps) => {
  const [editing, setEditing] = useState<number | null>(null);

  const handleEditing = (id: number | null) => {
    setEditing(id);
  };

  const handleUpdate = (id: number, title: string) => {
    onEdit(id, title);
    cancelEditing();
  };

  const cancelEditing = () => {
    setEditing(null);
  };

  return (
    <div className="flex flex-col gap-y-2 w-96 p-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center group mr-2"
        >
          {editing === todo.id ? (
            <TodoForm
              onSubmit={{ currentTodoId: todo.id, handleUpdate, cancelEditing }}
              buttonText="Save"
              value={todo.title}
              placeholder={todo.title}
            />
          ) : (
            <>
              <Todo todo={todo} onChange={() => onToggle(todo.id)} />
              <TodoActions
                onClickEdition={() => handleEditing(todo.id)}
                onDelete={() => onDelete(todo.id)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;

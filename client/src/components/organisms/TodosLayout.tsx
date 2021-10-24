import { useState } from 'react';
import { TodoItem } from '../../types/TodoItem';
import Divider from '../atoms/ui/Divider';
import Scrollable from '../atoms/ui/Scrollable';
import AppLayout from '../common/AppLayout';
import TodoForm from '../molecules/todos/TodoForm';
import Todos from '../molecules/todos/Todos';

const TodosLayout = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
      creationDate: new Date(),
      updateDate: new Date(),
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: true,
      creationDate: new Date(),
      updateDate: new Date(),
    },
    {
      id: 3,
      title: 'Todo 3',
      completed: false,
      creationDate: new Date(),
      updateDate: new Date(),
    },
  ]);

  const handleAddTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title,
        completed: false,
        creationDate: new Date(),
        updateDate: new Date(),
      },
    ]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEditTodo = (id: number, title: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <AppLayout>
      <TodoForm onSubmit={{ handleCreate: handleAddTodo }} />
      <Divider />
      <Scrollable>
        <Todos
          todos={todos}
          onToggle={handleToggleTodo}
          onEdit={handleEditTodo}
          onRemove={handleRemoveTodo}
        />
      </Scrollable>
    </AppLayout>
  );
};

export default TodosLayout;

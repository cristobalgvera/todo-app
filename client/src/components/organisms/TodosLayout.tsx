import { useState } from 'react';
import { TodoItem } from '../../types/TodoItem';
import Divider from '../atoms/ui/Divider';
import Scrollable from '../atoms/ui/Scrollable';
import AppLayout from '../common/AppLayout';
import TodoForm from '../molecules/todos/TodoForm';
import Todos from '../molecules/todos/Todos';

const TodosLayout = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
  ]);

  const handleAddTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, title, completed: false },
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

  return (
    <AppLayout>
      <TodoForm handleAddTodo={handleAddTodo} />
      <Divider />
      <Scrollable>
        <Todos
          todos={todos}
          onToggle={handleToggleTodo}
          onEdit={handleEditTodo}
        />
      </Scrollable>
    </AppLayout>
  );
};

export default TodosLayout;

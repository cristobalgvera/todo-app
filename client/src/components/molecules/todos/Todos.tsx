import React, { useState } from 'react';
import { useTodoApi } from '../../../hooks/useTodoApi';
import Todo from '../../atoms/todos/Todo';
import TodoActions from './TodoActions';
import TodoForm from './TodoForm';

const Todos = () => {
  const [editing, setEditing] = useState<number | null>(null);
  const {
    data: { todos },
    actions: { handleDeleteTodo, handleToggleTodo },
  } = useTodoApi();

  const handleEditing = (id: number | null) => {
    setEditing(id);
  };

  const cancelEditing = () => {
    setEditing(null);
  };

  return (
    <div className="flex flex-col gap-y-2 w-96 p-2">
      {todos?.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center group mr-2"
        >
          {editing === todo.id ? (
            <TodoForm
              onSubmit={{
                type: 'update',
                currentTodoId: todo.id,
                cancelEditing,
              }}
              buttonText="Save"
              value={todo.title}
              placeholder={todo.title}
            />
          ) : (
            <>
              <Todo todo={todo} onToggle={() => handleToggleTodo(todo.id)} />
              <TodoActions
                onClickEdition={() => handleEditing(todo.id)}
                onDelete={() => handleDeleteTodo(todo.id)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;

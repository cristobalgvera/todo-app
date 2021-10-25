import { useCallback } from 'react';
import { todosApi } from '../context/stores/todoStore';

export const useTodoApi = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
  } = todosApi.useGetTodosQuery();
  const [createTodo] = todosApi.useCreateTodoMutation();
  const [toggleTodo] = todosApi.useToggleTodoMutation();
  const [updateTodoTile] = todosApi.useUpdateTodoMutation();
  const [deleteTodo] = todosApi.useDeleteTodoMutation();

  const handleAddTodo = useCallback(
    (title: string) => createTodo({ title }),
    [createTodo],
  );

  const handleToggleTodo = useCallback(
    (id: number) => toggleTodo(id),
    [toggleTodo],
  );

  const handleEditTodo = useCallback(
    (id: number, title: string) => updateTodoTile({ id, title }),
    [updateTodoTile],
  );

  const handleDeleteTodo = useCallback(
    (id: number) => deleteTodo(id),
    [deleteTodo],
  );

  return {
    data: {
      todos,
      isLoading,
      isSuccess,
      isError,
    },
    actions: {
      handleAddTodo,
      handleToggleTodo,
      handleEditTodo,
      handleDeleteTodo,
    },
  };
};

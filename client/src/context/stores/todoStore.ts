import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TodoItem } from '../../types/todos/TodoItem';
import { CreateTodoItem } from '../../types/todos/CreateTodoItem';
import { UpdateTodoItem } from '../../types/todos/UpdateTodoItem';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1/todo-items',
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItem[], void>({
      query: () => '/',
      providesTags: [{ type: 'Todos', id: 'FIND_ALL' }],
      transformResponse: (todos: TodoItem[]) =>
        todos.sort((a, b) => {
          if (a.completed === b.completed)
            return a.creationDate > b.creationDate ? -1 : 1;

          return a.completed ? 1 : -1;
        }),
    }),
    createTodo: builder.mutation<TodoItem, CreateTodoItem>({
      query: (createTodoItem) => ({
        url: '/',
        method: 'POST',
        body: createTodoItem,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'FIND_ALL' }],
    }),
    toggleTodo: builder.mutation<TodoItem, number>({
      query: (id) => ({
        url: `/toggle-completed/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Todos', id: 'FIND_ALL' }],
    }),
    updateTodo: builder.mutation<TodoItem, UpdateTodoItem & { id: number }>({
      query: ({ id, title }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: { title } as UpdateTodoItem,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'FIND_ALL' }],
    }),
    deleteTodo: builder.mutation<TodoItem, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos', id: 'FIND_ALL' }],
    }),
  }),
});

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TodoItem } from '../../../types/todos/TodoItem';
import Todo from './Todo';

it('renders without crashing', () => {
  const todo: TodoItem = {
    id: 1,
    title: 'Test',
    completed: false,
    creationDate: new Date(),
  };

  const { getByText } = render(<Todo todo={todo} onToggle={jest.fn()} />);
  expect(getByText(todo.title)).toBeInTheDocument();
});

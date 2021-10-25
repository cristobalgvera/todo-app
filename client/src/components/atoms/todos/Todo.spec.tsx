import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TodoItem } from '../../../types/todos/TodoItem';
import Todo from './Todo';

let todoItem: TodoItem;

beforeEach(() => {
  todoItem = {
    id: 1,
    title: 'Test',
    completed: false,
    creationDate: new Date(2021, 10, 10),
    updateDate: new Date(2021, 10, 20),
  };
});

it('renders without crashing', () => {
  const { getByText } = render(<Todo todo={todoItem} onToggle={jest.fn()} />);
  expect(getByText(todoItem.title)).toBeInTheDocument();
});

it('calls onToggle when toggled', () => {
  const onToggle = jest.fn();
  const { getByText } = render(<Todo todo={todoItem} onToggle={onToggle} />);

  fireEvent.click(getByText(todoItem.title));
  expect(onToggle).toHaveBeenCalledTimes(1);
});

it('shows correct completed state in non checked input attribute', () => {
  todoItem.completed = false;
  const { getByRole } = render(<Todo todo={todoItem} onToggle={jest.fn()} />);

  expect(getByRole('checkbox')).not.toBeChecked();
});

it('shows correct completed state in checked input attribute', () => {
  todoItem.completed = true;
  const { getByRole } = render(<Todo todo={todoItem} onToggle={jest.fn()} />);

  expect(getByRole('checkbox')).toBeChecked();
});

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

it('renders without crashing', () => {
  const message = 'Click me';
  const { container } = render(<Button>{message}</Button>);
  expect(container).toHaveTextContent(message);
});

it('renders a button with an onClick action', () => {
  const message = 'Click me';
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>{message}</Button>);
  fireEvent.click(getByText(message));
  expect(onClick).toHaveBeenCalled();
});

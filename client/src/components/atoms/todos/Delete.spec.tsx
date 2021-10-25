import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Delete from './Delete';

it('renders without crashing', () => {
  const { getByTestId } = render(<Delete onClick={() => {}} />);
  expect(getByTestId('delete-todo')).toBeInTheDocument();
});

it('calls onClick when clicked', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Delete onClick={onClick} />);
  fireEvent.click(getByTestId('delete-todo'));
  expect(onClick).toHaveBeenCalledTimes(1);
});

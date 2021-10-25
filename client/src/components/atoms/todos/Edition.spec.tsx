import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Edition from './Edition';

it('renders without crashing', () => {
  const { getByTestId } = render(<Edition onClick={() => {}} />);
  expect(getByTestId('edit-todo')).toBeInTheDocument();
});

it('calls onClick when clicked', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Edition onClick={onClick} />);
  fireEvent.click(getByTestId('edit-todo'));
  expect(onClick).toHaveBeenCalled();
});

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

it('renders without crashing', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument();
});

it('renders the correct text', () => {
  const { getByText } = render(<Header />);
  expect(getByText('To-do')).toBeInTheDocument();
});

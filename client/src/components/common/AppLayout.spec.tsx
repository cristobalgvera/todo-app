import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import AppLayout from './AppLayout';

it('renders without crashing', () => {
  const { container } = render(<AppLayout>Content</AppLayout>);
  expect(container).toBeInTheDocument();
});

it('renders children', () => {
  const { getByText } = render(<AppLayout>Content</AppLayout>);
  expect(getByText('Content')).toBeInTheDocument();
});

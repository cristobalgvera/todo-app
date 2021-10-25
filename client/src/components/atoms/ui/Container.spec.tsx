import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Container from './Container';

it('renders without crashing', () => {
  const { container } = render(<Container>Content</Container>);
  expect(container).toBeInTheDocument();
});

it('renders children', () => {
  const { getByText } = render(<Container>Content</Container>);
  expect(getByText('Content')).toBeInTheDocument();
});

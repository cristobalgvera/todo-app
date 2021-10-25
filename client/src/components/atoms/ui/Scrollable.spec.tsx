import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Scrollable from './Scrollable';

it('renders without crashing', () => {
  const { container } = render(<Scrollable>Content</Scrollable>);
  expect(container).toBeInTheDocument();
});

it('renders children', () => {
  const { getByText } = render(
    <Scrollable>
      <div>Hello</div>
    </Scrollable>,
  );
  expect(getByText('Hello')).toBeInTheDocument();
});

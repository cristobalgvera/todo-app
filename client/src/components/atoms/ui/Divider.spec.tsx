import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Divider from './Divider';

it('renders without crashing', () => {
  const { container } = render(<Divider />);
  expect(container).toBeInTheDocument();
});

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Input from './Input';

it('renders without crashing', () => {
  const component = render(<Input />);
  expect(component.container).toContainHTML('<input');
});

it('renders an input with a label', () => {
  const placeholder = 'placeholder';
  const component = render(<Input placeholder={placeholder} />);
  expect(component.container).toContainHTML(placeholder);
});

it('renders an input with a value', () => {
  const value = 'value';
  const component = render(<Input value={value} />);
  expect(component.container).toContainHTML(value);
});

it('renders an auto focused input', () => {
  const component = render(<Input />);
  const input = component.container.getElementsByTagName('input')[0];
  expect(input).toHaveFocus();
});

it('renders only one input', () => {
  const component = render(<Input />);
  expect(component.container.getElementsByTagName('input').length).toBe(1);
});

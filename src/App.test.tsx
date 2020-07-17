import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  let { getByText } = render(<App />);
  let linkElement = getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});

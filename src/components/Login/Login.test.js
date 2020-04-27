import React from 'react';
import { render } from '@testing-library/react';
import Login from './index';
import { Provider } from 'react-redux';
import configureStore from "../../configureStore"

test('renders login form', () => {
  const { getByText } = render(<Provider store={configureStore()}><Login /></Provider>);
  const linkElement = getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});

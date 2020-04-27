import React from 'react';
import { render } from '@testing-library/react';
import CustomerDashboard from './index';
import { Provider } from 'react-redux';
import configureStore from "../../configureStore"

test('renders dashboard', () => {
  const { getByText } = render(<Provider store={configureStore()}><CustomerDashboard /></Provider>);
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import Widget from './index';
import { Provider } from 'react-redux';
import configureStore from "../../configureStore"

test('renders widget when loading', () => {
  const { getByText } = render(<Provider store={configureStore()}><Widget isLoading={true} /></Provider>);
  const linkElement = getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});

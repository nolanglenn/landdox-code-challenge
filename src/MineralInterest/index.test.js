import React from 'react';
import { render } from '@testing-library/react';
import MineralInterest from './index';

it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderName } = render(<MineralInterest />);

  expect(queryByTestId('mineral-interest')).toBeTruthy();
});

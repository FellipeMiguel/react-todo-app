import React from 'react';
import Header from '.';
import { render } from '@testing-library/react';

describe('<Header />', () => {
  it('should renders header component correctly', () => {
    render(<Header />);
  });
});

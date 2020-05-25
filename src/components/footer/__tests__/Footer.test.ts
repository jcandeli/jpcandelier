import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});

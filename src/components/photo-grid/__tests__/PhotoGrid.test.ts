import React from 'react';
import { render } from '@testing-library/react';
import { PhotoGrid } from '../PhotoGrid';

describe('PhotoGrid Component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<PhotoGrid />);
    expect(container).toMatchSnapshot();
  });
});

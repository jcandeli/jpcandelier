import React from 'react';
import { render } from '@testing-library/react';
import { Photo } from '../Photo';

describe('Photo Component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Photo />);
    expect(container).toMatchSnapshot();
  });
});

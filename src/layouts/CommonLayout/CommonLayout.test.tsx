import { render, screen } from '@testing-library/react';

import getLayout, { CommonLayout } from '.';

describe('CommonLayout', () => {
  test.each([
    getLayout(<p>children</p>),
    <CommonLayout key="common">
      <p>children</p>
    </CommonLayout>,
  ])('should render properly', (comp) => {
    render(comp);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('Powered by');

    const logo = screen.getByAltText('Vercel Logo');
    expect(logo).toBeInTheDocument();

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
  });
});

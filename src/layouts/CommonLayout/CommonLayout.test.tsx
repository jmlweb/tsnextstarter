import { render, screen } from '@testing-library/react';

import { CommonLayout } from './CommonLayout';

describe('CommonLayout', () => {
  test('should render properly', async () => {
    render(
      <CommonLayout>
        <p>children</p>
      </CommonLayout>,
    );

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('Powered by');

    const logo = screen.getByAltText('Vercel Logo');
    expect(logo).toBeInTheDocument();

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
  });
});

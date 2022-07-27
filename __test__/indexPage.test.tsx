import { render, screen, within } from '@testing-library/react';

import getLayout from '@/layouts/CommonLayout';
import IndexPage from '@/pages';

describe('IndexPage', () => {
  test('should render the home scene wrapped with the common layout', async () => {
    render(getLayout(<IndexPage />));

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('Powered by');

    const logo = screen.getByAltText('Vercel Logo');
    expect(logo).toBeInTheDocument();

    const main = screen.getByRole('main');

    const grid = within(main).getByTestId('cards');
    const links = within(grid).getAllByRole('link');
    expect(links).toHaveLength(4);
  });
});

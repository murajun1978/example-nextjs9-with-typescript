import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Home from '../';

describe('Home', () => {
  test('Display message', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Hello Next.js 9')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('Button renders with correct text', () => {
  render(<Button label={''} />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

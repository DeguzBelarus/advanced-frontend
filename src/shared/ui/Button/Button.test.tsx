import { render, screen } from '@testing-library/react';

import { Button, ThemeButtonEnum } from './Button';

describe('Button component tests', () => {
  test('test component rendering', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button theme={ThemeButtonEnum.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});

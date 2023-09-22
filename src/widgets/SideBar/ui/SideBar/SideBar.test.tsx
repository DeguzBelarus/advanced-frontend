import { screen, fireEvent } from '@testing-library/react';
import { withTranslation } from 'react-i18next';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('Sidebar component tests', () => {
  const { click } = fireEvent;

  beforeEach(() => {
    const SidebarWithTranslation = withTranslation()(SideBar);
    renderWithTranslation(<SidebarWithTranslation />);
  });

  test('test component rendering', () => {
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test component toggling', () => {
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    click(toggleButton);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});

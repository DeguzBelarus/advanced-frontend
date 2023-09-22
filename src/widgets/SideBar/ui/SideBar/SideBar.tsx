import { type FC, useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SideBar.module.scss';

interface Props {
  className?: string;
}

export const SideBar: FC<Props> = ({ className = '' }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const collapsedHandler = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <div
      className={classNames(styles.SideBar, [className], { [styles.collapsed]: isCollapsed })}
      data-testid="sidebar"
    >
      <button type="button" onClick={collapsedHandler} data-testid="sidebar-toggle">
        toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

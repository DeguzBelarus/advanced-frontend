import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from './SideBar.module.scss';

interface Props {
  className?: string;
}

export const SideBar: FC<Props> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapsedHandler = () => setIsCollapsed((prevState) => !prevState);
  return <div className={classNames(styles.SideBar, [className], { [styles.collapsed]: isCollapsed })}>
    <button onClick={collapsedHandler}>toggle</button>
    <div className={styles.switchers}>
      <ThemeSwitcher />
    </div>
  </div>;
};
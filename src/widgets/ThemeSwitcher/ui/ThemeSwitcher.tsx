import { FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from '../../../shared/assets/icons/light-theme-icon.svg';
import DarkIcon from '../../../shared/assets/icons/dark-theme-icon.svg';
import { Button, ThemeButtonEnum } from "shared/ui/Button/Button";
import styles from './ThemeSwitcher.module.scss';

interface Props {
  className?: string;
}

export const ThemeSwitcher: FC<Props> = ({ className }) => {
  const { theme, themeHandler } = useTheme();
  return <Button theme={ThemeButtonEnum.CLEAR} className={classNames(styles.ThemeSwitcher, [className])} onClick={themeHandler}>{`THEME: `}{theme === 'light' ? <LightIcon /> : <DarkIcon />}</Button>
};

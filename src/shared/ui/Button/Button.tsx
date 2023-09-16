import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
}

export const Button: FC<Props> = ({ className, theme = ThemeButtonEnum.CLEAR, children, ...otherProps }) => {
  return <button className={classNames(styles.Button, [className, styles[theme]])} {...otherProps}>
    {children}
  </button>;
};
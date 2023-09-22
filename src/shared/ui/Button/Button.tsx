import { type ButtonHTMLAttributes, type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
  onClickMethod?: () => void;
}

export const Button: FC<Props> = ({
  className = '',
  theme = ThemeButtonEnum.CLEAR,
  onClickMethod,
  children,
  ...otherProps
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.Button, [className, styles[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      onClick={onClickMethod}
    >
      {children}
    </button>
  );
};

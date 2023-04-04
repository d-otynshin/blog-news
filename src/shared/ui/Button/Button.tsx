import React, { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/cn';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<IButton> = (
  {
    theme,
    children,
    className,
    ...otherProps
  }
) => {
  return (
    <button
      className={cn(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

import React, { FC } from 'react';
import { cn } from 'shared/lib/cn';
import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IAppLink extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<IAppLink> = (
  {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  }
) => {
  return (
    <Link
      to={to}
      className={cn(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

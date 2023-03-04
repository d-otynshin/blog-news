import React, { type FC } from 'react';
import { cn } from 'shared/lib/cn';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface INavbar {
  className?: string
}

export const Navbar: FC<INavbar> = ({ className }) => {
  return (
    <div className={cn(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />

      <AppLink to={'/about'}>
                About
      </AppLink>
      <AppLink to={'/'}>
                Main
      </AppLink>
    </div>
  );
};

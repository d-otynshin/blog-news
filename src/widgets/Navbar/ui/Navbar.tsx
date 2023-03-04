import React, { FC } from 'react';
import { cn } from 'shared/lib/cn';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next'

interface INavbar {
  className?: string
}

export const Navbar: FC<INavbar> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />

      <AppLink to={'/about'}>{t('about')}</AppLink>
      <AppLink to={'/'}>{t('main')}</AppLink>
    </div>
  );
};

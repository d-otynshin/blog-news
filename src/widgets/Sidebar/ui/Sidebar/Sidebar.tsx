import React, { FC, useState } from 'react';
import { cn } from 'shared/lib/cn';
import styles from './Sidebar.module.scss';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next'

interface ISidebar {
  className?: string
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = (): void => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <div
      className={cn(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <LangSwitcher />
      <Button onClick={onToggle}>{t('toggle')}</Button>
    </div>
  );
};

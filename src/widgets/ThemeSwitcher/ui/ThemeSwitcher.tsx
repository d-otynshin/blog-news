import React, { FC } from 'react';
import { cn } from 'shared/lib/cn';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface IThemeSwitcher {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
      className={cn('', {}, [className])}
    >
      {Theme.DARK === theme ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

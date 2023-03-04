import './styles/styles.scss';
import { cn } from 'shared/lib/cn';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';

export const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback={null}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

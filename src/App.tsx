import './styles/styles.scss';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import MainPage from './pages/MainPage/index.lazy';
import AboutPage from './pages/AboutPage/index.lazy';
import { useTheme } from './theme/useTheme';
import { cn } from './helpers/cn';

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <button onClick={toggleTheme}>{theme}</button>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/counter' element={<Counter />} />
                </Routes>
            </Suspense>
        </div>
    )
}

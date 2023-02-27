import { FC, useState } from 'react';
import styles from './styles.module.scss';

export const Counter: FC = () => {
    const [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter((counter) => counter + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className={styles.button} onClick={onClick}>Counter</button>
        </div>
    )
}

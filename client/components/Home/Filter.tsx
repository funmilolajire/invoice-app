import { useState } from 'react';
import styles from './styles/Filter.module.css';
import { ImCheckmark } from 'react-icons/im';

const Filter = ({ status }: { status: string }) => {
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
        setChecked(prev => !prev)
    }
    return (
        <div onClick={handleClick} className={styles.filter}>
            <span className={checked ? styles.checkbox__checked : styles.checkbox}>{checked ? <ImCheckmark /> : ''}</span>
            <h3 className={styles.label}>{status}</h3>
        </div>
    )
}

export default Filter

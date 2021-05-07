import { FC } from 'react';
import styles from './styles/Filter.module.css';
import { ImCheckmark } from 'react-icons/im';
import { useFilterState } from '../../state/home.state';

const Filter: FC<Filter> = ({ status, setShowBox }) => {
    const filterState = useFilterState()
    const currentStatus = filterState.get()
    const checked = currentStatus === status ? true : false
    const handleClick = () => {
        !checked ? filterState.change(status) : filterState.change('')
        setShowBox(false)
    }

    return (
        <div onClick={handleClick} className={styles.filter}>
            <span className={checked ? styles.checkbox__checked : styles.checkbox}>{checked ? <ImCheckmark /> : ''}</span>
            <h3 className={styles.label}>{status}</h3>
        </div>
    )
}

export default Filter

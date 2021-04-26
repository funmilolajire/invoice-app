import { FC, useState } from 'react';
import styles from './styles/FilterBox.module.css';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Filter from './Filter';

const FilterBox: FC = () => {
    const [showBox, setShowBox] = useState(false)
    const statuses = ['Draft', 'Pending', 'Paid']
    const handleBox = () => {
        setShowBox(prev => !prev)
    }

    return (
        <div className={styles.container}>
            <div onClick={handleBox} className={styles.selectFilter}>
                <h3>Filter <span>by status</span></h3>
                <span>{showBox ? <HiChevronUp /> : <HiChevronDown />}</span>
            </div>
            {showBox &&
                <div className={styles.filterList}>
                    {statuses && statuses.map((status: string) => <Filter setShowBox={setShowBox} status={status} key={status} />)}
                </div>
            }
        </div>
    )
}

export default FilterBox

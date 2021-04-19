import FilterBox from './FilterBox';
import styles from './styles/Header.module.css';
import { BiPlusMedical } from 'react-icons/bi';

const Header = () => {
    const invoices = 7;
    const status = 'total';

    return (
        <header className={styles.container}>
            <div className={styles.titleDiv}>
                <h1>Invoices</h1>
                <span>{invoices ? `There are ${invoices} ${status} invoices` : 'No invoices'}</span>
            </div>
            <div className={styles.lowerDiv}>
                <FilterBox />
                <div className={styles.buttonDiv}>
                    <button><BiPlusMedical /></button>
                    <h3>New Invoice</h3>
                </div>
            </div>
        </header>
    )
}

export default Header

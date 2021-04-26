import { FC } from 'react';
import FilterBox from './FilterBox';
import styles from './styles/Header.module.css';
import { BiPlusMedical } from 'react-icons/bi';
import { useFormState } from '../../state/form.state';

const Header: FC<{ numInvoices: number }> = ({ numInvoices }) => {
    const formState = useFormState()
    const status = 'total';

    return (
        <header className={styles.container}>
            <div className={styles.titleDiv}>
                <h1>Invoices</h1>
                <span>{numInvoices ? <span><span className={styles.mobileHidden}>There are</span> {numInvoices}  <span className={styles.mobileHidden}>{status}</span> invoices</span> : 'No invoices'}</span>
            </div>
            <div className={styles.lowerDiv}>
                <FilterBox />
                <div onClick={() => formState.open()} className={styles.buttonDiv}>
                    <button><BiPlusMedical /></button>
                    <h3>New<span className={styles.mobileHidden}> Invoice</span></h3>
                </div>
            </div>
        </header>
    )
}

export default Header

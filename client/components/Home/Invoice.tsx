import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';
import styles from './styles/Invoice.module.css';
import { getStatusColors } from '../../utils/getStatusColors';

const Invoice = () => {
    const status = 'Pending'
    let color: number[];
    color = getStatusColors(status)

    return (
        <Link href='/invoice/[id]' as={`/invoice/${'XM9141'}`}>
            <section className={styles.container}>
                <h2 className={styles.id}><span>#</span>XM9141</h2>
                <p className={styles.dueDate}>Due 12 Oct 2021</p>
                <p className={styles.name}>Alysa Werner</p>
                <h2 className={styles.total}>£ 1102.04</h2>
                <div style={{ backgroundColor: `rgba(${color},0.06)` }} className={styles.status}>
                    <span style={{ backgroundColor: `rgb(${color})` }}></span>
                    <h3 style={{ color: `rgb(${color})` }} className={styles.label}>{status}</h3>
                </div>
                <span className={styles.icon}><HiChevronRight /></span>
            </section>
        </Link>
    )
}

export default Invoice

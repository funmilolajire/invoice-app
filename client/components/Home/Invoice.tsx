import { FC } from 'react';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';
import styles from './styles/Invoice.module.css';
import { getStatusColors } from '../../utils/getStatusColors';

const Invoice: FC<Invoice> = ({ invoice }) => {
    let color: number[];
    color = getStatusColors(invoice.status)
    const status = invoice.status[0].toUpperCase() + invoice.status.substring(1);

    return (
        <Link href={`/invoice/${invoice.id}`}>
            <section className={styles.container}>
                <h2 className={styles.id}><span>#</span>{invoice.id}</h2>
                <p className={styles.dueDate}>{invoice.paymentDue}</p>
                <p className={styles.name}>{invoice.clientName}</p>
                <h2 className={styles.total}>£ {invoice.total.toFixed(2)}</h2>
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

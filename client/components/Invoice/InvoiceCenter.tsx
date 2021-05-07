import { FC } from 'react';
import styles from './styles/InvoiceCenter.module.css';

const InvoiceCenter: FC<InvoiceCenter> = ({ ...props }) => {
    const { createdAt, paymentDue, clientName, clientEmail, clientAddress } = props
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <section className={styles.topBox}>
                    <span>Invoice Date</span>
                    <h3>{createdAt}</h3>
                </section>
                <section className={styles.bottomBox}>
                    <span>Payment Due</span>
                    <h3>{paymentDue}</h3>
                </section>
            </div>
            <div className={styles.centerBox}>
                <span>Bill To</span>
                <h3>{clientName}</h3>
                <address className={styles.clientAddress}>
                    <span className={styles.street}>{clientAddress.street}</span>
                    <span className={styles.city}>{clientAddress.city}</span>
                    <span className={styles.postcode}>{clientAddress.postCode}</span>
                    <span className={styles.country}>{clientAddress.country}</span>
                </address>
            </div>
            <div className={styles.rightBox}>
                <span>Sent to</span>
                <h3>{clientEmail}</h3>
            </div>
        </div>
    )
}

export default InvoiceCenter

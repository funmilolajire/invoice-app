import { FC } from 'react';
import styles from './styles/InvoiceHeader.module.css';

const InvoiceHeader: FC<InvoiceHeader> = ({ id, description, senderAddress }) => {
    return (
        <div className={styles.container}>
            <section>
                <h3 className={styles.id}><span>#</span>{id}</h3>
                <span className={styles.description}>{description}</span>
            </section>
            <address className={styles.senderAddress}>
                <span className={styles.street}>{senderAddress.street}</span>
                <span className={styles.city}>{senderAddress.city}</span>
                <span className={styles.postcode}>{senderAddress.postCode}</span>
                <span className={styles.country}>{senderAddress.country}</span>
            </address>
        </div>
    )
}

export default InvoiceHeader

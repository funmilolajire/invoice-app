import { FC } from 'react';
import Invoice from './Invoice';
import styles from './styles/InvoiceList.module.css';

const InvoiceList: FC<Invoices> = ({ invoices }) => {
    // console.log(invoices)
    return (
        <div className={styles.container}>
            {invoices.map(invoice => <Invoice key={invoice.id} invoice={invoice} />)}
        </div>
    )
}

export default InvoiceList
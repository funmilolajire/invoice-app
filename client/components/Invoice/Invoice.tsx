import { FC } from 'react';
import InvoiceHeader from './InvoiceHeader';
import InvoiceCenter from './InvoiceCenter';
import InvoiceItems from './InvoiceItems';
import styles from './styles/Invoice.module.css';

const Invoice: FC<Invoice> = ({ invoice }) => {
    return (
        <div className={styles.container}>
            <InvoiceHeader id={invoice.id || ''} description={invoice.description} senderAddress={invoice.senderAddress} />
            <InvoiceCenter createdAt={invoice.createdAt} paymentDue={invoice.paymentDue} clientName={invoice.clientName} clientEmail={invoice.clientEmail} clientAddress={invoice.clientAddress} />
            <InvoiceItems items={invoice.items} total={invoice.total} />
        </div>
    )
}

export default Invoice

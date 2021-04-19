import InvoiceHeader from './InvoiceHeader';
import InvoiceCenter from './InvoiceCenter';
import InvoiceItems from './InvoiceItems';
import styles from './styles/Invoice.module.css';

const Invoice = () => {
    return (
        <div className={styles.container}>
            <InvoiceHeader />
            <InvoiceCenter />
            <InvoiceItems />
        </div>
    )
}

export default Invoice

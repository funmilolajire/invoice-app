import Invoice from './Invoice';
import styles from './styles/InvoiceList.module.css';

const InvoiceList = ({ invoices }) => {
    // console.log(invoices)

    return (
        <div className={styles.container}>
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
        </div>
    )
}

export default InvoiceList
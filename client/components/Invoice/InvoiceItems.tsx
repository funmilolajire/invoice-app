import styles from './styles/InvoiceItems.module.css';

const InvoiceItems = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topDiv}>
                <div className={styles.item}>
                    <span className={styles.title}>Item Name</span>
                    <span>Banner Design</span>
                    <span>Email Design</span>
                </div>
                <div className={styles.qty}>
                    <span className={styles.title}>QTY.</span>
                    <span>1</span>
                    <span>2</span>
                </div>
                <div className={styles.price}>
                    <span className={styles.title}>Price</span>
                    <span>£ 156.00</span>
                    <span>£ 200.00</span>
                </div>
                <div className={styles.total}>
                    <span className={styles.title}>Total</span>
                    <span>£ 156.00</span>
                    <span>£ 400.00</span>
                </div>
            </div>
            <div className={styles.bottomDiv}>
                <span>Amount Due</span>
                <h3>£ 556.00</h3>
            </div>
        </div>
    )
}

export default InvoiceItems

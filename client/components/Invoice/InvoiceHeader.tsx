import styles from './styles/InvoiceHeader.module.css';

const InvoiceHeader = () => {
    return (
        <div className={styles.container}>
            <section>
                <h3 className={styles.id}><span>#</span>XM9141</h3>
                <span className={styles.description}>Graphic Design</span>
            </section>
            <address className={styles.senderAddress}>
                <span className={styles.street}>19 Union Terrace</span>
                <span className={styles.city}>London</span>
                <span className={styles.postcode}>E1 3EZ</span>
                <span className={styles.country}>United Kingdom</span>
            </address>
        </div>
    )
}

export default InvoiceHeader

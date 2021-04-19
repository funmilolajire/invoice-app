import styles from './styles/InvoiceCenter.module.css';

const InvoiceCenter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <section className={styles.topBox}>
                    <span>Invoice Date</span>
                    <h3>21 Aug 2021</h3>
                </section>
                <section className={styles.bottomBox}>
                    <span>Payment Due</span>
                    <h3>20 Sep 2021</h3>
                </section>
            </div>
            <div className={styles.centerBox}>
                <span>Bill To</span>
                <h3>Alex Grim</h3>
                <address className={styles.clientAddress}>
                    <span className={styles.street}>84 Church Way</span>
                    <span className={styles.city}>Bradford</span>
                    <span className={styles.postcode}>BD1 9PB</span>
                    <span className={styles.country}>United Kingdom</span>
                </address>
            </div>
            <div className={styles.rightBox}>
                <span>Sent to</span>
                <h3>alexgrim@mail.com</h3>
            </div>
        </div>
    )
}

export default InvoiceCenter

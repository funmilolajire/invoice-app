import Image from 'next/image';
import styles from './styles/NoInvoices.module.css';

const NoInvoices = () => {
    return (
        <section className={styles.container}>
            <picture className={styles.picture}>
                <Image
                    src="/assets/illustration.svg"
                    alt="illustration"
                    width="100%"
                    height="auto"
                    layout="responsive"
                />
            </picture>
            <div className={styles.textDiv}>
                <h2>There is nothing here</h2>
                <p>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
            </div>
        </section>
    )
}

export default NoInvoices

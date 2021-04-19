import Aside from './Aside';
import styles from './styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Aside />
            <main className={styles.mainDiv}>
                {children}
            </main>
        </div>
    )
}

export default Layout

import { FC } from 'react';
import Link from 'next/link';
import HeaderCTA from './HeaderCTA';
import { HiChevronLeft } from 'react-icons/hi';
import styles from './styles/Header.module.css';

const Header: FC<Status> = ({ status }) => {
    return (
        <header className={styles.container}>
            <Link href='/'>
                <section className={styles.backDiv}>
                    <span className={styles.backIcon}><HiChevronLeft /></span>
                    <h3 className={styles.backLabel}>Go back</h3>
                </section>
            </Link>
            <HeaderCTA status={status} />
        </header>
    )
}

export default Header

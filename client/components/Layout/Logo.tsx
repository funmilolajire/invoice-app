import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/Logo.module.css';
import Link from 'next/link';

const Logo: FC = () => {
    return (
        <Link href="/">
            <div className={styles.logoDiv}>
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width="100%"
                    height="auto"
                    layout="responsive"
                />
            </div>
        </Link>
    )
}

export default Logo

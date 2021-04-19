import Image from 'next/image';
import styles from './styles/Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoDiv}>
            <Image
                src="/assets/logo.svg"
                alt="logo"
                width="100%"
                height="auto"
                layout="responsive"
            />
        </div>
    )
}

export default Logo

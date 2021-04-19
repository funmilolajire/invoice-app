import { IoMoon } from 'react-icons/io5';
import styles from './styles/Aside.module.css';
import Avatar from './Avatar';
import Logo from './Logo';

const Aside = () => {
    return (
        <aside className={styles.container}>
            <div>
                <Logo />
                <div className={styles.lowerDiv}>
                    <span className={styles.iconSpan}><IoMoon /></span>
                    <Avatar />
                </div>
            </div>
        </aside>
    )
}

export default Aside

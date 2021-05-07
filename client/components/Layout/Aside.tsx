import { FC, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import styles from './styles/Aside.module.css';
import Avatar from './Avatar';
import Logo from './Logo';
import { IoIosSunny } from 'react-icons/io';

const Aside: FC = () => {
    const [dark, setDark] = useState(false)
    const changeTheme = () => {
        document.querySelector('body')?.classList.toggle('dark')
        if (document.querySelector('body')?.classList.contains('dark')) {
            setDark(true)
        } else {
            setDark(false)
        }
    }
    return (
        <aside className={styles.container}>
            <div>
                <Logo />
                <div className={styles.lowerDiv}>
                    <span onClick={changeTheme} className={styles.iconSpan}>{!dark ? <IoMoon /> : <IoIosSunny />}</span>
                    <Avatar />
                </div>
            </div>
        </aside>
    )
}

export default Aside

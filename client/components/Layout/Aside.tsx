import { FC, useState, useEffect } from 'react';
import { IoMoon } from 'react-icons/io5';
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
            window.localStorage.setItem('mode', 'dark')
        } else {
            setDark(false)
            window.localStorage.setItem('mode', 'light')
        }
    }
    useEffect(() => {
        const mode = window.localStorage.getItem('mode')
        if (mode === 'dark') {
            document.querySelector('body')?.classList.add('dark')
        }
        return () => {
            document.querySelector('body')?.classList.remove('dark')
        };
    }, [dark])
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

import Image from 'next/image';
import styles from './styles/Avatar.module.css'

const Avatar = () => {
    return (
        <picture className={styles.avatarDiv}>
            <Image
                src="/assets/image-avatar.jpg"
                alt="avatar"
                width="100%"
                height="auto"
                layout="responsive"
            />
        </picture>
    )
}

export default Avatar

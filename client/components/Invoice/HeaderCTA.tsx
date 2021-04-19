import { getStatusColors } from '../../utils/getStatusColors';
import styles from './styles/HeaderCTA.module.css'

const HeaderCTA = () => {
    const status = 'Pending';
    const color = getStatusColors(status);
    return (
        <div className={styles.container}>
            <div className={styles.statusDiv}>
                <span>Status</span>
                <div style={{ backgroundColor: `rgba(${color},0.06)` }} className={styles.status}>
                    <span style={{ backgroundColor: `rgb(${color})` }}></span>
                    <h3 style={{ color: `rgb(${color})` }}>Pending</h3>
                </div>
            </div>
            <div className={styles.buttonsDiv}>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton}>Delete</button>
                <button className={styles.paidButton}>Mark as Paid</button>
            </div>
        </div>
    )
}

export default HeaderCTA

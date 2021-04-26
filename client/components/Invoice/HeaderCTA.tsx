import { FC } from 'react';
import { getStatusColors } from '../../utils/getStatusColors';
import styles from './styles/HeaderCTA.module.css'
import { useFormState, useModalState } from '../../state/form.state';

const HeaderCTA: FC<Status> = ({ status }) => {
    const formState = useFormState()
    const modalState = useModalState()
    const color = getStatusColors(status);

    return (
        <div className={styles.container}>
            <div className={styles.statusDiv}>
                <span>Status</span>
                <div style={{ backgroundColor: `rgba(${color},0.06)` }} className={styles.status}>
                    <span style={{ backgroundColor: `rgb(${color})` }}></span>
                    <h3 style={{ color: `rgb(${color})` }}>{status[0].toUpperCase() + status.substr(1)}</h3>
                </div>
            </div>
            <div className={styles.buttonsDiv}>
                <button onClick={() => formState.open()} className={styles.editButton}>Edit</button>
                <button onClick={() => modalState.open()} className={styles.deleteButton}>Delete</button>
                <button className={styles.paidButton}>Mark as Paid</button>
            </div>
        </div>
    )
}

export default HeaderCTA

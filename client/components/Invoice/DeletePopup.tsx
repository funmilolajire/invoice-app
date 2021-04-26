import { FC } from 'react';
import styles from './styles/DeletePopup.module.css';
import { useModalState } from '../../state/form.state';

const DeletePopup: FC<{ id?: string }> = ({ id }) => {
    const modalState = useModalState()
    return (
        <>
            {modalState.get() &&
                <div className={styles.container}>
                    <section>
                        <h2>Confirm Deletion</h2>
                        <p>Are you sure you want to delete invoice #{id}? This action can not be undone.</p>
                        <div className={styles.buttonsDiv}>
                            <button className={styles.cancelButton} onClick={() => modalState.close()} >Cancel</button>
                            <button className={styles.deleteButton}>Delete</button>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

export default DeletePopup

import styles from './styles/DeletePopup.module.css';

const DeletePopup = () => {
    const open = false;
    const id = 'XM9141'
    return (
        <>
            {open &&
                <div className={styles.container}>
                    <section>
                        <h2>Confirm Deletion</h2>
                        <p>Are you sure you want to delete invoice #{id}? This action can not be undone.</p>
                        <div className={styles.buttonsDiv}>
                            <button className={styles.cancelButton}>Cancel</button>
                            <button className={styles.deleteButton}>Delete</button>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

export default DeletePopup

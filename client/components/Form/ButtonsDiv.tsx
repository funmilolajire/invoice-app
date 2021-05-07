import { FC, useState } from 'react';
import styles from './styles/ButtonsDiv.module.css';
import { useFormState } from '../../state/form.state';

const ButtonsDiv: FC<FormType> = ({ formType }) => {
    const formState = useFormState()
    const [loading, setLoading] = useState(false)
    const closeForm = () => {
        formState.close()
    }
    return (
        <div className={styles.container}>
            {formType === 'create' ?
                <>
                    <div className={styles.leftAlign}>
                        <button onClick={closeForm} className={styles.discardButton} type="reset">Discard</button>
                    </div>
                    <button name="draft" className={styles.saveDraftButton} type="submit">Save as Draft</button>
                    <button name="submit" className={styles.submitButton} type="submit">Save &amp; Send</button>
                </>
                :
                <>
                    <div className={styles.editButtons}>
                        <button type="button" onClick={closeForm} className={styles.cancelButton}>Cancel</button>
                        <button className={styles.submitButton} type="submit">Save Changes</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ButtonsDiv

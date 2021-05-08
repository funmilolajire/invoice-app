import { FC, useState } from 'react';
import styles from './styles/ButtonsDiv.module.css';
import { useFormState, usePaymentState, useIssueState } from '../../state/form.state';
import { initialValues } from '../../utils/formFields';
import { getId } from '../../utils/getId';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

const ButtonsDiv: FC<ButtonsType> = ({ formType, values, setSubmitting }) => {
    const formState = useFormState()
    const paymentTerm = usePaymentState()
    const issueDate = useIssueState()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const closeForm = () => {
        window.localStorage.setItem('form-values', JSON.stringify(initialValues));
        formState.close()
    }
    const submitDraft = async () => {
        setSubmitting(true)
        values.status = "draft";
        values._id = getId();
        values.paymentTerms = paymentTerm.get();
        values.createdAt = issueDate.get();
        values.paymentDue = dayjs(values.createdAt).add(dayjs.duration({ 'days': values.paymentTerms })).format('YYYY-MM-DD');
        if (values.items.length !== 0) {
            values.items = values.items.map(item => ({ ...item, quantity: Number(item.quantity), price: Number(item.price), total: Number(item.price * item.quantity) }))
            values.total = (values.items.map((item) => item.total)).reduce((acc, b) => acc + b)
        }
        await fetch(process.env.NEXT_PUBLIC_INVOICES_API_URL ? process.env.NEXT_PUBLIC_INVOICES_API_URL : '', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(() => {
                window.localStorage.setItem('form-values', JSON.stringify(initialValues));
                router.reload()
                formState.close()
            })
            .catch(e => console.log(e))
        console.log(values)
        setSubmitting(false)
    }
    return (
        <div className={styles.container}>
            {formType === 'create' ?
                <>
                    <div className={styles.leftAlign}>
                        <button onClick={closeForm} className={styles.discardButton} type="reset">Discard</button>
                    </div>
                    <button onClick={submitDraft} name="draft" className={styles.saveDraftButton} type="submit">Save as Draft</button>
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

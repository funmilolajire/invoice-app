import { FC, useState } from 'react';
import { getStatusColors } from '../../utils/getStatusColors';
import styles from './styles/HeaderCTA.module.css'
import { useFormState, useModalState } from '../../state/form.state';
import { useRouter } from 'next/router';

const HeaderCTA: FC<Status> = ({ status, id }) => {
    const formState = useFormState()
    const modalState = useModalState()
    const color = getStatusColors(status);
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const changeStatus = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        await fetch(process.env.NEXT_PUBLIC_INVOICES_API_URL ? process.env.NEXT_PUBLIC_INVOICES_API_URL + `/${id}` : '', {
            method: 'PATCH',
            body: JSON.stringify({ "status": "paid" }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(() => {
                router.replace(router.asPath)
                setLoading(false)
            })
            .catch(e => console.error(e))
    }

    return (
        <div className={styles.container}>
            <div className={styles.statusDiv}>
                <span>Status</span>
                <div style={{ backgroundColor: `rgba(${color},0.06)` }} className={styles.status}>
                    <span style={{ backgroundColor: `rgb(${color})` }}></span>
                    <h3 style={{ color: `rgb(${color})` }}>{status && status[0].toUpperCase() + status.substr(1)}</h3>
                </div>
            </div>
            <div className={styles.buttonsDiv}>
                <button onClick={() => formState.open()} className={styles.editButton}>Edit</button>
                <button onClick={() => modalState.open()} className={styles.deleteButton}>Delete</button>
                {["paid", "pending"].includes(status.toLowerCase()) ?
                    <button onClick={(e) => changeStatus(e)} className={styles.paidButton}>
                        {!loading ? 'Mark as Paid' : <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>}
                    </button> :
                    <button onClick={(e) => changeStatus(e)} disabled className={styles.paidButton}>Mark as Paid</button>
                }
            </div>
        </div>
    )
}

export default HeaderCTA

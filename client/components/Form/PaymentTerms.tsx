import { FC, useState, useEffect } from 'react';
import styles from './styles/PaymentTerms.module.css';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { usePaymentState } from '../../state/form.state';

const PaymentTerms: FC<TermValue> = ({ paymentTerm }) => {
    const [showBox, setShowBox] = useState(false)
    const paymentState = usePaymentState()
    const selectedTerm = paymentState.get()

    const changeValue = ({ target }: { target: any }) => {
        const clicked = Number(target.dataset.value)
        paymentState.change(clicked)
    }

    useEffect(() => {
        if (paymentTerm)
            paymentState.change(paymentTerm)
    }, [paymentTerm])

    return (
        <div className={styles.container}>
            <label htmlFor="paymentTerms">Payment Terms</label>
            <div id="paymentTerms" onClick={() => { setShowBox(prev => !prev) }} className={styles.customSelect}>
                <p>
                    <span className={styles.selectedTerm}>{`Net ${selectedTerm} ${selectedTerm === 1 ? 'Day' : 'Days'}`}</span>
                    <span className={styles.iconSpan}>{!showBox ? <HiChevronDown /> : <HiChevronUp />}</span>
                </p>
                {showBox &&
                    <div onClick={changeValue} className={styles.selectBox}>
                        <span data-value={1} className={selectedTerm === 1 ? styles.active : ''}>Net 1 Day</span>
                        <span data-value={7} className={selectedTerm === 7 ? styles.active : ''}>Net 7 Days</span>
                        <span data-value={14} className={selectedTerm === 14 ? styles.active : ''}>Net 14 Days</span>
                        <span data-value={30} className={selectedTerm === 30 ? styles.active : ''}>Net 30 Days</span>
                    </div>}
            </div>
        </div>
    )
}

export default PaymentTerms

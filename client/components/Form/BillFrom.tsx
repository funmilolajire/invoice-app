import { FC } from 'react';
import TextInput from './TextInput';
import styles from './styles/BillFrom.module.css';

const BillFrom: FC = () => {
    return (
        <div className={styles.container}>
            <h3>Bill From</h3>
            <div>
                <TextInput
                    label="Street Address"
                    id="street"
                    name="senderAddress.street"
                    type="text"
                />
                <div className={styles.trioColumns}>
                    <TextInput
                        label="City"
                        id="city"
                        name="senderAddress.city"
                        type="text"
                    />
                    <TextInput
                        label="Post Code"
                        id="postCode"
                        name="senderAddress.postCode"
                        type="text"
                    />
                    <TextInput
                        label="Country"
                        id="country"
                        name="senderAddress.country"
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}

export default BillFrom

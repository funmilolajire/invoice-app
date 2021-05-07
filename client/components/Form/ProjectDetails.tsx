import { FC } from 'react';
import DatePickerInput from './DatePickerInput';
import PaymentTerms from './PaymentTerms';
import TextInput from './TextInput';
import styles from './styles/ProjectDetails.module.css';

const ProjectDetails: FC<TermValue> = ({ paymentTerm }) => {
    return (
        <div className={styles.container}>
            <div className={styles.biColumns}>
                <DatePickerInput />
                <PaymentTerms paymentTerm={paymentTerm} />
            </div>
            <TextInput
                id="description"
                name="description"
                label="Project Description"
                type="text"
                placeholder="e.g. Graphic Design Service"
            />
        </div>
    )
}

export default ProjectDetails

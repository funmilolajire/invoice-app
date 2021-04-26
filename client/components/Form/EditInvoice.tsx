import { FC } from 'react';
import Form from './Form';

const EditInvoice: FC<Invoice> = ({ invoice }) => {
    return (
        <Form formType="edit" invoice={invoice} />
    )
}

export default EditInvoice

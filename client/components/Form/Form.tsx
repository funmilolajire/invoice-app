import { FC } from 'react';
import BillFrom from './BillFrom';
import BillTo from './BillTo';
import ProjectDetails from './ProjectDetails';
import ItemList from './ItemList';
import ButtonsDiv from './ButtonsDiv';
import styles from './styles/Form.module.css';
import { Formik, Form, FieldArray } from 'formik';
import { initialValues } from '../../utils/formFields';
import { validationSchema } from '../../utils/formValidation';
import { usePaymentState, useIssueState } from '../../state/form.state';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration)

const InvoiceForm: FC<FormType> = ({ formType, invoice }) => {
    const paymentTerm = usePaymentState()
    const issueDate = useIssueState()
    const onSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: any }) => {
        values.paymentTerms = paymentTerm.get();
        values.createdAt = issueDate.get();
        values.paymentDue = dayjs(values.createdAt).add(dayjs.duration({ 'days': values.paymentTerms })).format('YYYY-MM-DD');
        values.status = "";
        if (values.items) {
            values.items = values.items.map(item => ({ ...item, quantity: Number(`${item.quantity}.00`), price: Number(`${item.price}.00`), total: Number(`${item.price * item.quantity}.00`) }))
            values.total = (values.items.map((item) => item.total)).reduce((acc, b) => acc + b)
        }
        console.log(values);
        setSubmitting(false);
    }

    return (
        <div>
            <div className={styles.container}>
                <section>
                    {formType === "create" ? <h2 className={styles.heading}>New Invoice</h2> : <h2 className={styles.heading}>Edit <span>#</span>${invoice?.id}</h2>}
                    <Formik initialValues={invoice || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {({ values, errors, setFieldValue, handleChange }) => (
                            <Form>
                                <BillFrom />
                                <BillTo />
                                <ProjectDetails paymentTerm={invoice?.paymentTerms} />
                                <FieldArray name="items">
                                    {({ remove, push }) => (
                                        <ItemList items={values.items} handleChange={handleChange} setFieldValue={setFieldValue} push={push} remove={remove} />
                                    )}
                                </FieldArray>
                                <div className={styles.errorsDiv}>
                                    {Object.entries(errors).length !== 0 ?
                                        <p className={styles.fieldsError}>- All fields must be added</p> : ''
                                    }
                                    {errors.items ?
                                        <p className={styles.itemsError}>- An item must be added</p> : ''
                                    }
                                </div>
                                <ButtonsDiv formType={formType} />
                            </Form>
                        )}
                    </Formik>
                </section>
            </div>
        </div>
    )
}

export default InvoiceForm

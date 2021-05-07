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
import { usePaymentState, useIssueState, useFormState } from '../../state/form.state';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { getId } from '../../utils/getId';
import { useRouter } from 'next/router';
dayjs.extend(duration)

const InvoiceForm: FC<FormType> = ({ formType, invoice }) => {
    const formState = useFormState()
    const paymentTerm = usePaymentState()
    const issueDate = useIssueState()
    const router = useRouter()
    const onSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: any }) => {
        const buttonName = document.activeElement?.getAttribute('name')
        let status = buttonName?.toLowerCase() === 'draft' ? "draft" : "pending";
        values._id = invoice?._id ? invoice._id : getId();
        values.paymentTerms = paymentTerm.get();
        values.createdAt = issueDate.get();
        values.paymentDue = dayjs(values.createdAt).add(dayjs.duration({ 'days': values.paymentTerms })).format('YYYY-MM-DD');
        values.status = invoice?.status ? invoice.status : status;
        if (values.items) {
            values.items = values.items.map(item => ({ ...item, quantity: Number(item.quantity), price: Number(item.price), total: Number(item.price * item.quantity) }))
            values.total = (values.items.map((item) => item.total)).reduce((acc, b) => acc + b)
        }
        if (formType === "create") {
            await fetch(process.env.NEXT_PUBLIC_INVOICES_API_URL ? process.env.NEXT_PUBLIC_INVOICES_API_URL : '', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(() => {
                    router.replace(router.asPath)
                    formState.close()
                })
                .catch(e => console.log(e))
        } else {
            await fetch(process.env.NEXT_PUBLIC_INVOICES_API_URL ? process.env.NEXT_PUBLIC_INVOICES_API_URL + `/${invoice?.id}` : '', {
                method: 'PATCH',
                body: JSON.stringify({ ...values, status: "pending" }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(() => {
                    router.replace(router.asPath)
                    formState.close()
                })
                .catch(e => console.log(e))
        }
        // console.log(values);
        setSubmitting(false);
    }

    return (
        <div>
            <div className={styles.container}>
                <section>
                    {formType === "create" ? <h2 className={styles.heading}>New Invoice</h2> : <h2 className={styles.heading}>Edit <span>#</span>{invoice?.id}</h2>}
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

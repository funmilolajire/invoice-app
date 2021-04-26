import Meta from '../../../components/Layout/Meta';
import Main from '../../../components/Invoice/Main';
import EditInvoice from '../../../components/Form/EditInvoice';
import DeletePopup from '../../../components/Invoice/DeletePopup';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useFormState } from '../../../state/form.state';
import { FC } from 'react';
import dayjs from 'dayjs';

const Invoice: FC<Invoice> = ({ invoice }) => {
    const formState = useFormState().get()
    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <Meta title={`Invoice ${id}`} keywords={`invoice, invoice ${id}, invoice app, frontendmentor, funmilola o`} />
            <Main invoice={invoice} />
            {formState && <EditInvoice invoice={invoice} />}
            <DeletePopup id={invoice.id} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/data.json')
    const invoices = await res.json()
    const id = context.params?.id
    const invoice: FormValues = invoices.find((invoice: FormValues) => invoice.id === id)
    invoice.createdAt = dayjs(invoice.createdAt).format('DD MMM YYYY')
    invoice.paymentDue = dayjs(invoice.paymentDue).format('DD MMM YYYY')
    return {
        props: {
            invoice
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const invoices = await res.json()
    const ids = invoices.map((invoice: FormValues) => invoice.id)
    const paths = ids.map((id: string) => ({ params: { id: id } }))
    return {
        paths,
        fallback: false
    }
}

export default Invoice

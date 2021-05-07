import Meta from '../../../components/Layout/Meta';
import Main from '../../../components/Invoice/Main';
import EditInvoice from '../../../components/Form/EditInvoice';
import DeletePopup from '../../../components/Invoice/DeletePopup';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useFormState } from '../../../state/form.state';
import { FC, useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Invoice: FC<Invoice> = ({ invoice }) => {
    const formState = useFormState().get()
    const router = useRouter();
    const id = router.query.id;
    // const [invoice, setInvoice] = useState<FormValues>(Object)
    // const getInvoice = async () => {
    //     setInvoice(Object)
    //     const res = await fetch(process.env.NEXT_PUBLIC_INVOICES_API_URL ? process.env.NEXT_PUBLIC_INVOICES_API_URL + `/${id}` : '')
    //     let currentInvoice: FormValues = await res.json();
    //     currentInvoice.createdAt = dayjs(currentInvoice.createdAt).format('DD MMM YYYY')
    //     currentInvoice.paymentDue = dayjs(currentInvoice.paymentDue).format('DD MMM YYYY')
    //     currentInvoice.id = currentInvoice._id
    //     setInvoice(currentInvoice)
    // }

    // useEffect(() => {
    //     try {
    //         getInvoice()
    //         console.log(invoice)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }, [invoice])


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
    const id = context.params?.id
    const res = await fetch(process.env.INVOICES_API_URL ? process.env.INVOICES_API_URL + `/${id}` : '')
    const invoice = await res.json()
    invoice.createdAt = dayjs(invoice.createdAt).format('DD MMM YYYY')
    invoice.paymentDue = dayjs(invoice.paymentDue).format('DD MMM YYYY')
    invoice.id = invoice._id
    return {
        props: {
            invoice
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(process.env.INVOICES_API_URL ? process.env.INVOICES_API_URL : '')
    const invoices = await res.json()
    const ids = invoices.map((invoice: FormValues) => invoice._id)
    const paths = ids.map((id: string) => ({ params: { id: id } }))
    return {
        paths,
        fallback: false
    }
}

export default Invoice

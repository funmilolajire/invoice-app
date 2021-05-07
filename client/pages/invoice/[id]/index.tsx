import Meta from '../../../components/Layout/Meta';
import Main from '../../../components/Invoice/Main';
import EditInvoice from '../../../components/Form/EditInvoice';
import DeletePopup from '../../../components/Invoice/DeletePopup';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import { useFormState } from '../../../state/form.state';
import { FC, useState, useEffect } from 'react';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
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

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch(process.env.INVOICES_API_URL ? process.env.INVOICES_API_URL : '')
//     const invoices = await res.json()
//     const ids = invoices.map((invoice: FormValues) => invoice._id)
//     const paths = ids.map((id: string) => ({ params: { id: id } }))
//     return {
//         paths,
//         fallback: false
//     }
// }

export default Invoice

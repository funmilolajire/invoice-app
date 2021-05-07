import { FC, useEffect, useState } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';
import Meta from '../components/Layout/Meta';
import Main from '../components/Home/Main';
import NewInvoice from '../components/Form/NewInvoice';
import { useFormState } from '../state/form.state';
import dayjs from 'dayjs';
import { useFilterState } from '../state/home.state';
import { useRouter } from 'next/router';

const Home: FC<Invoices> = ({ invoices }) => {
  const [invoicesList, setInvoices] = useState<FormValues[]>(invoices)
  const formState = useFormState().get()
  const status = useFilterState().get()
  const router = useRouter()

  const getInvoices = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_INVOICES_API_URL ? process.env.NEXT_PUBLIC_INVOICES_API_URL + `/${status}` : '')
    let statusInvoices: FormValues[] = await res.json();
    statusInvoices = statusInvoices.map((invoice: FormValues) => (
      {
        ...invoice,
        id: invoice._id,
        createdAt: dayjs(invoice.createdAt).format('DD MMM YYYY'),
        paymentDue: dayjs(invoice.paymentDue).format('DD MMM YYYY')
      }
    ))
    setInvoices(!status ? invoices : statusInvoices)
  }

  useEffect(() => {
    getInvoices()
  }, [status])

  return (
    <>
      <Meta title="Home" keywords="Invoicing, invoice app, frontendmentor, funmilola o." />
      <Main invoices={invoicesList} />
      {formState && <NewInvoice />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.INVOICES_API_URL ? process.env.INVOICES_API_URL + '/' : '');
  let invoices: FormValues[] = await res.json();
  invoices = invoices.map((invoice: FormValues) => (
    {
      ...invoice,
      id: invoice._id,
      createdAt: dayjs(invoice.createdAt).format('DD MMM YYYY'),
      paymentDue: dayjs(invoice.paymentDue).format('DD MMM YYYY')
    }
  ))

  return {
    props: {
      invoices
    }
  }
}

export default Home
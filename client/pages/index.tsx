import { FC } from 'react';
import { GetStaticProps } from 'next';
import Meta from '../components/Layout/Meta';
import Main from '../components/Home/Main';
import NewInvoice from '../components/Form/NewInvoice';
import { useFormState } from '../state/form.state';
import dayjs from 'dayjs';

const Home: FC<Invoices> = ({ invoices }) => {
  const formState = useFormState().get()
  return (
    <>
      <Meta title="Home" keywords="Invoicing, invoice app, frontendmentor, funmilola o." />
      <Main invoices={invoices} />
      {formState && <NewInvoice />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/data.json');
  let invoices: FormValues[] = await res.json();
  invoices = invoices.map((invoice: FormValues) => (
    {
      ...invoice,
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
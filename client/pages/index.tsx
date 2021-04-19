import { GetStaticProps } from 'next';
import Meta from '../components/Layout/Meta';
import Main from '../components/Home/Main';
import NewInvoice from '../components/Form/NewInvoice';

interface Invoice {
  [key: string]: any
}

const Home = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <>
      <Meta title="Home" keywords="Invoicing, invoice app, frontendmentor, funmilola o." />
      <Main invoices={invoices} />
      <NewInvoice />
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/data.json');
  const invoices: Invoice[] = await res.json();

  return {
    props: {
      invoices
    }
  }
}

export default Home
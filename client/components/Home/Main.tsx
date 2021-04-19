import Header from './Header';
import InvoiceList from './InvoiceList';
import NoInvoices from './NoInvoices';

const Main = ({ invoices }) => {
    const numInvoices = 7;
    return (
        <>
            <Header />
            {numInvoices ? <InvoiceList invoices={invoices} /> : <NoInvoices />}
        </>
    )
}

export default Main

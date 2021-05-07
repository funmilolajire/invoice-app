import { FC } from 'react';
import Header from './Header';
import InvoiceList from './InvoiceList';
import NoInvoices from './NoInvoices';

const Main: FC<Invoices> = ({ invoices }) => {
    const numInvoices = invoices.length;
    return (
        <>
            <Header numInvoices={numInvoices} />
            {numInvoices ? <InvoiceList invoices={invoices} /> : <NoInvoices />}
        </>
    )
}

export default Main

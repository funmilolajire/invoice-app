import Meta from '../../../components/Layout/Meta';
import Main from '../../../components/Invoice/Main';
import EditInvoice from '../../../components/Form/EditInvoice';
import DeletePopup from '../../../components/Invoice/DeletePopup';
import { useRouter } from 'next/router';

const Invoice = () => {
    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <Meta title={`Invoice ${id}`} keywords={`invoice, invoice ${id}, invoice app, frontendmentor, funmilola o`} />
            <Main />
            <EditInvoice />
            <DeletePopup />
        </>
    )
}

export default Invoice

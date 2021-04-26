import { FC } from 'react';
import Header from './Header';
import Invoice from './Invoice';

const Main: FC<Invoice> = ({ invoice }) => {
    return (
        <>
            <Header status={invoice.status} />
            <Invoice invoice={invoice} />
        </>
    )
}

export default Main

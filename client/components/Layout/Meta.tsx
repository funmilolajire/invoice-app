import { FC } from 'react';
import Head from 'next/head';

interface Props {
    title: string;
    keywords: string
}

const Meta: FC<Props> = ({ title, keywords }) => {
    return (
        <Head>
            <title>Invoice App | {title}</title>
            <meta name="keywords" content={keywords} />
        </Head>
    )
}

export default Meta

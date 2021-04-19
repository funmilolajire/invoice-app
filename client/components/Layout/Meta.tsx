import Head from 'next/head';

const Meta = ({ title, keywords }) => {
    return (
        <Head>
            <title>Invoice App | {title}</title>
            <meta name="keywords" content={keywords} />
        </Head>
    )
}

export default Meta

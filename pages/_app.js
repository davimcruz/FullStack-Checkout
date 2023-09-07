import '../styles/globals.css';
import Head from 'next/head';

function Checkout({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="author" content="Checkout" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="Checkout" />
                <link rel="shortcut icon" href="/images/icon.svg" />
                <title>Checkout</title>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default Checkout;

import Document, { Html, Head, Main, NextScript } from 'next/document'

import { initGA, logPageView } from '../utils/analytics';

class MyDocument extends Document {
static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
}

componentDidMount() {
    if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
    }
    logPageView()
}

render() {
    return (
    <Html>
        <Head>
            {/* CSS */}
            {/* <link rel="stylesheet" href="/style/main.css"/> */}
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
}
}

export default MyDocument
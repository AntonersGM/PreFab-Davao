import {HTML, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Roboto:wght@100&display=swap" 
            rel="stylesheet" 
            /> 
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </html>
    )
}
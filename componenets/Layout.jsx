import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({children , title}) => {

    <Head>
        <title>{title}</title>
        <meta name="description" content="Frontend test" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
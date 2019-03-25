import Head from 'next/head';

import Header from './Header';

export default (props) => {

    const title = props.title || 'scott.mebberson.codes';

    return (

        <>
    
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Shade|Libre+Barcode+128|Open+Sans:300,400,700" rel="stylesheet" />
            </Head>
            
    
            <div>
    
                <Header title={ title } />
            
                { props.children }
    
            </div>
    
    
            <style jsx>{ `
    
                h1 {
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
    
            ` }</style>
    
            <style global jsx>{ `
    
                body {
                    font-family: 'Open sans', sans-serif;
                    font-size: 16px;
                    font-weight: 300;
                    margin: 0;
                    padding: 0;
                }
    
                .constrained {
                    margin: 0 auto;
                    width: 80%;
                    max-width: 720px;
                }
    
                .align-center {
                    text-align: center;
                }
    
            ` }</style>
            
        </>
    
    )

};
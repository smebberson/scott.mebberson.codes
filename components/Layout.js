import Head from 'next/head';
import Header from './Header';

export default ({ children, title = 'scott.mebberson.codes', ...props }) => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Shade|Libre+Barcode+128|Open+Sans:300,400,700"
                    rel="stylesheet"
                />
                <script src="https://embed.runkit.com" />
            </Head>

            <div {...props}>
                <Header title={title} />
                {children}
            </div>

            <style jsx>{`
                h1 {
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                div {
                    margin-bottom: 5em;
                }
            `}</style>

            <style global jsx>{`
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

                .icon {
                    width: 1em;
                }

                .icon.good {
                    color: #89c472;
                }

                .icon.bad {
                    color: #fc6c85;
                }

                .code .icon {
                    position: absolute;
                    left: -25px;
                    top: 5px;
                }

                .code.with-runkit .icon {
                    left: -40px;
                }
            `}</style>
        </>
    );
};

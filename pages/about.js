import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

export default () => (
    <Layout>
        <PageTitle emojis="👨‍💻">About</PageTitle>

        <div className="constrained">
            <p>
                This site is a collection of articles, cheat sheets and patterns
                that I use when developing.
            </p>
            <p>They're documented here so I can easily remember them.</p>
            <p>
                The content is mine, but the{' '}
                <a
                    href="https://github.com/smebberson/scott.mebberson.codes"
                    target="_blank"
                >
                    source code for the website itself is open source
                </a>
                .
            </p>
        </div>
    </Layout>
);

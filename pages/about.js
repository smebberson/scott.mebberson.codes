import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

export default () => (
    <Layout>
        <PageTitle emojis="👨‍💻">About</PageTitle>

        <div className="constrained">
            <p>Hey, I'm Scott 👋.</p>
            <p>
                If you want to read more about me, as opposed to this website,
                head over to{' '}
                <a href="https://www.scottmebberson.com" target="_blank">
                    scottmebberson.com
                </a>
                .
            </p>
            <p>So, this site...</p>
            <p>
                It's simple,{' '}
                <a href="mailto:scott+codes@scottmebberson.com">
                    ask me a question
                </a>
                , and if I think I can answer it with any value, I'll respond
                with a blog post. In the absence of questions from readers, I'll
                answer a question of my own.
            </p>
        </div>
    </Layout>
);

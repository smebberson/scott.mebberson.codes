import Link from 'next/link';

import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import PostTeaser from '../components/PostTeaser';
import { borderColor } from '../lib/constants';
import orderPosts from '../lib/order-posts';
import loadPosts from '../lib/load-posts';

const formatPost = (post) => {
    const { date, title } = post;

    return <PostTeaser post={post} key={`${title}.${date}`} />;
};

const Index = ({ posts }) => (
    <Layout>
        <div className="constrained">
            <Columns>
                <Column width="65%">
                    {posts && posts.length && posts.map(formatPost)}
                </Column>

                <Column width="30%">
                    <div className="block">
                        <p>
                            scott.mebberson.codes. Articles on web development.
                            All articles are written by <b>Scott Mebberson</b>,
                            CTO and software architect.
                        </p>
                    </div>

                    <div className="block">
                        <p>
                            I use this blog to answer questions asked of me.{' '}
                            <Link href="/about">
                                <a>Have a question for me?</a>
                            </Link>
                        </p>
                    </div>

                    <style jsx>{`
                        .block {
                            border: 1px solid ${borderColor};
                            margin-bottom: 0.5em;
                            padding: 0.8em;
                        }

                        p {
                            margin: 0;
                        }
                    `}</style>
                </Column>
            </Columns>
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const posts = orderPosts(await loadPosts());

    return { posts };
};

export default Index;

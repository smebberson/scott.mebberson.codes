import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import PostTeaser from '../components/PostTeaser';
import orderPosts from '../lib/order-posts';
import loadPosts from '../lib/load-posts';

const formatPost = (post) => {
    const { date, title } = post;

    return <PostTeaser post={post} key={`${title}.${date}`} />;
};

const Posts = ({ posts = [] }) => (
    <Layout>
        <div className="constrained">
            <Columns>
                <Column width="100%">{posts && posts.map(formatPost)}</Column>
            </Columns>
        </div>
    </Layout>
);

Posts.getInitialProps = async () => {
    const posts = orderPosts(await loadPosts());

    return { posts };
};

export default Posts;

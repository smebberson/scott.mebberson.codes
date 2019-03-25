import withPostProps from '../../lib/with-post-props';
import Post from '../../components/Post';

export default withPostProps(({ post }) => (
    <Post post={ post }>
        <div className="constrained">
            <p>This is my second post.</p>
            <p>You can read more about my second post here :)</p>
        </div>
    </Post>
));
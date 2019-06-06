import loadPosts from './load-posts';
import findPost from './find-post';

export default async ({ pathname }) => {
    const post = findPost({ posts: await loadPosts(), pathname });

    return { post };
};

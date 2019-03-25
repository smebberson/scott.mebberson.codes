import filterPosts from './filter-posts';

export default ({ posts, pathname }) => {

    const [,, slug] = pathname.split('/');
    const [post] = filterPosts(posts, slug);

    return post;

};
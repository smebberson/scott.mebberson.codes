export default (posts, slug) => {

    return posts.filter((post) => post.slug === slug);

};
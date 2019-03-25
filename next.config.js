const exportPathMap = () => {

    const { posts } = require('./posts');

    const paths = {
        '/': { page: '/' },
        '/posts': { page: '/posts' },
        '/about': { page: '/about' },
    };

    posts.map((post) => {

        const page = `/post/${post.slug}`;

        paths[page] = { page };

    });

    return paths;

};

module.exports = {
    exportPathMap,
};
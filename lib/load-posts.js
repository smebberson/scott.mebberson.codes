export default async () => {
    const { posts } = await import('../posts.js');

    return posts;
};

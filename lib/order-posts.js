import filterPosts from './filter-posts';

const replace = (date) => (date.replace(/-/g, ''));

export default (posts) => {

    return posts
        .sort((a, b) => {

            const first = parseInt(replace(a.date), 10);
            const second = parseInt(replace(b.date), 10);

            if (first > second) {
                return -1;
            }

            if (first < second) {
                return 1;
            }

            return 0;

        });

};
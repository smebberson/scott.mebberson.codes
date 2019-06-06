import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

export default ({ children, post: { color, date, title } }) => {
    return (
        <Layout>
            <PageTitle backgroundColor={color} date={date}>
                {title}
            </PageTitle>

            {children}
        </Layout>
    );
};

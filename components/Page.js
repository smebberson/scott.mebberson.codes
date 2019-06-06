import Layout from './Layout';
import PageTitle from './PageTitle';

export default ({ children, color = '#9400D3', title }) => {
    return (
        <Layout>
            <PageTitle backgroundColor={color}>{title}</PageTitle>

            <div className="constrained">{children}</div>
        </Layout>
    );
};

import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import Teaser from '../components/Teaser';

const Patterns = () => (

    <Layout>

        <div className="constrained">

            <Columns>

                <Column width="100%">

                    <Teaser
                        color="#60DAFB"
                        href="/patterns/react"
                        title="React"
                    />

                </Column>

            </Columns>

        </div>
        
    </Layout>

);

export default Patterns;
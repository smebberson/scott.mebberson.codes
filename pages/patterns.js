import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import Teaser from '../components/Teaser';
import { javascript, react } from '../lib/colours';

const Patterns = () => (

    <Layout>

        <div className="constrained">

            <Columns>

                <Column width="100%">

                    <Teaser
                        color={react}
                        href="/patterns/react"
                        title="React"
                    />

                    <Teaser
                        color={javascript}
                        href="/patterns/javascript"
                        title="JavaScript"
                    />

                </Column>

            </Columns>

        </div>
        
    </Layout>

);

export default Patterns;
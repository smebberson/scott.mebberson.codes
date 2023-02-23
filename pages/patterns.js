import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import Teaser from '../components/Teaser';
import { cloudflare, html, javascript, react } from '../lib/colours';

const Patterns = () => (
    <Layout>
        <div className="constrained">
            <Columns>
                <Column width="100%">
                    <Teaser
                        color={cloudflare}
                        href="/patterns/cloudflare"
                        title="Cloudflare"
                    />
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

                    <Teaser color={html} href="/patterns/spa" title="SPA" />
                </Column>
            </Columns>
        </div>
    </Layout>
);

export default Patterns;

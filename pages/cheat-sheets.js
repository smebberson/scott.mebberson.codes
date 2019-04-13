import CheatSheetTeaser from '../components/CheatSheetTeaser';
import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';

const Cheatsheets = () => (

    <Layout>

        <div className="constrained">

            <Columns>

                <Column width="100%">

                    <CheatSheetTeaser
                        title="Docker"
                        href="/cheat-sheet/docker"
                    />

                </Column>

            </Columns>

        </div>
        
    </Layout>

);

export default Cheatsheets;
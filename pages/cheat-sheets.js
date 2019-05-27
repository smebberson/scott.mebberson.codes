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
                        color="#2396ED"
                        href="/cheat-sheet/docker"
                        title="Docker"
                    />

                    <CheatSheetTeaser
                        color="#F05033"
                        href="/cheat-sheet/git"
                        title="Git"
                    />

                    <CheatSheetTeaser
                        color="#15C213"
                        href="/cheat-sheet/jest"
                        title="Jest"
                    />

                </Column>

            </Columns>

        </div>
        
    </Layout>

);

export default Cheatsheets;
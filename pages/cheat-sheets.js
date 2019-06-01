import CheatSheetTeaser from '../components/CheatSheetTeaser';
import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import { docker, git, jest } from '../lib/colours';

const Cheatsheets = () => (

    <Layout>

        <div className="constrained">

            <Columns>

                <Column width="100%">

                    <CheatSheetTeaser
                        color={docker}
                        href="/cheat-sheet/docker"
                        title="Docker"
                    />

                    <CheatSheetTeaser
                        color={git}
                        href="/cheat-sheet/git"
                        title="Git"
                    />

                    <CheatSheetTeaser
                        color={jest}
                        href="/cheat-sheet/jest"
                        title="Jest"
                    />

                </Column>

            </Columns>

        </div>
        
    </Layout>

);

export default Cheatsheets;
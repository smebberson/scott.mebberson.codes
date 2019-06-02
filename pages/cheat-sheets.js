import CheatSheetTeaser from '../components/CheatSheetTeaser';
import Column from '../components/Column';
import Columns from '../components/Columns';
import Layout from '../components/Layout';
import { docker, git, jest, react } from '../lib/colours';

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

                    <CheatSheetTeaser
                        color={react}
                        href="/cheat-sheet/react"
                        title="React"
                    />

                </Column>

            </Columns>

        </div>
        
    </Layout>

);

export default Cheatsheets;
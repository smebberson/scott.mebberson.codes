import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { shell } from '../../lib/colours';

export default () => (
    <CheatSheet color={shell} title="Shell">
        <Cheat
            caption="Use xargs to loop over stdin and run multiple commands in sequence. This example will run docker build for each Dockerfile found in the current directory."
            code="$ ls -l | grep Dockerfile | xargs -I {} docker build . --file {}"
        />
    </CheatSheet>
);

import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { git } from '../../lib/colours';

export default () => (
    <CheatSheet
        color={git}
        title="Git"
    >

        <Cheat
            caption="Create a patch file."
            code="$ git diff > changes.patch"
        />

        <Cheat
            caption="Apply a patch file."
            code="$ git apply changes.patch"
        />
        
        <Cheat
            caption="Delete a git tag on a remote server."
            code="$ git push --delete origin <tag>"
        />
        
    </CheatSheet>
);
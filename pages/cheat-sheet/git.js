import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import Inline from '../../components/Inline';
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
            caption={
                <span>Create a patch file containing multiple commits. The patch will contain changes from all commits after <Inline>{`{commit-hash}`}</Inline> but not including.</span>
            }
            code="$ git diff {commit-hash} > changes.patch"
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
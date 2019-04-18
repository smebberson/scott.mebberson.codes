
import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';

export default () => (
    <CheatSheet
        color="#F05033"
        title="Git"
    >
        
        <Cheat
            caption="Delete a git tag on a remote server."
            code="$ git push --delete origin <tag>"
        />
        
    </CheatSheet>
);
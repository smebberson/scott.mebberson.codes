import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { docker } from '../../lib/colours';

export default () => (
    <CheatSheet color={docker} title="Docker">
        <Cheat
            caption="Remove all dangling images from Docker. Dangling images are left over when you build a new version of an image."
            code="$ docker rmi $(docker images -q --filter dangling=true)"
        />
    </CheatSheet>
);

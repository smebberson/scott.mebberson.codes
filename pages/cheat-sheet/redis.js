import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { redis } from '../../lib/colours';

export default () => (
    <CheatSheet color={redis} title="Redis">
        <Cheat
            caption="Remove all keys matching a pattern."
            code='$ docker run --rm redis redis-cli -h host --scan --pattern "pattern*" | xargs docker run --rm redis redis-cli -h host del'
        />
    </CheatSheet>
);

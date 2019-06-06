import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { mongodb } from '../../lib/colours';

export default () => (
    <CheatSheet color={mongodb} title="MongoDB">
        <Cheat
            caption="Remove records from a collection."
            code="db.collection.remove({query}, {options})"
        />
    </CheatSheet>
);

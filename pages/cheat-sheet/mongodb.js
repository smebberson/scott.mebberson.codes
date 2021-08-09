import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { mongodb } from '../../lib/colours';

export default () => (
    <CheatSheet color={mongodb} title="MongoDB Shell">
        <Cheat
            caption="Remove records from a collection."
            code="db.collection.remove({query}, {options})"
        />
        <Cheat
            caption="Count distinct field values."
            code="var collection = 'collection', field = 'field'; db[collection].distinct(field).forEach((val) => { print(`${field}, ${val}: ${db[collection].count({ [field]: val })}`) });"
        />
    </CheatSheet>
);

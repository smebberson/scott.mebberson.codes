import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { network } from '../../lib/colours';

export default () => (
    <CheatSheet color={network} title="Network">
        <Cheat
            caption="A layer 4 (TCP) health check."
            code="$ nc -vz 1.1.1.1 443"
        />
        <Cheat
            caption="SSL check with SNI."
            code="$ openssl s_client -showcerts -connect ${IP}:443 -servername ${HOST}"
        />
    </CheatSheet>
);

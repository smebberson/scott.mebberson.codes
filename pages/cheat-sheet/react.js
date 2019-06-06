import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import Inline from '../../components/Inline';
import { react } from '../../lib/colours';

export default () => (
    <CheatSheet color={react} title="React">
        <Cheat
            caption={
                <>
                    <span>Using </span>
                    <Inline>// eslint-disable-next-line rule</Inline>
                    <span> with react.</span>
                </>
            }
            code={`
{ // eslint-disable-next-line operator-linebreak
} { result &&
    <p>{result}</p>
}
            `}
            language="jsx"
        />
    </CheatSheet>
);

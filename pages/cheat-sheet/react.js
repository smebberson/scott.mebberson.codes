import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import Inline from '../../components/Inline';
import { react } from '../../lib/colours';
import Heading from '../../components/Heading';

export default () => (
    <CheatSheet color={react} title="React">
        <Heading>Conditional rendering</Heading>

        <Cheat
            caption="Conditional rendering when truthy."
            code={`
{ caption &&
    <p>{caption}</p>
}
            `}
            language="jsx"
        />

        <Cheat
            caption="Conditional rendering when falsy."
            code={`
{ caption ||
    <p>Default caption.</p>
}
            `}
            language="jsx"
        />

        <Cheat
            caption="Conditional rendering."
            code={`
{ caption && <p>{caption}</p> ||
    <p>Default caption.</p>
}
            `}
            language="jsx"
        />

        <Heading>JSX</Heading>

        <Cheat
            caption={<span>Optionally pass props to components.</span>}
            code={`
export default () => {
    const [fixToTop, setFixToTop] = useState(false);
    return <Nav { ...(fixToTop && { style: { top: '0px' } }) } />
}
            `}
            language="jsx"
        />
    </CheatSheet>
);

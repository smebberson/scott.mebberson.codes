import Heading from '../../components/Heading';
import Inline from '../../components/Inline';
import Page from '../../components/Page';
import Pattern from '../../components/Pattern';
import { react } from '../../lib/colours';

export default () => (
    <Page color={react} title="React">
        <Heading>Conditional rendering</Heading>

        <Pattern
            caption="Conditional rendering when truthy."
            code={`
{ caption &&
    <p>{caption}</p>
}
            `}
            language="jsx"
        />

        <Pattern
            caption="Conditional rendering when falsy."
            code={`
{ caption ||
    <p>Default caption.</p>
}
            `}
            language="jsx"
        />

        <Heading>JSX</Heading>

        <Pattern
            caption={
                <span>
                    Because you can't use JSX within a string, wrap the strings
                    in <Inline>span</Inline> components.
                </span>
            }
            code={`
{<><span>Surround any strings using the</span><Inline>span</Inline><span> component.</span></>}
            `}
            language="jsx"
        />
    </Page>
);

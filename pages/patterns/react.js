import Heading from '../../components/Heading';
import Page from '../../components/Page';
import Pattern from '../../components/Pattern';
import { react } from '../../lib/colours';

export default () => (
    <Page
        color={react}
        title="React"
    >
        
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
        
    </Page>
);
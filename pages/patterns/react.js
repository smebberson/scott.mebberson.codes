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

        <Pattern
            caption="Conditional rendering."
            code={`
{ caption && <p>{caption}</p> ||
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

        <Pattern
            caption={<span>Optionally pass props to components.</span>}
            code={`
export default () => {
    const [fixToTop, setFixToTop] = useState(false);
    return <Nav { ...(fixToTop && { style: { top: '0px' } }) } />
}
            `}
            language="jsx"
        />

        <Heading>Dynamic tag names</Heading>

        <Pattern
            code={`
import { Constrained, Expanded } from './components';

const Wrapper = ({ children, useExpandedView, ...props }) => {
    const components = {
        true: Expanded,
        false: Constrained,
    };

    const Tag = components[useExpandedView];

    return <Tag {...props}>{children}</Tag>;
};

export default () => {
    const [useExpandedView, setUseExpandedView] = useState(false);

    return (
        <div>
            <button
                onClick={() => {
                    setUseExpandedView(!useExpandedView);
                }}
            >
                {useExpandedView ? 'Shrink' : 'Expand'}
            </button>
            <Wrapper useExpandedView={useExpandedView}>
                <p>Content to wrap.</p>
            </Wrapper>
        </div>
    );
};

            `}
            caption={
                <span>
                    Wrap children with a particular parent, based on a
                    condition.
                </span>
            }
            language="jsx"
        />
    </Page>
);

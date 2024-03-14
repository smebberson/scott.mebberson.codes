import Heading from '../../components/Heading';
import Inline from '../../components/Inline';
import Page from '../../components/Page';
import Pattern from '../../components/Pattern';
import { react } from '../../lib/colours';

export default () => (
    <Page color={react} title="React">
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

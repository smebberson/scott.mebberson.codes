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

        <Heading>Dates</Heading>

        <p>
            Rendering dates in React is not always straight forward, especially
            when you throw SSR into the mix. As a default rule, keep dates in
            UTC and then render them on the client to ensure they pick up the
            viewers locale and are rendered appropriately.
        </p>

        <p>
            Alter this general rule as required such as opening hours for a
            business; they should always be rendered within context of the
            timezone of which the business operates.
        </p>

        <Pattern
            code={`
export default function IntlDate({ date, locales, options = {} }) {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(() => {
        setFormattedDate(new Intl.DateTimeFormat(locales, options).format(date));
    }, [date, locales, options]);

    return <span>{formattedDate}</span>;
}
            `}
            caption={
                <span>
                    Render a UTC date on the client to ensure it picks up the
                    clients time zone and correctly outputs the date.
                </span>
            }
            language="jsx"
        />
    </Page>
);

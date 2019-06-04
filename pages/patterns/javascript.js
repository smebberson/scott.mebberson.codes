import Heading from '../../components/Heading';
import Inline from '../../components/Inline';
import Page from '../../components/Page';
import Pattern from '../../components/Pattern';
import SubHeading from '../../components/SubHeading';
import { javascript } from '../../lib/colours';

export default () => (
    <Page
        color={javascript}
        title="JavaScript"
    >
        
        <Heading>Promises</Heading>

        <SubHeading>Promise executor pattern</SubHeading>

        <p>Use the promise executor pattern to ensure errors are automatically captured and the promise rejected, without requiring additional try/catch blocks.</p>

        <Pattern
            caption="Could be better written with the promise executor pattern to avoid multiple points of error handling."
            code={`
const multiply = (a = 1, b = 1) => {

    if (a === 0 || b === 0) {
        throw new Error(\`You can't multiple by zero.\`);
    }

    return Promise.resolve(a * b);

};

try {

    multiply(10, 0)
        .then((result) => console.log(\`Promise resolved with: $\{result}\`))
        .catch((err) => console.error(\`Promise rejected with: $\{err}\`));

} catch (e) {
    console.error(\`Try/catch caught with $\{e}\`);
}

// Outputs "Try/catch caught with Error: You can't multiple by zero."
            `}
            language="javascript"
            rating="bad"
            runkit
        />

        <p>Consider refactoring functions that use <Inline>Promise.resolve()</Inline> (with or without a try/catch block).</p>

        <Pattern
            caption="The error is automatically captured and the promise rejected, producing a single point for error handling and improving code readability."
            code={`
const multiply = (a = 1, b = 1) => new Promise((resolve) => {

    if (a === 0 || b === 0) {
        throw new Error(\`You can't multiple by zero.\`);
    }

    return resolve(a * b);

});

multiply(10, 0)
    .then((result) => console.log(\`Promise resolved with: $\{result}\`))
    .catch((err) => console.error(\`Promise rejected with: $\{err}\`));

// Outputs "Promise rejected with: Error: You can't multiple by zero."
            `}
            language="javascript"
            rating="good"
            runkit
        />
        
    </Page>
);
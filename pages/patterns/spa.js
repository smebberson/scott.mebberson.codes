import SubHeading from '../../components/SubHeading';
import Heading from '../../components/Heading';
import Inline from '../../components/Inline';
import Page from '../../components/Page';
import { html } from '../../lib/colours';

export default () => (
    <Page color={html} title="SPA">
        <Heading>JWT Authentication</Heading>

        <p>
            The basic premise of this JWT authentication pattern is that the
            front-end authenticates via a GraphQL API with a valid JWT on each
            request.
        </p>

        <p>Attributes of this pattern include:</p>

        <ul>
            <li>Using a JWT.</li>
            <li>Splitting the JWT across two cookies.</li>
            <li>Ensuring the entire JWT is not available to JavaScript.</li>
            <li>
                Works with and without a browser (with and without cookies).
            </li>
        </ul>

        <SubHeading>Using a JWT.</SubHeading>

        <p>A valid JWT will act as the currency for an authenticated user.</p>
        <p>
            The first step is to authenticate the user and issue a valid JWT.
            This step is required in both browser and non-browser contexts.
        </p>

        <iframe
            style={{ border: 'none' }}
            width="800"
            height="450"
            src="https://whimsical.com/embed/SbMorpCErV6dxWZH9Jhioq"
        ></iframe>

        <SubHeading>Splitting the cookie.</SubHeading>

        <p>
            Now that the client has a valid JWT, it will need to be sent with
            each request to the GraphQL API.
        </p>

        <p>
            Storing JWTs in a SPA is notoriously tricky. Most of the options
            present a security risk as the entire JWT ends up being available to
            JavaScript. As such, retrieval of the JWT might be possible with
            common exploits such as cross-site scripting.
        </p>
        <p>
            To avoid these scenarios, we'll split the JWT content (
            <Inline>
                {'{'}header{'}'}.{'{'}payload{'}'}.{'{'}
                signature{'}'}
            </Inline>
            ) across two cookies.
        </p>

        <p>
            The first cookie will contain the{' '}
            <Inline>
                {'{'}header{'}'}.{'{'}payload{'}'}
            </Inline>{' '}
            content from the JWT with the following attributes:
        </p>

        <ul>
            <li>Expiry: 30 minutes</li>
            <li>SameSite: Lax</li>
            <li>Secure: yes</li>
        </ul>

        <p>
            The second cookie will contain the{' '}
            <Inline>
                {'{'}signature{'}'}
            </Inline>{' '}
            content from the JWT with the following attributes:
        </p>
        <ul>
            <li>Expiry: session</li>
            <li>HTTPOnly: yes</li>
            <li>SameSite: Lax</li>
            <li>Secure: yes</li>
        </ul>

        <p>
            Splitting the JWT across two cookies provides the following
            benefits:
        </p>
        <ul>
            <li>The entire JWT never exists in JavaScript.</li>
            <li>
                JavaScript can still extract user information from a cookie
                containing the <Inline>payload</Inline> portion of the JWT.
            </li>
            <li>
                Each request made in a browser context will automatically
                include all authentication content.
            </li>
            <li>
                The <Inline>signature</Inline> cookie is{' '}
                <Inline>HTTPOnly</Inline> so it is not available to JavaScript
                and helps to protect against XSS.
            </li>
            <li>
                Using <Inline>SameSite</Inline> <Inline>Lax</Inline> cookies
                will provide some protection against CSRF.
            </li>
            <li>
                Using <Inline>Secure</Inline> cookies will help to mitigate
                man-in-the-middle attacks.
            </li>
        </ul>

        <SubHeading>Optionally, reconstructing the JWT</SubHeading>
        <p>
            Each request to the GraphQL API will need to be authenticated with a
            valid JWT.
        </p>
        <p>
            Browsers will supply the JWT via two cookies, and API clients will
            provide the JWT via an <Inline>Authorization</Inline> header.
        </p>
        <p>
            The GraphQL API will need to respond to all requests, regardless if
            they're coming from a browser or not.
        </p>
        <p>
            In the context of an API client, an <Inline>Authorization</Inline>{' '}
            header containing a JWT will be supplied.
        </p>
        <p>
            In the context of the browser, the server will be responsible for
            creating an <Inline>Authorization</Inline> header by reconstructing
            a JWT from the content within the two cookies. Constructing the{' '}
            <Inline>Authorization</Inline> header will ensure that all future
            processing of the request is identical for browser-based and
            non-browser-based applications alike.
        </p>

        <p>
            Each request should be inspected for cookies and if found, their
            content to be used in reconstructing the JWT and creating an
            <Inline>Authorization</Inline> header.
        </p>

        <iframe
            style={{ border: 'none' }}
            width="800"
            height="450"
            src="https://whimsical.com/embed/NEi2VS4ijQaV6UnnLucAbE"
        ></iframe>

        <SubHeading>Guarding against CSRF</SubHeading>
        <p>
            While using cookies to store the JWT (rather than storing it in
            local storage or session storage) protects applications from some
            type of attacks, it makes them vulnerable to others, including CSRF.
        </p>

        <p>
            Using the{' '}
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"
                target="_blank"
            >
                Same Origin Policy (SOP)
            </a>
            , we can mitigate CSRF by requiring that a custom header exists if
            supplying the JWT via cookies. This is described as a{' '}
            <a
                href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#use-of-custom-request-headers"
                target="_blank"
            >
                CSRF prevention technique on OWASP
            </a>
            .
        </p>

        <p>
            Processing of the cookies should only take place if a custom header
            with the correct information is supplied.
        </p>

        <iframe
            style={{ border: 'none' }}
            width="800"
            height="450"
            src="https://whimsical.com/embed/CV9FRF4i53hnMqKUXJjrJm"
        ></iframe>

        <SubHeading>Validating the JWT</SubHeading>
        <p>
            The GraphQL API should require a valid JWT in the{' '}
            <Inline>Authorization</Inline> header.
        </p>

        <p>When validating the JWT, ensuring the following are checked:</p>
        <ul>
            <li>Verify the issuer.</li>
            <li>Verify the audience.</li>
            <li>Ensure the token is not expired.</li>
        </ul>

        <SubHeading>Continue processing</SubHeading>
        <p>
            At this point, if the JWT validated and the user roles have access
            to the GraphQL API queries being requested, continue processing the
            request using your GraphQL framework.
        </p>
    </Page>
);

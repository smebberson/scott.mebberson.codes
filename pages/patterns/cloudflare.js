import SubHeading from '../../components/SubHeading';
import Heading from '../../components/Heading';
import Inline from '../../components/Inline';
import Page from '../../components/Page';
import Pattern from '../../components/Pattern';
import { cloudflare } from '../../lib/colours';

export default () => (
    <Page color={cloudflare} title="Cloudflare">
        <Heading>Maintenance pages</Heading>

        <p>
            Using Cloudflare Workers, you can easily setup a maintenance page.
            When you're ready to perform some maintenance, simply add a route to
            the worker that will capture the domains you want to direct to the
            maintenance page.
        </p>

        <p>
            The following can be used as a worker template and offers the
            following features:
        </p>
        <ul>
            <li>
                Requests from developers will still go through to the origin.
            </li>
            <li>
                Specific requests (for things like logos) can still be allowed.
            </li>
        </ul>

        <Pattern
            caption="Worker template that will show a maintenance page to visitors."
            code={`
const html = (ip, url) => \`
  <!doctype html>
  <html>
    <head>
      <title>Maintenance</title>
      <style>
      html, body {
        font-family: sans-serif;
      }
      body {
        margin-top: 30px;
        text-align: center;
      }
      </style>
    </head>
    <body>
      <!-- ip: \${ip}; url: \${url}; -->
      <img src="https://domain.com/img/logo.png" width="200px">
      <h1>We'll be back soon</h1>
      <p>We are currently performing some maintenance.</p>
    </body>
  </html>
\`;

export default {
  async fetch(request, env) {

    // Allow requests for developers.
    if (request.headers.get('cf-connecting-ip') === '<your-ip>') {
      return fetch(request);
    }

    // Allow everyone to see the logo.
    if (request.url.includes('logo.png')) {
      return fetch(request);
    }

    // Everyone else gets the maintenance page.
    const headers = new Headers();
    headers.set('Content-type', 'text/html');
    headers.append('Pragma', 'no-cache');

    return new Response(html(request.headers.get('cf-connecting-ip'), request.url), {
      status: 503,
      headers
    });
  }
}
            `}
            language="javascript"
        />
    </Page>
);

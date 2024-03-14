import Heading from '../../components/Heading';
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
                Requests from allowed IP list will go through to the origin.
            </li>
            <li>Uses data URIs for the favicon and logo to reduce requests.</li>
        </ul>

        <Pattern
            caption="Worker template that will show a maintenance page to visitors."
            code={`
const html = (ip, url) => \`
  <!doctype html>
  <html>
    <head>
      <title>Maintenance</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width; initial-scale=1.0">
      <link rel="icon" href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREREREREREQAAAAAAAAARAAAAAAAAABEAAAAAAAAAEQAAAAAAAAARAAAAAAAAABEAAAEREAAAEQAAAREQAAARAAABERAAABEAAAEREAAAEQAAAAAAAAARAAAAAAAAABEAAAAAAAAAEQAAAAAAAAARAAAAAAAAABEREREREREREAAAAAf/4AAH/+AAB//gAAf/4AAH/+AAB8PgAAfD4AAHw+AAB8PgAAf/4AAH/+AAB//gAAf/4AAH/+AAAAAAAA">
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
      <img alt="logo" width="100" height="100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAjFJREFUeF7tnEFqA1EUwyb3P3TLdDcQamKw+ARl7WdnpLRZta/run4uX8cQeCnkGBd/b0QhZ/lQyGE+3gq5f2p8cQQe3+HvfmUphJNxLymE5R3XFBIRsQGFsLzjmkIiIjagEJZ3XFNIRMQGFMLyjmsKiYjYgEJY3nFNIRERG1AIyzuuKSQiYgMKYXnHNYVERGxAISzvuKaQiIgNKITlHdcUEhGxAYWwvOOaQiIiNqAQlndcU0hExAYUwvKOawqJiNiAQljecU0hEREbUAjLO64pJCJiAwphecc1hUREbEAhLO+4ppCIiA0ohOUd1xQSEbEBhbC845pCIiI2oBCWd1xTSETEBhTC8o5rXyPk8SD/PPbpf3evkPiZZQMKYXnHNYVERGxAISzvuKaQiIgNKITlHdcUEhGxAYWwvOOaQiIiNvA1QlhsuzWF7NhWzQqpsO2OFLJjWzUrpMK2O1LIjm3VrJAK2+5IITu2VbNCKmy7I4Xs2FbNCqmw7Y4UsmNbNSukwrY7UsiObdWskArb7kghO7ZVs0IqbLsjhezYVs0KqbDtjhSyY1s1K6TCtjtSyI5t1ayQCtvuSCE7tlWzQipsuyOF7NhWzQqpsO2OFLJjWzUrpMK2O1LIjm3VrJAK2+5IITu2VbNCKmy7I4Xs2FbNCqmw7Y4UsmNbNSukwrY7UsiObdWskArb7kghO7ZVs0IqbLujKGQ3bXMkcP8/woeheGFgSkAhU7yflyvkc2bTi19RucoBR8iq5AAAAABJRU5ErkJggg=="/>
      <h1>We'll be back soon</h1>
      <p>We are currently performing some maintenance.</p>
    </body>
  </html>
\`;

const allowedIps = ['<your-ip>'];

export default {
  async fetch(request, env) {

    // Allow requests for developers.
    if (allowedIps.includes(request.headers.get('cf-connecting-ip'))) {
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

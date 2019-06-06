import Link from 'next/link';
import { borderColor } from '../lib/constants';

export default ({ color = '#9400D3', href, title }) => {
    return (
        <article>
            <h1>
                <Link href={href}>
                    <a>{title}</a>
                </Link>
            </h1>

            <style jsx>{`
                h1 a {
                    color: ${color};
                }
            `}</style>

            <style jsx>{`
                article {
                    border-bottom: 1px solid ${borderColor};
                    margin-bottom: 3em;
                    padding-bottom: 1em;
                }

                h1 {
                    font-family: 'Bungee', sans-serif;
                    font-size: 2em;
                    margin: 0.1em 0px 0.3em 0px;
                    text-align: left;
                }

                h1 a {
                    text-decoration: none;
                }
            `}</style>
        </article>
    );
};

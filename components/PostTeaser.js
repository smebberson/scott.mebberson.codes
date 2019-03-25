import Link from 'next/link';

import { borderColor } from '../lib/constants';

export default ({ post }) => {

    const { color, date, slug, teaser, title } = post;
    const parts = []
        .concat(
            ...title
            .split(' ')
            .map((part, key) => ([part, React.createElement('br', { key })]))
        );

    return (
        <article>

            <time dateTime={ date }><span>{ date }</span></time>

            <h1>

                <Link href={ `/post/${slug}` }>
                    <a>{ parts }</a>
                </Link>
                
            </h1>

            <p>{ teaser }</p>

            <style jsx>{ `

                h1 a {
                    color: ${color};
                }

            ` }</style>

            <style jsx>{ `

                article {
                    border-bottom: 1px solid ${borderColor};
                    margin-bottom: 3em;
                    padding-bottom: 1em;
                }

                h1 {
                    font-family: 'Bungee', sans-serif;
                    font-size: 2em;
                    margin: .1em 0px .3em 0px;
                    text-align: left;
                }

                h1 a {
                    text-decoration: none;
                }

                time {
                    color: #999;
                    font-weight: 600;
                    font-size: .8em;
                    position: relative;
                    text-transform: uppercase;
                }

                span::before {
                    content: '..';
                    color: ${color};
                    font-weight: 400;
                    position: absolute;
                    bottom: -6px;
                }

            ` }</style>

        </article>
        
    );

};
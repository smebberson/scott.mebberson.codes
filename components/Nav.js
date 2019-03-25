import Link from 'next/link';

import { borderColor } from '../lib/constants';

export default () => (

    <>

        <nav>

            <ul>

                <li>

                    <Link href="/">
                        <a>Home</a>
                    </Link>

                </li>

                <li>

                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>

                </li>

                <li>

                    <Link href="/about">
                        <a>About</a>
                    </Link>

                </li>

            </ul>

        </nav>

        <style jsx>{ `

            ul {
                margin: 30px 0px;
                padding: 0px;
            }

            li {
                display: inline;
                font-weight: 200;
                list-style-type: none;
                margin: 0px 5px;
                text-transform: uppercase;
            }

            a {
                border: 1px solid ${borderColor};
                border-radius: 20px;
                color: #333;
                font-size: .9rem;
                letter-spacing: 2px;
                padding: 10px 15px;
                text-decoration: none;
            }

        ` }</style>

    </>

);
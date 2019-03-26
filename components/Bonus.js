import { borderColor } from '../lib/constants';

export default ({ children, title }) => (
    <div className="bonus">
        { title &&
            <h1>{ title }</h1>
        }
        <p>{ children }</p>
        <style jsx>{ `

            .bonus {
                background-color: #FAFAFA;
                padding: .5em;
            }

            .bonus:last-child {
                margin-bottom: 0px;
            }

            h1 {
                margin: .6em 2em .4em 1.2em;
                font-weight: 100;
                font-size: 1.2em;
            }

            p {
                font-size: .9em;
                margin: .6em 2em .8em 2em;
            }

        ` }</style>
    </div>
);
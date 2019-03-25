import Nav from './Nav';

export default ({ title }) => (

        <header className="constrained align-center">

            { title &&
                <h1>{ title }</h1>
            }

            <Nav />

            <style jsx>{ `

                header {
                    margin-top: 3em;
                    margin-bottom: 4em;
                }

                h1 {
                    text-transform: uppercase;
                    font-weight: 600;
                }

            `}</style>

        </header>

);
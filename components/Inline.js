export default ({ children, ...props }) => (

    <code { ...props }>

        { children }

        <style jsx>{ `

            code {
                color: deepPink;
                font-family: Menlo, Monaco, monospace, serif;
                font-size: .9em;
            }

            code::before {
                content: '\`';
            }

            code::after {
                content: '\`';
            }

        ` }</style>

    </code>

);
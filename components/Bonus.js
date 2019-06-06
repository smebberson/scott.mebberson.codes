export default ({ children, title }) => (
    <div className="bonus">
        {title && <h1>{title}</h1>}
        <p>{children}</p>
        <style jsx>{`
            .bonus {
                background-color: #fafafa;
                padding: 0.5em;
            }

            .bonus:last-child {
                margin-bottom: 0px;
            }

            h1 {
                margin: 0.6em 2em 0.4em 1.2em;
                font-weight: 100;
                font-size: 1.2em;
            }

            p {
                font-size: 0.9em;
                margin: 0.6em 2em 0.8em 2em;
            }
        `}</style>
    </div>
);

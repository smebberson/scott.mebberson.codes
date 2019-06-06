export default ({ children }) => (
    <>
        <h2 className="heading">{children}</h2>
        <style jsx>{`
            .heading {
                text-transform: uppercase;
                font-weight: 600;
            }
        `}</style>
    </>
);

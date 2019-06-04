import Nav from './Nav';

export default ({ children }) => (

    <>
        <h2 className="sub-heading">{children}</h2>
        <style jsx>{`
            .sub-heading {
                text-transform: uppercase;
                font-size: 1.2em;
                font-weight: 600;
            }
        `}</style>
    </>

);
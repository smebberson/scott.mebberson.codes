export default ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        `}</style>
    </div>
);

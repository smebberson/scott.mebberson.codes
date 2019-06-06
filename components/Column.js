export default ({ children, width = 'auto', ...props }) => (
    <div {...props}>
        {children}
        <style jsx>{`
            div {
                width: ${width};
            }

            @media (max-width: 720px) {
                div {
                    width: 100%;
                }
            }
        `}</style>
    </div>
);

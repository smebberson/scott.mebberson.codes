export default ({ children, margin = '0 auto', width = 'auto', ...props }) => (
    <div {...props}>
        {children}
        <style jsx>{`
            div {
                width: ${width};
                margin: ${margin};
            }

            @media (max-width: 720px) {
                div {
                    width: 100%;
                }
            }
        `}</style>
    </div>
);

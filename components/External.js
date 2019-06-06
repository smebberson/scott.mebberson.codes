export default ({ children, href, target = '_blank', ...props }) => (
    <a href={href} target={target} {...props}>
        {children}
    </a>
);

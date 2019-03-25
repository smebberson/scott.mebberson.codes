import postProps from './post-props';

export default (fn) => {

    fn.getInitialProps = postProps;

    return fn;

};
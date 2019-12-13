import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import RunKit from 'react-runkit';

import { bash, javascript, jsx } from '../lib/languages';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

export default ({
    caption,
    code,
    language = 'shell',
    rating = '',
    runkit = false
}) => {
    return (
        <div className={`code ${runkit ? 'with-runkit' : ''}`}>
            {runkit && <RunKit source={code.trim()} />}
            {runkit || (
                <SyntaxHighlighter language={language} style={style}>
                    {code.trim()}
                </SyntaxHighlighter>
            )}
            {caption && <p>{caption}</p>}
            {rating === 'good' && (
                <FontAwesomeIcon className="icon good" icon={faThumbsUp} />
            )}
            {rating === 'bad' && (
                <FontAwesomeIcon className="icon bad" icon={faThumbsDown} />
            )}
            <style jsx>{`
                .code {
                    position: relative;
                }

                p {
                    margin-bottom: 2.6em;
                }
            `}</style>
        </div>
    );
};

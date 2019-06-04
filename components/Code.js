import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/languages/prism/bash';
import jsx from 'react-syntax-highlighter/dist/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/languages/prism/javascript';
import style from 'react-syntax-highlighter/dist/styles/prism/atom-dark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import RunKit from 'react-runkit';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

export default ({ caption, code, language = 'shell', rating = '', runkit = false }) => {

    return (
        <div className={`code ${runkit ? 'with-runkit' : ''}`}>
            { runkit &&
                <RunKit source={code.trim()} />
            }
            { runkit ||
                <SyntaxHighlighter language={language} style={style}>{code.trim()}</SyntaxHighlighter>
            }
            { caption &&
                <p>{caption}</p>
            }
            { rating === 'good' &&
                <FontAwesomeIcon className="icon good" icon={faThumbsUp}></FontAwesomeIcon>
            }
            { rating === 'bad' &&
                <FontAwesomeIcon className="icon bad" icon={faThumbsDown}></FontAwesomeIcon>
            }
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
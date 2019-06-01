import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/languages/prism/bash';
import jsx from 'react-syntax-highlighter/dist/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/languages/prism/javascript';
import style from 'react-syntax-highlighter/dist/styles/prism/atom-dark';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

export default ({ caption, code, language = 'shell' }) => {

    return (
        <div>
            <SyntaxHighlighter language={language} style={style}>{code.trim()}</SyntaxHighlighter>
            { caption &&
                <p>{caption}</p>
            }
            <style jsx>{`
                p {
                    margin-bottom: 2.6em;
                }
            `}</style>
        </div>
    );

};
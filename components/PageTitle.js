import React from 'react';

export default ({ backgroundColor = 'aquamarine', children = '', date, emojis }) => {

    if (typeof children !== 'string') {
        throw Error('PageTitle only accepts string as children.');
    }

    const parts = []
        .concat(
            ...children
            .split(' ')
            .map((part, key) => [part, React.createElement('br', { key })])
        );
    
    return (

        <header>

            <div className="constrained">

                <time>{ date }</time>

                <p>{ parts }</p>

                <h1>{ parts }</h1>

                { emojis &&
                    <span>{ emojis }</span>
                }

            </div>

            <style jsx>{ `

                header {
                    background-color: ${backgroundColor};
                }

            ` }</style>

            <style jsx>{ `
    
                header {
                    margin-bottom: 3em;
                    padding: 6em 0px 3em 0px;
                    position: relative;
                }

                time {
                    font-size: .8em;
                    font-weight: 600;
                    position: absolute;
                    top: 4.2em;
                }

                h1 {
                    font-family: 'Bungee Shade', sans-serif;
                    font-size: 5em;
                    margin: 0px;
                    text-align: left;
                }

                p {
                    font-family: 'Libre Barcode 128', sans-serif;
                    font-size: 2em;
                    line-height: 0px;
                    margin: 0px;
                }

                span {
                    display: block;
                    margin-top: .5em;
                }
    
            ` }</style>

        </header>
    
    );

};
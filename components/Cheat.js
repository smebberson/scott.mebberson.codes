export default ({ caption, code }) => {

    return (
        <div>
            <code>{ code }</code>
            <p>{ caption }</p>
            <style jsx>{ `

                code {
                    background: #F8F8FC;
                    display: block;
                    padding: 10px;
                    width: 100%;
                }

            ` }</style>
        </div>
    );

};
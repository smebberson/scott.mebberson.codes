'use strict';

const fs = require('fs');
const path = require('path');

const [, , remote] = process.argv;
const { GH_TOKEN, HOME } = process.env;
const file = path.join(HOME, '.git-credentials');

const remoteWithCredentials = remote.replace(
    'https://',
    `https://smebberson:${GH_TOKEN}@`
);

console.log('remote is ', remoteWithCredentials);

fs.writeFile(file, remoteWithCredentials, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

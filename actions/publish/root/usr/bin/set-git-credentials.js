#!/usr/bin/with-contenv /usr/bin/node

'use strict';

const fs = require('fs');
const path = require('path');

const [,, remote] = process.argv;
const { GITHUB_TOKEN, HOME } = process.env;
const file = path.join(HOME, '.git-credentials');

const remoteWithCredentials = remote.replace('https://', `https://smebberson:${GITHUB_TOKEN}@`);

fs.writeFile(file, remoteWithCredentials, (err) => {

    if (err) {
        console.error(err);
        process.exit(1);
    }

});
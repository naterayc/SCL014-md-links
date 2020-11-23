#!/usr/bin/env node

const mdLinks = require('./md-links.js');
const verifyOptions = require('./verifyOptions');
const pathname = process.argv[2];

mdLinks(pathname)
.then(data => verifyOptions(data, pathname))
.catch(error => console.log(error))
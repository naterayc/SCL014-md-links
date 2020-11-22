
const mdLinks = require('./md-links.js');
const pathname = process.argv[2];
const verifyOptions = require('./verifyOptions');

mdLinks(pathname)
.then(data => verifyOptions(data, pathname))
.catch(error => console.log(error))
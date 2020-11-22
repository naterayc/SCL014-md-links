
const path = require('path');
const verifyRoute = require('./verifyRoute');
const verifyDir = require('./verifyDir');
const readDir = require('./readDir');
const readFile = require('./readFile');
const isMd = require('./isMd');
const findMd = require('./findMd');

module.exports = (pathname) => new Promise((resolve) =>  {

  let route = path.resolve(pathname);
  let arrLinks;

  verifyRoute(pathname)
    .then(verifyDir)
    .then(isDirectory => {
      if (isDirectory) {
        readDir(route)
          .then(data => findMd(data, route))
          .then(par => readFile(par))
          .then(data => {
            arrLinks = data;
            resolve(arrLinks)
          })
          .catch(error => console.log(error));
      } else {
        isMd(route)
          .then(par => readFile(par))
          .then(data => {
            arrLinks = data;
            resolve(arrLinks)
          })
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error));
}
)


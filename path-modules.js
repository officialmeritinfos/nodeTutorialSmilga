const path = require('path')
//get file separator
console.log(path.sep);
//join folders
const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath)
//get the basename - the last portion
const base = path.basename(filePath)
console.log(base)
//get absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
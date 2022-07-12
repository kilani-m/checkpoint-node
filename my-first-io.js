const fs = require('fs')
var cnts = fs.readFileSync(process.argv[2])
var ls = cnts.toString().split('\n').length - 1
console.log(ls)
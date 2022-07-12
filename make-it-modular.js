const mymodule = require('./mymodule.js')
var path=require('path')
var dirPath = process.argv[2];
var extension=process.argv[3];
mymodule(dirPath,extension,(err,data)=>{
    if (err) {
       console.log(err) 
    }
    data.forEach(file => {
        console.log(file)
    });
})
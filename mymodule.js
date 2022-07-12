var fs= require('fs');
var path=require('path')


const f=(dirPath,extension,callback)=>fs.readdir(dirPath, function(err, list) {
    if (err){ return callback(err)};
  list=  list.filter((file)=>{return path.extname(file)=="."+extension})
callback(null,list);
})

    module.exports=f;
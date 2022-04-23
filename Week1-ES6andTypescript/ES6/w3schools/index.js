const http=require('http');
http.createServer(function(req,res){
    res.write("hello world");
    res.end();
}).listen(3000);
console.log('server started');


const f=require('./person.js');
console.log(f.pname);
console.log(f.pday);

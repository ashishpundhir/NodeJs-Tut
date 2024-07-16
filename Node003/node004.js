const http = require('http');
http.createServer((req,res)=>{
    res.write("<h1>hello! This is Ashish</h1>");
    res.end();
}).listen(4500);
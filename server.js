const http = require('http');
const fs = require ('fs');    //fs is the file system

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  fs.readFile('./index.html' ,null , function(error , data){
    if (error){

      throw error;

    }else{
      res.writeHeader(200, {"Content-Type": "text/html"});  
      res.write(data);
      res.end();  
    }
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



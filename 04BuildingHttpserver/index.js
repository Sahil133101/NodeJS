const http = require('http');
const fs = require('fs');

const mysever = http.createServer((req, res) => {
   const log  = `${Date.now()} : new request received \n`;
    fs.appendFile('log.txt'. log);
    console.log("New request received");
    console.log(req);
    res.end("Hello from server");


});

mysever.listen(3000, () => {
    console.log("Server is running on port 3000");
}) ;

const http = require('http');
const fs = require('fs');

const mysever = http.createServer((req, res) => {
   const log  = `${Date.now()} : ${req.url} new request received \n`;
    fs.appendFile('log.txt', log ,(err, data) => {
       switch(req.url){
        case  "/" : 
        res.end("Home page ")
        break;

        case "/about":
            res.end("About page ")
        break;
        default :
        res.end("404 not found")
       }

    });
    // console.log("New request received");
    // console.log(req);



});

mysever.listen(3000, () => {
    console.log("Server is running on port 3000");
}) ;

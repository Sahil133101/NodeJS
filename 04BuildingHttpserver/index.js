const http = require('http');

const mysever = http.createServer((req, res) => {
    console.log("New request received");
    console.log(req);
    res.end("Hello from server");


});

mysever.listen(3000, () => {
    console.log("Server is running on port 3000");
}) ;

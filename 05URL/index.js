const http = require('http');

const server =  http.createServer((req, res) => {
console.log(req.url);

const pathName  =  req.url;

if(pathName  == '/'){
    res.end = "Hello from server";
}else if (pathName == "sahil"){
    res.end("Hello from nakur");
}
else {
    res.end("Hello from sahil");

    res.writeHead(200);
}
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
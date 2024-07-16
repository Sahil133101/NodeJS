const http = require('http');
const fs = require('fs');

const mysever = http.createServer((req, res) => {
   const log  = `${Date.now()} : new request received \n`;
    fs.appendFile('log.txt', log ,(err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
                <body>
                    <script>
                        alert("Hello from server again");
                    </script>
                </body>
            </html>
        `);;
    });
    // console.log("New request received");
    // console.log(req);



});

mysever.listen(3000, () => {
    console.log("Server is running on port 3000");
}) ;

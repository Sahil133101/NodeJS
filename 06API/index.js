 const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const myserver = http.createServer((req, res) => {
    // Get the pathname from the request URL
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("sahil, world!");
    } else if (pathname === '/api') {
        // Read data from data.json file
        const dataPath = path.join(__dirname, 'data.json');
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error");
                return;
            }
            // Parse JSON data
            const products = JSON.parse(data);
            // Send JSON response
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(products));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found!");
    }
});

// Start the server on port 8000
const PORT = 3000;
myserver.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

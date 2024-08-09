 const fs = require('fs');
const path = require('path');

setTimeout(() => console.log("hello world"), 2);
setImmediate(() => console.log("sahil"));

// setInterval(() => console.log("sharma"), 50);

fs.writeFile('./Hello.txt', 'Hello world', 'utf8', (err) => {
    if (err) throw err;
    console.log("File created successfully");
});

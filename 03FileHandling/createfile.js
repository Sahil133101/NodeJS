const fs = require("fs");

fs.writeFileSync('./Hello.txt', "hello duniya  ", (error, data) => {} );

console.log("File created successfully");

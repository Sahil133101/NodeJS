
const fs = require('fs');

// const result = fs.readFile('./Hello.txt', 'utf8', (error, result) => {

// if(error){
//     console.log("Error reading", error);
// }
// else {
//     console.log(result);
// }
// }); 

// const s  = fs.appendFileSync("./Hello.txt", 'hello ',"utf8")
// //console.log(s);
// const result = fs.readFileSync("./Hello.txt","utf-8"); 
// console.log(result);

const  os = require("os");
console.log(os.cpus().length);


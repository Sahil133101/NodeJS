
const fs = require('fs');

const result = fs.readFile('./Hello.txt', 'utf8', (error, result) => {

if(error){
    console.log("Error reading", error);
}
else {
    console.log(result);
}
}); 

// putting fs module content in a constant fs named variable.
const fs = require("fs");

// using __dirname + to add location of the parent directories so it will find yash.txt 
let text = fs.readFileSync(__dirname + "/Text Files/yash.txt","utf-8");

// if not using __dirname then it will throw an error if you not run this file from module directory.
// let text = fs.readFileSync("./Text Files/yash.txt","utf-8");

console.log("The content of the file is");
console.log(text);

// replacing browser with yash.
text = text.replace("browser","yash");

// the use use of __dirname explained in line 7
// creating or editing yash2.txt using value of text variable.
fs.writeFileSync(__dirname + "/Text Files/yash2.txt",text);
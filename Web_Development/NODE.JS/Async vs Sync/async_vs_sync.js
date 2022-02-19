// including fs module
const fs = require('fs');

// reading content of yash3.txt using fs.readFile and fs.readFileSync to know the difference.
// it will stop the program until the data is readed or an error occured so data will print first.
const data = fs.readFileSync(__dirname + "/Files/yash3.txt", "utf-8");
console.log(data);

// its callback function fires when the data of the file has been readed or an error occured, and the program will not stop until it ends.
fs.readFile(__dirname + '/Files/yash3.txt', 'utf-8', (err, content) => {

    // This will print later cause it in a call back function
    console.log(err, content);

});

// This will print after the data is printed cause fs.readFileSync is a synchronuous function and print before the content cause fs.readFile is a asynchronuous function.
console.log("This is a message");
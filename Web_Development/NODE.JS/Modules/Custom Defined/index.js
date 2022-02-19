// including add module with full path
const add = require(__dirname + "/add_module.js");

// defines a array for sum operation
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// if we exports as single module
// const value = add(array);

// if we exports as object 
const value = add.add(array);

// we can also access all keys.
console.log(value, add.name, add.repo);
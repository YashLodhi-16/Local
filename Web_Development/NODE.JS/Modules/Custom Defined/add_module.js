// creating a add function
function add(array){

    // this will stores the sum of all array elements.
    let total = 0;

    // adding for each loop to iterate parameter array and sum array element with total.
    array.forEach(element => {
        // adding element with total
        total += element;
    });

    // returning total 
    return total;
};

// Some methods for exporting module.

// exporting as a single module 
// module.exports = add;

// exporting as a object
module.exports = {
    add: add,
    name: "yash",
    repo: "https://github.com/YashLodhi-16/Local/tree/master"
};

// exporting as a separate objects
// module.exports.add = add;
// module.exports.name = "yash";
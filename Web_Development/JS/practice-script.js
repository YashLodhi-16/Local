console.log('YASH LODHI');

// tut=59;

// const sym1 = Symbol('My identifier');

// const sym2 = Symbol('My identifier');

// console.log('Symbol is ',sym1);

// console.log('Type of Symbol is',typeof sym1);

// console.log(sym1 === sym2);

// const a = 'this is';

// const b = 'this is';

// console.log(a === b);

// console.log(null === null);

// console.log(undefined === undefined);

// const k1 = Symbol('identifier for k1');

// const k2 = Symbol('for k2');

// let myObj = {};

// myObj[k1] = "yash";

// myObj[k2] = 'Rohan';

// myObj['name'] = 'good boy';

// myObj[4] = 'Good int';

// console.log(myObj);

// console.log(myObj[k1]);

// console.log(myObj[k2]);

// console.log(myObj.k2); // cannot do this 

// for(key in myObj) {
    
//     console.log(key, myObj[key]); //didn't work symbol's

// };

// console.log(JSON.stringify(myObj)); // also cannot do this 

// tut=60;

// const person = {
//     first: 'John',
//     last: 'Addison',
//     country: 'UK',
//     twitter: '@John_Addison',
// };

// const first = person.first;

// const last = person.last;

// const {first ,last} = person; // A way better

// console.log(first,last);

// var arr = ['hello','world'];

// var [first, second] = arr;

// console.log(first, second);

var colors = ['violet', 'indigo', 'blue', 'green'];

var [a,b, ...c] = colors;

console.log(a,b,c);
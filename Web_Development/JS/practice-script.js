console.log('YASH LODHI');

// function MyDetails(name, job, yearOfBirth){

//     this.name = name;

//     this.job = job;

//     this.yearOfBirth = yearOfBirth;

// }


// // console.log(MyDetails.prototype);

// function Student(){

//     this.name = 'Yash';

//     this.gender = 'Male';

// }

// Student.prototype.sayHi = function(){

//     console.log('Hello World!');

// };

// let std = new Student();

// std.toString();

// tut=30;

// const MyDetail= {

//     isHuman: true,

//     printIntro: function(){

//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);

//     }

// };

// const mySelf = Object.create(MyDetail);

// mySelf.name = 'Yash';

// mySelf.printIntro();

// function Factory (name, location) {

//     this.name = name;

//     this.location = location;

// }

// function Food (name, location) {

//     Factory.call(this, name, location);

//     this.category = 'food';

// }

// const myFood = new Food('Nestle', 'Uk')

// function Factory(){

// }

// Factory.prototype.FactoryMethod = function FactoryMethod(){}

// function Product1() {

//     Factory.call(this)

// }

// Product1.prototype.constructor = Product1;

tut=31;

class SimpleDate {

    constructor(year, month, day){

        this._year = year;

        this._month = month;

        this._day = day;

    }

    addMonth(nMonths){

    }

    getMonth(){
        
        return this.month;
        
    }

}

class Car {

    constructor(name, year) {

        this.name = name;

        this.year = year;

    }

    greet() {

        return `${this.name} says hello.`

    }
}

const car1 = new Car('Audi', 2018);

class Bike extends Car {

    constructor(name, year, speed){

        super(name, year);

        this.speed = speed;

    }

}

const bike1 = new Bike('Trek', 2019, 200);
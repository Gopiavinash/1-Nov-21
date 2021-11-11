'use strict';
/*
// *Default parameters*

const bookings = [];

const createBooking = function (
    flightNum, 
    numPassengers = 1,
    price = 2000 * numPassengers) {
        const booking = {
            flightNum,
            numPassengers,
            price
        };
        bookings.push(booking);
        console.log(bookings);
   };
   createBooking('A123', 16);
   
   ////////////////////////////////////////////////////////
   
   // *How Passing Arguments Works: Value vs. Reference

   const flight = 'AB123';
   const gopi = {
       name: 'Gopi Pagadala',
    passport:123456789,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'AB321';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 123456789) {
        alert('Checked In');
    }else {
        alert('Wrong Passport');
    }
};
checkIn(flight, gopi);
// console.log(flight);
// console.log(gopi);

// the output still provides same value after we change the value of variable flight in the function.
// Because while calling the function the primitive always provides copy as argument.
// But the reference data provides reference. So, if we change anything in the function automatically 
// original value changes. 

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000);
}
newPassport(gopi);
checkIn(flight, gopi);

// Mainly two terms always use in programming they are 1. pass by value, 2. pass by reference.
// In js there will be only pass by value and no pass by reference
// in function we pass pass by value as argument and pass only reference of object in hook.

// *Function Accepting Callback Function*

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('🖐');
}

document.body.addEventListener('click', high5);

// Calling function using foreach method
['Gopi', 'Pagadala', 'Esawar'].forEach(high5);

/////////////////////////////////////////////////////////

// *Function returning function*

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

// Rewriting the above function using arrow function
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Gopi')
greeterHey('Avinash')

greet('Hello')('Gopi');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(166, 'Gopi Pagadala');
lufthansa.book(661, 'Koushik Ongole');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(12, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(eurowings);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
// Normally apply method not much used inmodern javascript instead of that we use call method 
book.apply(swiss, [545, 'Rahul']);
console.log(swiss);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gopi Pagadala');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(lufthansa.planes);
};
document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

// Rewriting above example using function return another function

const addTax = function(value) {
    return function(rate) {
        return  (value + value * rate);
    };
};
console.log(addTax(100)(0.25));
*/


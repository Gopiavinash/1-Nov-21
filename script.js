'use strict'

// Coding Challenge

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
  const [first, second] = row.toLowerCase().trim().split('_');
  
  const output = `${first}${second.replace(
    second[0], 
    second[0].toUpperCase())}`;
    console.log(`${output.padStart(20)} ${'✅'.repeat(i + 1)}`);
  }
});

/*
// Working with strings part - 3
console.log('a+very+nice+string'.split('+'));
console.log('Gopi Pagadala'.split(' '));

const [firstName, lastName] = 'Gopi Pagadala'.split(' ');

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

// Capitalizing the first letter in the word

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  const namesUpperCase = namesUpper.join(' ');
  console.log(namesUpperCase);
}
capitalizeName('gopi pagadala');
capitalizeName('ram moham roy');

// Padding 
const message = 'Hello World';
console.log(message.padStart(20, '-').padEnd(30, '-'));

//  Exercise on padding
// Hidding the credit numbers and displaying only last four digits
const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(987456321987));
console.log(maskCreditCard(123456789123));

// Repeat
const message2 = 'Gopi Pagadala ';
console.log(message2.repeat(10));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInLine(5);
planesInLine(10);


// Working with strings part - 2

const airline = 'indigo airline';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

function  passengerName(passenger) {
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + 
passengerLower.slice(1).toLowerCase();
console.log(passengerCorrect);                         
}
passengerName('gOpI');

// Comparing email
function compare(email, loginEmail) {
  const normalizedEmail = loginEmail.toLowerCase().trim();
  if(email === normalizedEmail) {
    console.log('Satisfied');
  }
};
compare('gopi@gmail.com', ' Gopi@gmail.com \n');

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 
`All passengers come to boarding door 16. Boarding door 16!`;

console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Boolean
const plane = 'Airbus B1625';
console.log(plane.includes('16'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Air') && plane.endsWith('25')) {
  console.log('Welcome to the new airline family.');
}

// Practice Exercise
// 1.Checking whether a person has got any harmfull things with him. 

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('gun') || baggage.includes('knife')){
    console.log('You are not allowed onboard!')
  }else {
    console.log('Welcome onboard');
  }
};
checkBaggage('I have a laptop, food and pocket Knife.')
checkBaggage('Have Gun for peotection.')

// Working with strings part-1

//  The strings are primitives but still they have methods.
// whenever we call the method in the string javscript behind the scene converts into object.

const airline = 'Indigo airline';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B235'.length);
console.log('B235'[0])
console.log(airline.length);

// string methods 
console.log(airline.indexOf('o'));
console.log(airline.lastIndexOf('i'));

console.log(airline.slice(4));
console.log(airline.slice(4, 6));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf('a')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(2, -2));

const checkMiddleSeat = function (seat) {
  // A and C are the middle seats
  const s = seat.slice(-1);
  if (s === 'A' || s === 'C') console.log('You got middle seat');
  else console.log('You got a seat');
}
checkMiddleSeat('123A');
checkMiddleSeat('123B');
checkMiddleSeat('123C');

console.log(new String('Gopi'));
console.log(typeof new String('Gopi'));
console.log(typeof new String('Gopi').slice(0));
*/









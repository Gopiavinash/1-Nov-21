'use strict';

/*
// Functions

function fruitProcessor(orange, apple) {
    return ` The juice contains ${orange} oranges and ${apple} apples.`;
}
console.log(fruitProcessor(10, 16));



function desribeCountry(country, population, capitalCity) {
    return `${country} has ${population} crore people and its city is ${capitalCity}.`;
}
console.log(desribeCountry('India', 139, 'Delhi'));
console.log(desribeCountry('Australia', 45, 'Camberra'));

/////////////////////////////////////////

// function Declaration

function calcAge1(birthYear) {
    return 2021 - birthYear;
}
console.log(calcAge1(1999));

// Function Expression

const age2 = function (birthYear) {
    return 2021 - birthYear;
}
console.log(age2(1999));

/////////////////////////////////////////

const populationWorld = 7900;
function percentageOfWorld1(country, population) {
 return  `${country} has ${population} million people, so it's about ${(population / populationWorld) * 100}% of world population.`;
}
console.log(percentageOfWorld1('China', 1441));

/////////////////////////////////////////

// Arrow function

const age3 = birthYear => 2021 - birthYear;
console.log(age3(1999));


const yearsForRetirement = (name, birthYear) => {
    const age4 = 2021 - birthYear;
    const retirement = 65 - age4;
    return `${name} retires in ${retirement} years`;
}
console.log(yearsForRetirement('Ramarao', 1985));

/////////////////////////////////////////////////

const populationWorld = 7900;
const  percentageOfWorld3 = (country, population) =>
  `${country} has ${population} million people, so it's about ${(population / populationWorld) * 100}% of world population.`;

console.log(percentageOfWorld3('China', 1441));


///////////////////////////////////////////////

// Function calling other function

 function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice contains ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
}
console.log(fruitProcessor(10, 15));

const calcAge = function(birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function(name, birthYear) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
       return console.log(`${name} retires in '${retirement}' years.`)
    } else {
       return console.log(`${name} has already retired.`)
    }
}
yearsUntilRetirement('Rohan', 1960);
*/


/*
// *Reverse a number*

// 1. First convert a number to string in code line 102 
//   Different ways to convert to a string they are
// string literal -> str = num + '';
// string constructor -> str = String(num);
// toString -> str = num.toString();

function reverseNumber(n) {
       n = n + '';
    return n.split('').reverse().join('');    
    }
console.log(Number(reverseNumber(123456)));

function reverseNumber(n) {
    n = n + '';
    let split = n.split('');
    let reversedStr = '';

    for(let i = split.length - 1; i >= 0; i--) {
      reversedStr += split[i];
    }
    return reversedStr;
}
console.log(Number(reverseNumber(123456)));

// Arrays

// let arr = new Array();
// let arr = [];

const friends = ['gopi', 'rahul', 'ramesh'];
friends[2] = 'krishna';
console.log(friends);

let age = [56, 18, 19, 32];
let age1 = [15,61,52,45];
let s_age = age.concat(age1);
console.log(s_age);

let fruits = ['Banana', 'Orange', 'Mango'];
fruits.splice();
console.log(fruits);


const populationWorld = 7900;
function percentageOfWorld(population) {
 return  (population / populationWorld) * 100;
}
const population = [139, 152, 45, 36];
const percentages = [
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3])
]
console.log(percentages);

const neighbours = ['Bangladesh', 'Pakisthan', 'Srilanka'];
neighbours.push('Utopia');
neighbours.pop();

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Bangladesh')] = 'Lahore is the capital of Pakisthan.'
console.log(neighbours);


// Objects

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myobj);
console.log(myobj['channel']);
console.log(myobj.channel);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job and friends');

if(jonas[interestedIn]) {
console.log(jonas[interestedIn]);
} else {
    console.log('Wrong input.');
};


const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 139,
    neighbours: ['Pakisthan', 'Bangladesh', 'Srilanka']
    };

    console.log(
        `${myCountry.country} has ${myCountry.population} million
        ${myCountry.language}-speaking people,
        ${myCountry.neighbours.length} neighbouring countries and
        a capital called ${myCountry.capital}.`
        );
        
    myCountry.population = myCountry.population + 2;
    // myCountry.population += 2;

    myCountry['population'] = myCountry['population'] - 2;
    // myCountry['population'] -= 2;
    console.log(myCountry);  

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calAge: function() {
       this.age = 2021 - this.birthYear;
       return this.age;
    },
};
jonas.calAge();
console.log(jonas);
console.log(jonas.age);
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
};
mark.calBMI();
console.log(mark.BMI);

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
};
john.calBMI();
console.log(john.BMI); 
*/
'use strict';
/*
let js = 'amaging';
js = 'boring';
if (js === 'amaging') {
    alert('Javascript is Fun');
}else {
    alert('Javasript is Boring');
}


// Mathematical Operators

const now = 2021;
const age = now - 1999;

// Assignment Operator
let y = 16 + 16;
 y = 16;

//  Comparison Operator
const year = 2021;
const ageGopi = year - 1999;
const ageRahim = year - 2000;
console.log(ageGopi >=22);
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


// if / else statements

const age = 17;

if( age >= 18) {
    console.log('You can drive a car!');
} else {
    console.log('You dont have enough age to drive a car!');
}
*/

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

/////////////////////////////////////////////

if ( BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
} else {
    console.log(`Mark's BMI (${BMIMark}) is less than John's BMI (${BMIJohn})!`);
}


console.log(Boolean(0));


const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Yes, you can drive a car.`);
} else {
    console.log(`You dont have a permission to drive a car.`);
}
*/

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphiins wins the trophy 👏');
} else if(scoreKoalas > scoreDolphins) {
    console.log('Koalas wins the trophy 👏');
} else if(scoreDolphins === scoreKoalas) {
    console.log('Both of them are winners 👏');
}

// Data Types
let country = 'India';
let continent = 'Asia';
let population = '139';
let isIsland = false;
let language = 'Telugu';
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// Basis operators
console.log(population / 2);
population++;
console.log(population);
let populationFinland = 6;
console.log(population > populationFinland);
let populationAvg = 33;
console.log(population < populationAvg);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// if / else staement

if ( population > populationAvg) {
    console.log(`${country}'s population is above average.'`)
} else {
    const avg = population - populationAvg / 2;
    console.log(`${country}'s population is ${avg} milllion below average.`)
}

// type coversion & type Coersion
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Equality Operators: == vs. ===
const numNeighbours = Number(prompt(
    'How many neighbour countries does your country have?'));
 if(numNeighbours == 1) {
     console.log('Only 1 border');
 } else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No border');
}

// * Which number is bigger

function higher(a, b) {
    if ( a > b) {
        return `${a} is greater than ${b}`
    } else {
        return `${b} is greater than ${a}`
    }
}
console.log(higher(16, 10));

///////////////////////////////////////////

// Grade Assigner
function grade(marks) {
    if (marks > 92) {
        return 'O';
    } else if (marks > 82) {
        return 'S';
    } else if (marks > 72) {
        return 'A';
    } else if (marks > 62) {
        return 'B';
    } else if (marks > 52) {
        return 'c';
    } else if (marks > 42) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(`You have got a "${grade(86)}" grade in the examinations.`);

////////////////////////////////////////////////

function pluralize(noun, number) {
    return `${number} ${noun}`;
}
console.log(pluralize('icecreams', 5));
console.log(pluralize('chocolates', 10));

*/


 



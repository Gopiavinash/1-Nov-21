'use strict';

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
      const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
      console.log(answer);

    // Register answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
      if (type === 'array') {
          console.log(this.answers);
      }else if (type === 'string') {
          console.log(`Poll results are ${this.answers.join(', ')}`)
      };
  },
};

// poll.registerNewAnswer();

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// *Immediately Invoked Function Expression (IIFE)

// This is a normal function
const runOnce = function (input) {
    console.log(`This will ${input} again`);
} (`never run`);

// This is a IIFE
(function(input) {
    console.log(`This will ${input} again`);
}) (`never run`);

((input) => console.log(`This will ${input} again`)) (`never run`); // Using arrow function

// *Closures*

const secureBooking = function () {
    let passengerCount = 0;
  
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker)

// *Examples on Closures*
// Example - 1

let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    };
}

g();
f();
console.dir(f);

// Re-assigning f function 
h();
f();
console.dir(f);

// Example - 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    
    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 2);
*/


///////////////////////////////////////
// Coding Challenge

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
      header.style.color = 'blue';
  })
})();
*/

/*
// Exercises on function 
// Exercise  - 1

// Write a JavaScript function that reverse a number.

// Choice - 1

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

// Choice - 2

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

// Exercise - 2
// Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));
*/
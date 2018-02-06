"use strict";

/* 2.We learned a little bit about callbacks in JS.
A callback is simply a function passed to another function that gets executed(run) 
after a potentially long running operation has completed.
There is another function called setTimeout that will wait 
a specified period of time and then execute a function.For example:

function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000)
If you run the above code it will wait 5 seconds and print I am done.
Please read something about setTimeout on MDN.

The first argument to the setTimeout call is the callback(doIt)
-----------------------------------------------------------------
You must write a function that takes 4 arguments. 
- A start value 
- An end value 
- A callback to call if the number is divisible by 3 
- A callback to use if the number is divisible by 5

The function should generate an array containing values from start value to end value
(inclusive).

Then the function should iterate over the array and call the first callback 
if the array value is divisible by 3

The function should call the second callback if the array value is divisible by 5

Both functions should be called if the array value is divisible by both 3 and 5 */

/* THIS IS FAKE CODE
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    // start at beginning of array and check if you should call 
    threeCallback or fiveCallback or go on to next  
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive  
- please make sure you see why these calls are made before you start coding. */

{
    function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
        const numbers = [];
        for (let i = startIndex; i <= stopIndex; i++) {
            numbers.push(i);
        }

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 3 === 0) {
                threeCallback(numbers[i]);
            }
            if (numbers[i] % 5 === 0) {
                fiveCallback(numbers[i]);
            }
        }
    }

    function sayThree(num) {
        console.log(num + ' is divisible by 3');
    }

    function sayFive(num) {
        console.log(num + ' is divisible by 5');
    }


    threeFive(10, 15, sayThree, sayFive);
}

/*
{
  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const cards = [];
    for (let i = startIndex; i <= stopIndex; i++) {
      cards.push(i);
    }

    cards.forEach(card => {
      if (card % 3 === 0) {
        threeCallback(card);
      }
      if (card % 5 === 0) {
        fiveCallback(card);
      }
    });
  }

  function sayThree(num) {
    console.log(num + ' is divisible by 3');
  }

  function sayFive(num) {
    console.log(num + ' is divisible by 5');
  }


  threeFive(10, 15, sayThree, sayFive);
}
*/

'use strict';

/*3. Please solve this problem using: 
https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
3.1 A for loop.
3.2 A while loop.
3.3 A do loop. */

// 3.1 For loop

console.log("-----Ex 4 step3.1, writing function using 'for' loop:-----\n");

function repeatStringNumTimesFor(str, num) {


    if (num < 0) {
        str = "";
        console.log("invalid number selector, please enter positive number.");
    } else {
        str = str;
    };

    // The above "if" statement can be written as a ternary operator, ie  str = num < 0 ? "" : str;
    let newStringA = "";
    for (let i = 0; i < num; i++) {
        newStringA += str;
    };

    console.log("Function using 'for' loop: " + newString);
}

repeatStringNumTimesFor("abc", 3);

console.log(" ");

//3.2 While loop
console.log("-----Ex 4 step3.2, writing function using 'while' loop:-----\n");

function repeatStringNumTimesWhile(str, num) {

    if (num < 0) {
        str = "";
        console.log("invalid number selector, please enter positive number.")
    } else {
        str = str;
    };
    // The above "if" statement can be written as a ternary operator, ie str = num < 0 ? "" : str;
    let newStringB = "";
    let i = 0;
    while (i < num) {
        newStringB += str;
        i++;
    }

    console.log("Function using 'while' loop: " + newString2);
}

repeatStringNumTimesWhile("abc", 3);
console.log("");

//3.3 Do loop

console.log("-----Ex 4 step3.3, writing function using 'do' loop:-----\n");

function repeatStringNumTimesDo(str, num) {

    str = num < 0 ? "" : str;
    let newStringC = "";
    let i = 0;

    do {
        newStringC += str;
        i++;
    } while (i < num);

    console.log("Function using 'do'/ 'do while' loop: " + newString3);
}

repeatStringNumTimesDo("abc", 3);

console.log("");

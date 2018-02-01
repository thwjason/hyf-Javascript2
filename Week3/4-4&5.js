"use strict";

// 4. Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

console.log("-----Step 4 part 4:----- \n");

let Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};


let MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;

};
console.log(Car);
console.log(MotorBike);

// 5. Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops

console.log("-----Step 4 part 5:----- \n");

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = arr[i][j] * product;
        }
    }

    console.log("This function should now multiply all the (sub-) arrays. In the case of the given example, that is \
    multiplyAll([[1, 2], [3, 4], [5, 6, 7]]), it should return an answer of 5040, and the answer is: " + product);
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log("-----Step 4 part 5:----- \n");

/* 6. We did some work with arrays - var arr = [1, 2, 3] We can also nest arrays inside arrays 
like this var arr2d = [[1, 2], [3, 4], [5, 6]](for math people you can think of this as a matrix). 
How would you print all the items of an array with 3 dimensions ?*/

console.log("I. I suspect you can use the same answer as in step 4 part 5 to do it.");

// How about with K dimensions ? 

console.log("II. I suspect you can use the same answer as in step 4 part 5 to do it, but you will have to run a FOR loop \
for K itself. But I confess don't actually know what this will look like.");

//What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)

console.log("III. I suspect the answer is linked to II. above, and you do it instead with a 'DO WHILE' loop. But again, I am guessing.");
"use strict";

// 1. Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

// Your solution could be something like this:

// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers.push(numbers[i] * 2);
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]
// Rewrite the above program using map and filter don't forget to use =>

let numbers = [1 ,2, 3, 4];

let newNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
}).map((number) => {
    return number * 2;
});
console.log(newNumbers);

/* incidentally, if you want an array of odd/even numbers only you can do the following:-
let numbers = [];
;et evenNumbers =[];
let oddNumbers = [];
for (let i = 0; i < 51; i++) {
    numbers.push(i);
}
for (let i = 0; i < 51; i = i+2){
    evenNumbers.push(i);
}

for (let i = 1; i < 51; i = i+2){
    oddNumbers.push(i);
}
*/

//2.

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);

//step 2A: collect 2 days' worth of tasks

console.log("-----Collect 2 days' worth of tasks.-----");
console.log("    ");

function totalTime(total) {
    let sum = 0;
    total.forEach((index) => {
        sum += index.duration;
    })
    return sum;
};

console.log("Minutes spent in two days: " + totalTime(tasks) + "\n");

//step 2B: Convert the task durations to hours, instead of minutes.
console.log("-----Converting to hours instead of minutes.----- \n")

function convertToHours(sum) {
    let hours = sum.map((duration) => {
        duration.duration = duration.duration / 60;
        return duration;
    });
    return hours;
}
let hours = convertToHours(tasks);


console.log(hours + "\n"); 

//step 2C: Filter out everything that took two hours or more (remove from the collection)
console.log("-----Filtering out anything which took two hours or more.------\n")


function removeTwoHours(arr) {
    let newArr = arr.filter((item) => {
        return item.duration < 2;
    });
    return newArr;
}

console.log(removeTwoHours(hours));
console.log("    ");

/*step2.4 Multiply the each duration by a per-hour rate for billing
(you can decide yourself what Maartje should make per hour) and sum it all up.*/

console.log("-----Rate of pay.------")
console.log("    ");

function rateHours(arr) {
    let sum = 0;
    arr.forEach((item) => {
        sum += item.duration * 50;
    })
    return sum;
}
console.log("Total hours: ")
console.log('Euro ' + rateHours(hours).toFixed(2));
"use strict";
/*
Write a function that would allow you to do this:
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/



function createBase(value) {
    return function (x) {
        return x += value;
    }
}
let addSix = createBase(6);


console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

/*
Bonus: Write a function takes this array['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']
and returns an array which only has unique values in it(so it removes the duplicate ones).
Make it a 'smart' algorithm that could do it for every array(only strings / number). 
Try to make it as fast as possible!
*/

let letterArr = ["a", "b", "c", "d", "a", "e", "f", "c"];
function removeDuplicates() {
    let newArr = Array.from(new Set(letterArr));
    return newArr;
};
console.log(removeDuplicates());
"use strict";

/*1.We saw that we can pass functions as arguments to other functions.
Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
    // What to do here? 
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar); */

function foo(func) {
    // What to do here? 
    console.log("Hello, I am foo!");
    func();
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);
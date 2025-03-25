"use strict";
let person;
person = ["Name", "function", 30];
//console.log(person)
//console.log(person[1])
// tuples with labels
let person2 = person = ["Name", "function", 30];
console.log(person2);
//Spread operator with tuples
let tuple = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
//console.log(... tuple)
let tuple2 = [5, true, ...tuple];
console.log(...tuple2);

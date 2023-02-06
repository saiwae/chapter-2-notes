// variables store data for later use

// create a variable with let
let myVariable = "value";
let myNewVariable = 7;
let myBool = true;

// accessing variable values
console.log(myVariable);
console.log(myNewVariable+5);
console.log(myBool && true);

// update value stored
myNewVariable = 10;
console.log(myNewVariable);

// increase by 1
myNewVariable=myNewVariable+1;
console.log(myNewVariable);

// decrease by 1
myNewVariable=myNewVariable-1;
console.log(myNewVariable);

// multiply by 3
myNewVariable=myNewVariable*3;
console.log(myNewVariable);

// divide by 3
myNewVariable=myNewVariable/3;
console.log(myNewVariable);

// divide and return remainder
myNewVariable=myNewVariable%2;
console.log(myNewVariable);

// shortcuts
let x=100;
x=x+1 // adds 1
x++ // adds 1

let y=50;
y=y-1 // minus 1
y-- // minus 1

let z=12;
z=z+5 // add 5
z+=5 // add 5

let answer=45;
answer=answer-2; // minus 2
answer-=2; // minus 2

// other shortcuts
answer*=7; // multiply by 7
answer/=2; // divide by 2

// keywords
const pi=3.14;
const username="myUser123";
//constants cannot change values
var old=123;
// var is the old way to create variables instead of let
// don't use it

let a=5;
let b=7;
a=a+b;
b=a+b;
console.log(a<b);
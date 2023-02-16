const readLine = require('readline-sync')

//1
let x = Number(readLine.question("give me a number: "));
let y = Number(readLine.question("give me another number: "));
let sum = (`${x+y}`);
console.log(sum);


//2
let a = Number(readLine.question("give me a number: "));
let b = Number(readLine.question("give me another number: "));
let difference = (`${a-b}`);
console.log(difference);


//3
let d = Number(readLine.question("give me a number: "));
let e = Number(readLine.question("give me another number: "));
let product = (`${d*e}`);
console.log(product);


//4
let f = Number(readLine.question("give me a number: "));
let g = Number(readLine.question("give me another number: "));
let quotient = (`${f/g}`);
console.log(quotient);


//5
let w = Number(readLine.question("give me a number: "));
let z = Number(readLine.question("give me another number: "));
let remainder = (`${w%z}`);
console.log(remainder);


//6
let first = readLine.question("what is your first name? ");
let last = readLine.question("what is your last name? ");
console.log(`Welcome ${last}, ${first}!`);


//7
let title = readLine.question("what is your title? (Mr., Mrs., Ms., etc) ");
let lname = readLine.question("what is your last name? ");
let suffix = readLine.question("what is your preferred suffix? (Jr., III, PhD, etc) ");
console.log(`Welcome ${title} ${lname}, ${suffix}`);


//8
let stnum = readLine.question("street number: ");
let stname = readLine.question("street name: ");
let sttype = readLine.question("street type (ave, way, st, etc.): ");
let city = readLine.question("city: ");
let state = readLine.question("state: ");
let zip = readLine.question("zip code: ");
console.log(`${stnum} ${stname} ${sttype}\n${city}, ${state} ${zip}`)


//9
let q = Number(readLine.question("give me a number: "));
let s = Number(readLine.question("give me another number: "));
let quo = (`${Math.floor(q/s)}`);
let rem = (`${q%s}`);
console.log(`${q} divided by ${s} equals ${quo} remainder ${rem}`);


//10
let t = Number(readLine.question("give me a number: "));
let i = Number(readLine.question("give me another number: "));
if (t>i){
    console.log(`${t} is bigger`);
} else if (t<i){
    console.log(`${i} is bigger`);
}


//11
let u = Number(readLine.question("give me a number: "));
let v = Number(readLine.question("give me another number: "));
if (u>v){
    console.log(`${v} is smaller`);
} else if (u<v){
    console.log(`${u} is smaller`);
}
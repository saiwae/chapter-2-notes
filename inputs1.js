//1
const readLine = require('readline-sync');

let answer = readLine.question("do you want to hear a joke? (yes/no) ");
if (answer == 'yes'){
    console.log("RIP, boiling water.\nYou will be mist.");
}

//2 & 3
let number = readLine.question("give me a number ");
if (number%6 == 0){
    console.log("divisible by 6");
} else {
    console.log("not divisible by 6");
}
if (number%3 == 0){
    console.log("divisible by 3");
} else {
    console.log("not divisible by 3");
}
if (number%4 == 0){
    console.log("divisible by 4");
} else {
    console.log("not divisible by 4");
}
if (number%5 == 0){
    console.log("divisible by 5");
} else {
    console.log("not divisible by 5");
}

//4
let secret = readLine.question("guess the secret number ");
if (secret == 18){
    console.log("you won!");
} else if (secret > 18){
    console.log("your guess was too high.");
} if (secret < 18){
    console.log("your guess was too low.");
}

//5 & 6
let mealprice = Number(readLine.question("enter your meal price: "));
let tax = Number((mealprice*0.08).toFixed(2));
let newprice = (`${mealprice+tax}`);
console.log(`new meal price: ${newprice}`);
if (mealprice == 0){
    console.log("please enter a value");
}

//7
let price = Number(readLine.question("cost of your meal: "));
let service = readLine.question("was service great, good, or average? ");
if (service == "great"){
    console.log(`meal & tip cost: ${(price+price*.2).toFixed(2)}`);
} else if (service == "good"){
    console.log(`meal & tip cost: ${(price+price*.15).toFixed(2)}`);
} else if (service == "average"){
    console.log(`meal & tip cost: ${(price+price*.1).toFixed(2)}`);
}
if (price == 0){
    console.log("please enter a value");
}

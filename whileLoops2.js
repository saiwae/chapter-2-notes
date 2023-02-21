const readLine= require('readline-sync');

//11
let a = readLine.question("do you wish to quit? (Y/N)\n");
while (a != "Y" && a != "N"){
    a = readLine.question("invalid. do you wish to quit? (Y/N)\n");
}

//12
let b = readLine.question("do you wish to quit? (Y/N)\n");
while (b != "Y" && b != "N" && b != "y" && b != "n"){
    b = readLine.question("invalid. do you wish to quit? (Y/N)\n");
}

//13
let c = readLine.question("choose option A, B, or C: ");
while (c!="A" && c!="B" && c!="C"){
    c = readLine.question("invalid. choose option A, B, or C: ");
}

//14
let d = readLine.question("choose option 1, 2, or 3: ");
while (d!="1" && d!="2" && d!="3"){
    d = readLine.question("invalid. choose option 1, 2, or 3: ");
}

//15
let e = readLine.question("choose a number between 0 and 10: ");
while (e!="0" && e!="1" && e!="2" && e!="3" && e!="4" && e!="5" && e!="6" && e!="7" && e!="8" && e!="9" && e!="10"){
    e = readLine.question("invalid. choose a number between 0 and 10: ");
}

//16
let f = readLine.question("give me a positive number: ");
while (f < 0){
    f = readLine.question("invalid. give me a positive number: ");
}

//17
let g = readLine.question("give me a negative number ");
while (g > 0){
    g = readLine.question("invalid. give me a negative number: ");
}

//18
let i = readLine.question("give me an even number: ");
while (i%2 != 0){
    i = readLine.question("invalid. give me an even number");
}

//19
let h = readLine.question("enter a number between 0-10 or 20-30: ");
while (h!="0" && h!="1" && h!="3" && h!="3" && h!="4" && h!="5" && h!="6" && h!="7" && h!="8" && h!="9" && h!="10" && h!="20" && h!="21" && h!="22" && h!="23" && h!="24" && h!="25" && h!="26" && h!="27" && h!="28" && h!="29" && h!="30"){
    h = readLine.question("invalid. enter a number between 0-10 or 20-30: ");
}

//20
let j = readLine.question("choose a month (1-12): ");
while (j!="1" && j!="2" && j!="3" && j!="4" && j!="5" && j!="6" && j!="7" && j!="8" && j!="9" && j!="10" && j!="11" && j!="12"){
    j = readLine.question("invalid. choose a month (1-12): ");
}
if (j==1){
    console.log("january has 31 days");
} else if (j==2){
    console.log("february has 28 days but 29 days every 4 years");
} else if (j==3){
    console.log("march has 31 days");
} else if (j==4){
    console.log("april has 30 days");
} else if (j==5){
    console.log("may has 31 days");
} else if (j==6){
    console.log("june has 30 days");
} else if (j==7){
    console.log("july has 31 days");
} else if (j==8){
    console.log("august has 31 days");
} else if (j==9){
    console.log("september has 30 days");
} else if (j==10){
    console.log("october has 31 days");
} else if (j==11){
    console.log("november has 30 days");
} else if (j==12){
    console.log("december has 31 days");
}
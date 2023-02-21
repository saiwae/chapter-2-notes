const readLine = require('readline-sync');

//1
let a = 0;
while (a<26){
    console.log(a);
    a++;
}

//2
let b = 0;
while (b<51){
    console.log(b);
    b++;
}

//3
let c = -10;
while (c<11){
    console.log(c);
    c++;
}

//4
let d = 0;
while (d>-51){
    console.log(d);
    d--;
}

//5
let e = 0;
while (e<100){
    e+=2;
    console.log(e);
}

//6
let f = -1;
while (f<99){
    f+=2;
    console.log(f);
}

//7
let g = 0;
while (g<99){
    g+=3;
    console.log(g);
}

//8
let h = 0;
while (h<99){
    h+=5;
    console.log(h);
}

//9
let i = 0;
while (i <= 100){
    if (i < 10){
        console.log(i);
    } else if (i > 25){
        console.log(i);
    }
    i++;
}

//10
let j = 0;
while (j <= 100){
    if (j < 10){
        console.log(j);
    } else if (j > 20){
        console.log(j);
    }
    if (40 < j < 50){
        console.log(j);
    }
    j++;
}
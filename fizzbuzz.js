const readLine = require('readline-sync');

// let i = 0;
// while (i <= 100){
//     if (i % 3 == 0){
//         console.log('fizz');
//     } else if (i % 5 == 0){
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }
//     i++;
// }

for(let i = 0; i <= 100; i++){
    if (i % 3 == 0){
        console.log('fizz');
    } else if (i % 5 == 0){
        console.log('buzz');
    } else {
        console.log(i);
    }
    i++;
}
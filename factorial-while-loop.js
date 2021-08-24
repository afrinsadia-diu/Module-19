// function getFactorial (number){
//     factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial*i;
//         i++;
//     }
//     return factorial;
// }
// var fact = getFactorial(8);
// console.log(fact);



function turnfactorial (number){
    factorial= 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

var fact = turnfactorial(9);
console.log(fact);

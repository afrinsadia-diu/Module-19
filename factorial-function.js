function getFactorial(number){
    let factorial =1;
    for( let i =1 ; i<= number; i++){
        factorial = factorial *i;
    }
    return factorial;
}
var myfact = getFactorial(9);
console.log('factorial 9 is', myfact);
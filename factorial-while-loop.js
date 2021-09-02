
// Incremental Factorial

/* 
function getIncrementalFactorial(num) {
    let factorial = 1;
    let i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let num = 5;
let firstFactorial = getIncrementalFactorial(num);
console.log('First Factorial', firstFactorial);


num = 7;
let secondFactorial = getIncrementalFactorial(num);
console.log('Second Factorial', secondFactorial);
*/

// Descrimental Factorail

function getDecrementalFactorail(num) {
    let factorial = 1;
    let i = num;

    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let num = 0;
let firstFactorial = getDecrementalFactorail(num);
console.log('First Factorial', firstFactorial);


// num = 7;
// let secondFactorial = getDecrementalFactorail(num);
// console.log('Second Factorial', secondFactorial);
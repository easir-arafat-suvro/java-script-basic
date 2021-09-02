

function factorialVlue(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {    // 'i<=num" value is num bcz num may any number.
        factorial = factorial * i;
    }
    return factorial;
}

let num = 3;
let firstFactorial = factorialVlue(num);
console.log('First Factorial', firstFactorial);


num = 5;
let secondFactorial = factorialVlue(num);
console.log('Second Factorial', secondFactorial);


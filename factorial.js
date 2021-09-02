/*
   0! = 1
   1! = 1
   2! = 2*1
   3! = 3*2*1
   4! = 4*3*2*1
   5! = 5*4*3*2*1
*/


var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
    console.log(factorial);
}

console.log(factorial);

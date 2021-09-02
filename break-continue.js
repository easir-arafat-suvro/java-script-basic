i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

console.log('--------')

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i > 6) {
        break;
    }
}

console.log('--------')

var numbers = [20, 30, 50, 40, 12, 101, 21, 25, 65, 80, 70];
// console.log(numbers[5])
// console.log(numbers.indexOf(100));


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 100) {
        break;
    }
}

console.log('--------')

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if
        (number > 90) {
        continue;
    }
    console.log(number);
}
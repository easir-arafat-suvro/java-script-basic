// A function is used for repetative tasks
// Note : DEBUG file with node, Automated in this video ----

// mile to killo meter
function mileToKm(miles) {
    var km = miles * 1.609434;
    return km;
}

var marathon = mileToKm(26.2);
console.log('marathon in km:', marathon);

//Check even and odd number using function

function isEven(number) {
    var number1 = number % 2;
    if (number1 == 0) {
        return true;
    }
    return false;
}

function isOdd(number) {
    if ((number % 2) != 0) {
        return true;
    }
    return false;
}

var numberType1 = isEven(121);
var numberType2 = isOdd(121);

console.log('Is number even', numberType1);
console.log('Is NUmber odd', numberType2);
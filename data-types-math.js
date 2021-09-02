// Understanding data types
var isNumber = 100;
console.log(typeof isNumber);

var isString = 'Mamun';
console.log(typeof isString);

var isboolean1 = true;
console.log(typeof isboolean1)

var isboolean2 = false;
console.log(typeof isboolean2);


// Variables Decleared
var firstName = 'S.M. Easir Arafat';
var secondName = 'Suvro';
var ageFather = 37;
var ageMother = '35';

var mangoes = 63;
var mangoBag = 3;
var orange = 13;
var hangryMan = 12;

var floatPrice1 = .1;
var floatPrice2 = .2;

// Addition & Concatination
var addResult = mangoes + orange;
console.log(addResult);

// Add Name
var fullName = firstName + ' ' + secondName;
console.log(fullName);

// father age after one year

var ageFather = ageFather + 1;
console.log(ageFather);
//or,
ageFather += 1;
console.log(ageFather);
//or,
ageFather++;
console.log(ageFather);

// Wrong addition of a number & string
var totalAgeInString = ageFather + ageMother;
console.log(totalAgeInString);

//Correct addition of a number & string
var totalAgeInNumber = ageFather + parseInt(ageMother);
console.log(totalAgeInNumber);

//----------

// Subtraction
var subResult = mangoes - orange;
console.log(subResult);

mangoes = mangoes - 1;
console.log(mangoes);
//or,
mangoes -= 1
console.log(mangoes);
//or,
mangoes--;
console.log(mangoes)

//-----------

// Multiplication
var multResult = mangoes * mangoBag;
console.log(multResult);

// dividation
var divResult = mangoes / hangryMan;
console.log(divResult);

// Modulas
var modResult = mangoes % hangryMan;
console.log(modResult);

// Addition
var floatTotal1 = floatPrice1 + floatPrice2;
console.log(floatTotal1);

// To fix the floating number
// var floatTotal2 = (floatPrice1 + floatPrice2).toFixed(1);
// or,
var floatTotal2 = floatTotal1.toFixed(1);
console.log(floatTotal2);

//Note : ".toFixed" return a string to check
console.log(typeof floatTotal2);

// Convert to number
var parseFloatingNumber = parseFloat(floatPrice2);
console.log(parseFloatingNumber);

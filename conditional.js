// 17-6 Make conditional decision, if-else, comparison

// if food is ready I will eat
// if food is ready == true / false

// --- structure of conditionel code : ---
// if (condition) {
//     console.log(run / notrun the code)
// }


// --- single condition / No options---
// run code
var isFoodReady = true;

if (isFoodReady == true) {
    console.log('I am hangry will eat now');
}


//code not run
var isFoodReady = false;

if (isFoodReady == true) {
    console.log('I am hangry will eat now');
}



// --- Duble condition / Alternative Options ---

var chickenPrice = 180;
var myMoney = 20;

if (chickenPrice < myMoney) {
    console.log('I will eat chicken')
}
else {
    console.log('I will eat smashed potato with lentil soup');
}
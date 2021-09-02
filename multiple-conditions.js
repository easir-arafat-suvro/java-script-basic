// 17-7 Handle multiple conditions, and or


var fishPrice = 350;
var meatPrice = 750;
var vagitablePrice = 500;
var moneyInHnad = 650;

// single condition
if (fishPrice < moneyInHnad) {
    console.log('buy fish and some vagitable');
}


// Multiple conditions
if ((vagitablePrice && meatPrice) < moneyInHnad) {
    console.log('buy fish and meat')
}


if ((vagitablePrice && meatPrice) < moneyInHnad && (moneyInHnad - (vagitablePrice && meatPrice)) < moneyInHnad) {
    console.log('buy vegitable also')
}
else {
    console.log('buy only vegitable and meat')
}


// Muliple decisions

if ((vagitablePrice + fishPrice + meatPrice) < moneyInHnad) {
    console.log('by all bazar');
}
else if ((vagitablePrice + fishPrice) < moneyInHnad) {
    console.log('by vagitable and fish only')
}
else if (vagitablePrice < moneyInHnad) {
    console.log('by vegitable only')
}
else {
    console.log('bring some money....')
}


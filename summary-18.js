var skyColor = 'white';

var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
phones[2] = 'walton';
phones.indexOf('oppo'); //result - -1 , due to unavailable in array

// check oppo exist in an array
if (phones.indexOf('oppo') == -1) {
    // console.log('oppo is not available in the array')
}

if (phones.indexOf('lg') != -1) {
    // console.log('lg is available in the stock');
}


//Loop

var i = 0;
while (i < 10) {
    // console.log(i);
    i++;
}

for (var i = 0; i <= 10; i++) {
    // console.log(i);
}

// Function & function's paramiter

function addThreeNums(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}

var sumOf3Nums = addThreeNums(10 + 20 + 30);

// object
var microPhone = {
    phone: 'blue yeti',
    price: 120,
    color: 'black'
}

microPhone.phone; // to know property value
var phoneName = microPhone.phone; // hold the property value

microPhone.price = 100; // set a new value
microPhone['price'] = 140 // set a new value

var micPrice = 'price';
microPhone['micPrice'] = 200; // set a new value

// console.log(microPhone);
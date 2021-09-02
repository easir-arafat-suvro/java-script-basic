// var > object name > = > {property name : value, property name : value;}

var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

console.log(computer); // to know all properties and values of an object.
console.log(computer.processor); //to know value of a particuler properties.


var computerPrice = computer.price; // to hold the property value of a object


// to set object's property value;
var priceProperty = 'price';
computer[priceProperty] = 20000;
computer['price'] = 21000;
computer.price = 22000;

console.log(computer);



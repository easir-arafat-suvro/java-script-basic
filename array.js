//<<<--- M.17-3 --->>>

// Array is the collection of elements with in a [ ],

var friendsName = ['easir', 'arafat', 'suvro', 'fatema', 'ahsani', 'shova'];
var friendsAge = [12, 15, 20, 250, 7, 8, 25];

//Checking array elements
console.log(friendsName);
console.log(friendsAge);

// Numbers of elements within a array
console.log(friendsName.length);
console.log(friendsAge.length);

// Element position within the array
var indexPosition = friendsName.indexOf('suvro');
console.log(indexPosition);

// negative position if element is not available
var indexPositionNegetive = friendsAge.indexOf(125);
console.log(indexPositionNegetive);

// Elelment value of a particular index position within a array
var indexValue = friendsName[3];
console.log(indexValue);
var indexValue = friendsAge[3];
console.log(indexValue);
var indexValue = friendsAge[152]; // 152 index is not available
console.log(indexValue);

//replace a new value within a array

friendsName[0] = 'Muhammd';
friendsName[5] = 'sharmin';
console.log(friendsName);


//<<<--- M.17-4 --->>>

// Add or remove element from array using push, pop
// push - add & pop - removed element from an array

// Add an element end of an array
console.log(friendsName);
console.log(friendsAge);

friendsName.push('rayhan');
console.log(friendsName);

friendsAge.push(222);
console.log(friendsAge);

// remove an element end of an array

friendsName.pop();
console.log(friendsName);  // easir - removed

friendsAge.pop();
console.log(friendsAge); //  222 - removed


// HOME TASKs : add & removed element from the begining ???


// 1. VARIABLE : To declear a variable.
var favoriteBook = 'Al-Quaran';
favoriteBook = 'Al-Quaran from Allah'; //to update a variable by replacing a new one


// 2. ARRAY : To declear an array for holding more than one element.
var bookList = [
    'hadis',
    'islam shikkha',
    'islamic history',
    'hayatus sahaba'
];

var islamicHistoryIndex = bookList.indexOf('islamic history');          //to know the position of an element within a array
bookList[1] = 'islam & iman';                                           //to update an array by replacing a new element
bookList.push('bukhari sharif', 'muslim sharif');                       // to add new element / elements end of the array
bookList.pop();                                                         // to remove an element end of the array
var holdPopElement = bookList.pop();                                    // to hold pop element


// 3. CONDITIONALS : if, else ; while loop ; for loop
if (bookList[1] == 'islam shikkha') {
    console.log('i am islam shikkah !!!');
}
else {
    // console.log('islam shikkha is not available');
    console.log('Book in index position 1 is ' + bookList[1]);
}


var i = 0;      // loop variable
while (i < 10) {
    console.log(i, ' While Loop');
    i++;
}


for (var i = 0; i < 10; i++) {
    console.log(i, ' For Loop');
}


/* note :
i = 0 is an inniciation, i < 10 condition, i++ increment. */
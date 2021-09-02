var color = 'yellow';

if (color == 'blue') {
    console.log('color is blue');
}
else if (color == 'red') {
    console.log('color is red');
}
else if (color == 'pink') {
    console.log('color is pink');
}
else if (color == 'green') {
    console.log('color is green');
}
else if (color == 'gray') {
    console.log('color is gray');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
else {
    console.log('color is black');
}

// where cases are more logical use switch is more efficient than else if: 

switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'pink':
        console.log('color is pink');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'gray':
        console.log('color is gray');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}
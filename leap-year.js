// to check the year is leap year or not

function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 == 0) || (year % 400 == 0)) {
        // console.log(year, 'is leap year');
        return true;
    }
    else {
        // console.log(year, 'is not a leap year');
        return false;
    }
}

var year = 2021;

var leapYear = isLeapYear(year);

if (leapYear == true) {
    console.log('Year -', year, 'is a leap year.')
}
else {
    console.log('Year -', year, 'is not a leap year.')
}


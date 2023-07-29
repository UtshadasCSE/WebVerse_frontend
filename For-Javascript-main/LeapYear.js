const prompt = require('prompt-sync')();
var year = prompt("Enter your year:")

function isLeapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        console.log("Leap Year")
    }
    else{
        console.log("Not Leap year");
    }
}
isLeapYear(year)
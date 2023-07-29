const prompt = require('prompt-sync')();
function lifeInTime(age){
    console.log("You have "+Days+" and "+Weeks+" weeks and "+Months+" months");
}
var age=prompt("Your age:")
var yearsRemaining=90-age;
var Days=yearsRemaining*365;
var Weeks=yearsRemaining*52;
var Months=yearsRemaining*12;
lifeInTime(age);

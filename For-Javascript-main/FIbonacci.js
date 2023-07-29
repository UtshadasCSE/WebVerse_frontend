const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter number:"));
let first=0,second=1;
console.log("Fibonacci Series:");
for(let i=1;i<=number;i++){
    console.log(first);
    nextNumber=first+second;
    first=second;
    second=nextNumber;
}
const prompt = require("prompt-sync")();

let a = prompt("Enter A:");
let b = prompt("Enter B:");
let c = a;
a=b;
b=c;
console.log(a,b);
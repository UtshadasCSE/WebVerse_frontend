const prompt = require('prompt-sync')();

let name = prompt("Enter your name:");
console.log(name);
console.log(name.toUpperCase());
console.log(name.toLocaleLowerCase());

console.log(name.slice(1,3));

console.log(typeof(name));
let convert = Number.parseInt(name);
console.log(typeof(convert));

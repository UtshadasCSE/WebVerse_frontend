let btn = document.querySelector("button");
let result = document.getElementById("result");
let randomNumber = Math.floor(Math.random() * 10) + 1;
function gamePlay() {
  let img = document.getElementById("img");
  let userInput = document.getElementById("userInput").value;
  let number = Number(userInput);
  if (randomNumber == number) {
    result.innerHTML = `Congrats! you guess the correct number [${randomNumber}]`;
    img.style.width = "300px";
  } else if (randomNumber > number) {
    result.innerHTML = "Try again,Your number is smaller than guess number";
  } else if (randomNumber < number) {
    result.innerHTML = "Try again,Your number is bigger than guess number";
  }
}

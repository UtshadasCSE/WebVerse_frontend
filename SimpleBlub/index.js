let blub = document.getElementById("blub");
let button = document.getElementById("btn");
let flag = 0;
button.addEventListener("click", function () {
  if (flag == 0) {
    blub.style.backgroundColor = "#f8de22";
    blub.style.boxShadow = "0 0 30px #ebe76c";
    button.innerText = "TURN OFF";
    flag = 1;
  } else if (flag == 1) {
    blub.style.backgroundColor = "transparent";
    blub.style.boxShadow = "0 0 0";
    button.innerText = "TURN ON";
    flag = 0;
  }
});

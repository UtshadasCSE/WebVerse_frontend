let isStatus = document.querySelector("h5");
let addFr = document.getElementById("addFr");
const remove = document.getElementById("remove");

addFr.addEventListener("click", function () {
  isStatus.innerHTML = "Friends";
  isStatus.style.color = "green";
  addFr.innerText = "Now Friend";
});
remove.addEventListener("click", function () {
  isStatus.innerHTML = "Stranger";
  isStatus.style.color = "#ff2171";
});

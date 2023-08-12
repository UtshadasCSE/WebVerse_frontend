let menu = document.querySelector("nav ul");
let hamBurg = document.querySelector("nav .mobile");
hamBurg.addEventListener("click", function () {
  menu.classList.toggle("show");
});
